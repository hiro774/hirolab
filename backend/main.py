from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from langchain_openai import ChatOpenAI
from langchain_core.messages import HumanMessage, AIMessage, SystemMessage
from dotenv import load_dotenv
import os

from prompt import create_prompt as create_system_prompt


# --- 初期化関連 ---
def get_api_key() -> str:
    load_dotenv()
    api_key = os.getenv("OPENAI_API_KEY")
    if not api_key:
        raise ValueError("OPENAI_API_KEY is not set in .env")
    return api_key


def get_chat_model() -> ChatOpenAI:
    return ChatOpenAI(model="gpt-4o-mini", api_key=get_api_key())


def get_initial_messages() -> list:
    return [SystemMessage(content=create_system_prompt())]


# --- リクエストとレスポンスの型定義 ---
class Query(BaseModel):
    history: list[str]
    content: str


class Response(BaseModel):
    content: str

# --- アプリ本体 ---
app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://0.0.0.0:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.post("/api/ai", response_model=Response)
async def submit_query(
    query: Query,
    model: ChatOpenAI = Depends(get_chat_model),
):
    # 履歴を構築
    messages = [SystemMessage(content=create_system_prompt())]

    for i, msg in enumerate(query.history):
        # 偶数：user、奇数：ai として交互に追加（前提）
        if i % 2 == 0:
            messages.append(HumanMessage(content=msg))
        else:
            messages.append(AIMessage(content=msg))

    # 今回のユーザー発言を追加
    messages.append(HumanMessage(content=query.content))

    # モデルから応答取得
    result = model.invoke(messages)

    return {"content": result.content}