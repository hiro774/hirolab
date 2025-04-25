import { useState, useRef, useEffect } from "react";
import { MessageType } from "./types";

export const useChat = () => {
  const messageApiUrl = process.env.NEXT_PUBLIC_MESSAGE_API_ENDPOINT;

  // 初期状態かどうかを管理する状態
  const [isInitialState, setIsInitialState] = useState(true);
  // メッセージの状態管理
  const [messages, setMessages] = useState<MessageType[]>([]);
  // 入力テキストの状態管理
  const [inputText, setInputText] = useState("");
  // 送信中の状態管理
  const [isSending, setIsSending] = useState(false);
  // 履歴の管理
  const [history, setHistory] = useState<string[]>([]);
  // 入力カーソルのref
  const inputRef = useRef<HTMLInputElement>(null);
  // タイピングアニメーション用の状態
  const [typingMessageId, setTypingMessageId] = useState<string | null>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // メッセージを送信する関数
  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!inputText.trim()) return;

    // 初期状態の場合は、通常状態に切り替える
    if (isInitialState) {
      setIsInitialState(false);
    }

    const now = new Date().toLocaleTimeString("ja-JP", {
      hour: "2-digit",
      minute: "2-digit",
    });

    // ユーザーメッセージをUIに追加
    const userMessage: MessageType = {
      id: Date.now().toString(),
      content: inputText,
      sender: "user",
      timestamp: now,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputText("");
    setIsSending(true);

    // UIの更新が完了するのを待ってからフォーカスを設定（機能していない可能性有）
    setTimeout(() => {
      inputRef.current?.focus();
    }, 10);

    try {
      // APIリクエスト
      const response = await fetch(`${messageApiUrl}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content: inputText, history: history }),
      });
      // APIレスポンス
      const data = await response.json();

      // AIの応答をUIに追加（タイピングアニメーション付き）
      setTimeout(() => {
        const messageId = (Date.now() + 1).toString();
        const aiMessage: MessageType = {
          id: messageId,
          content: "", // 最初は空
          fullContent: data.content, // 完全なテキスト
          sender: "ai",
          timestamp: now,
          isTyping: true, // タイピング中フラグ
        };

        setMessages((prev) => [...prev, aiMessage]);
        setTypingMessageId(messageId); // タイピングアニメーションを開始
        setHistory((prev) => [...prev, inputText, data.content]);
        setIsSending(false);

        // AIの応答が表示された後に再度フォーカスを設定
        setTimeout(() => {
          inputRef.current?.focus();
        }, 100);
      }, 1000); // 1秒の遅延を追加してAIが「考えている」ように見せる
    } catch (error) {
      console.error("Error sending message:", error);

      // エラーメッセージをUIに追加（タイピングアニメーション付き）
      const messageId = (Date.now() + 1).toString();
      const errorMessage: MessageType = {
        id: messageId,
        content: "",
        fullContent:
          "申し訳ありません、メッセージの送信中にエラーが発生しました。もう一度お試しください。",
        sender: "ai",
        timestamp: now,
        isTyping: true,
      };

      setMessages((prev) => [...prev, errorMessage]);
      setTypingMessageId(messageId);
      setIsSending(false);

      // エラー表示後にも入力フィールドにフォーカスを戻す
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  };

  return {
    isInitialState,
    messages,
    setMessages,
    inputText,
    setInputText,
    isSending,
    sendMessage,
    inputRef,
    typingMessageId,
    setTypingMessageId,
  };
};
