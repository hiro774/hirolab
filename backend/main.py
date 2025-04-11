from fastapi import FastAPI, Depends
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
    content: str

class Response(BaseModel):
    content: str

# --- アプリ本体 ---
app = FastAPI()

@app.post("/", response_model=Response)
async def submit_query(
    query: Query,
    model: ChatOpenAI = Depends(get_chat_model),
    messages: list = Depends(get_initial_messages),
):
    user_input = query.content
    messages.append(HumanMessage(content=user_input))

    result = model.invoke(messages)

    messages.append(AIMessage(content=result.content))

    return {"content": result.content}
