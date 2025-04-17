from fastapi import FastAPI, Depends, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from pydantic import BaseModel
from langchain_openai import ChatOpenAI
from langchain_core.messages import HumanMessage, AIMessage, SystemMessage
from dotenv import load_dotenv
import httpx
import os

# レート制限用のインポート
from slowapi import Limiter, _rate_limit_exceeded_handler
from slowapi.util import get_remote_address
from slowapi.errors import RateLimitExceeded
from slowapi.middleware import SlowAPIMiddleware

from prompt import create_prompt as create_system_prompt

# =====================
# 初期設定
# =====================
load_dotenv()

# レート制限の設定
limiter = Limiter(key_func=get_remote_address)
app = FastAPI()
app.state.limiter = limiter
app.add_exception_handler(RateLimitExceeded, _rate_limit_exceeded_handler)
app.add_middleware(SlowAPIMiddleware)

origins = os.getenv("ALLOWED_ORIGINS")

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# レート制限超過時のカスタムエラーハンドラー
@app.exception_handler(RateLimitExceeded)
async def custom_rate_limit_exceeded_handler(request: Request, exc: RateLimitExceeded):
    return JSONResponse(
        status_code=429,
        content={
            "error": "リクエスト制限を超えました。しばらく待ってから再試行してください。",
            "retry_after": exc.retry_after,
        },
        headers={"Retry-After": str(exc.retry_after)},
    )


OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")
SLACK_WEBHOOK_URL = os.getenv("SLACK_WEBHOOK_URL")


# =====================
# ユーティリティ関数
# =====================


def get_chat_model() -> ChatOpenAI:
    if not OPENAI_API_KEY:
        raise ValueError("OPENAI_API_KEY is not set in .env")
    return ChatOpenAI(model="gpt-4o-mini", api_key=OPENAI_API_KEY)


def build_history_messages(history: list[str], current: str):
    messages = [SystemMessage(content=create_system_prompt())]

    for i, msg in enumerate(history):
        role = HumanMessage if i % 2 == 0 else AIMessage
        messages.append(role(content=msg))

    messages.append(HumanMessage(content=current))
    return messages


async def send_to_slack(name: str, email: str, content: str) -> bool:
    if not SLACK_WEBHOOK_URL:
        raise ValueError("SLACK_WEBHOOK_URL is not set in .env")

    message = {
        "text": f"📩 *新しいお問い合わせ*\n\n*名前:* {name}\n*メール:* {email}\n*内容:*\n{content}"
    }

    async with httpx.AsyncClient() as client:
        response = await client.post(SLACK_WEBHOOK_URL, json=message)
        return response.status_code == 200


# =====================
# 型定義
# =====================


class Query(BaseModel):
    history: list[str]
    content: str


class Response(BaseModel):
    content: str


class ContactForm(BaseModel):
    name: str
    email: str
    content: str


# =====================
# APIエンドポイント
# =====================


@app.post("/api/ai", response_model=Response)
@limiter.limit("5/minute")  # 1分間に10リクエストまで
async def submit_query(
    request: Request,  # レート制限のために必要
    query: Query,
    model: ChatOpenAI = Depends(get_chat_model),
):
    messages = build_history_messages(query.history, query.content)
    result = model.invoke(messages)
    return {"content": result.content}


@app.post("/api/contact")
@limiter.limit("5/minute")  # 1分間に10リクエストまで
async def contact(request: Request, form: ContactForm):
    success = await send_to_slack(form.name, form.email, form.content)
    return {"success": success}


@app.api_route("/health", methods=["GET", "HEAD"])
async def monitor(request: Request):
    return JSONResponse(content={"status": "ok"}, status_code=200)
