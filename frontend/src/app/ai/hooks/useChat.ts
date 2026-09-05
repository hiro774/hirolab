import { FormEvent, useEffect, useRef, useState } from "react";
import { MessageType } from "./types";
class ChatError extends Error {}
export const useChat = () => {
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [inputText, setInputText] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [history, setHistory] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const requestRef = useRef<AbortController | null>(null);
  const mountedRef = useRef(true);

  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
      requestRef.current?.abort();
    };
  }, []);

  const sendMessage = async (event: FormEvent) => {
    event.preventDefault();
    const content = inputText.trim();
    if (!content || requestRef.current) return;
    const request = new AbortController();
    requestRef.current = request;
    const timestamp = new Date().toLocaleTimeString("ja-JP", {
      hour: "2-digit",
      minute: "2-digit",
    });
    setMessages((previous) => [
      ...previous,
      { id: `${Date.now()}-user`, content, sender: "user", timestamp },
    ]);
    setInputText("");
    setIsSending(true);
    setError(null);
    const timeout = setTimeout(() => request.abort(), 30000);
    try {
      const endpoint = process.env.NEXT_PUBLIC_MESSAGE_API_ENDPOINT;
      if (!endpoint)
        throw new ChatError(
          "現在、AIに接続できません。時間をおいて、もう一度お試しください。",
        );
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content, history }),
        signal: request.signal,
      });
      if (response.status === 429)
        throw new ChatError(
          "質問が集中しています。少し時間をおいて、もう一度お試しください。",
        );
      if (!response.ok)
        throw new ChatError(
          "現在、AIに接続できません。時間をおいて、もう一度お試しください。",
        );
      const data = await response.json();
      if (typeof data.content !== "string" || !data.content.trim())
        throw new ChatError(
          "回答を受け取れませんでした。もう一度お試しください。",
        );
      if (!mountedRef.current) return;
      setMessages((previous) => [
        ...previous,
        {
          id: `${Date.now()}-ai`,
          content: data.content,
          sender: "ai",
          timestamp: new Date().toLocaleTimeString("ja-JP", {
            hour: "2-digit",
            minute: "2-digit",
          }),
        },
      ]);
      setHistory((previous) => [...previous, content, data.content]);
    } catch (cause) {
      if (!mountedRef.current) return;
      setError(
        cause instanceof ChatError
          ? cause.message
          : "AIへの接続に時間がかかっています。時間をおいて、もう一度お試しください。",
      );
      setInputText(content);
    } finally {
      clearTimeout(timeout);
      requestRef.current = null;
      if (mountedRef.current) {
        setIsSending(false);
        requestAnimationFrame(() => inputRef.current?.focus());
      }
    }
  };
  return {
    isInitialState: messages.length === 0,
    messages,
    inputText,
    setInputText,
    isSending,
    sendMessage,
    inputRef,
    error,
  };
};
