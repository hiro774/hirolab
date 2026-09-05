"use client";
import Link from "next/link";
import AiHeader from "./components/AiHeader";
import MessageList from "./components/MessageList";
import MessageInput from "./components/MessageInput";
import InitialMessageInput from "./components/InitialMessageInput";
import { useChat } from "./hooks/useChat";
import { useScroll } from "./hooks/useScroll";
import "./ai.css";

export default function Ai() {
  const {
    isInitialState,
    messages,
    inputText,
    setInputText,
    isSending,
    sendMessage,
    inputRef,
    error,
  } = useChat();
  const { messagesEndRef, messagesContainerRef } = useScroll({
    messages,
    isSending,
  });
  const inputProps = {
    inputRef,
    inputText,
    setInputText,
    sendMessage,
    isSending,
  };
  return (
    <div className="page-shell ai-page">
      <div className="ai-page-label">
        <span className="eyebrow">PLAYGROUND</span>
        <span>ひとことから、はじめよう。</span>
      </div>
      {isInitialState ? (
        <InitialMessageInput {...inputProps} />
      ) : (
        <section className="ai-chat surface" aria-label="HIRO AIとの会話">
          <AiHeader />
          <MessageList
            messages={messages}
            isSending={isSending}
            messagesEndRef={messagesEndRef}
            messagesContainerRef={messagesContainerRef}
          />
          <div className="ai-chat-composer">
            {error && (
              <p className="ai-error" role="alert">
                {error}
              </p>
            )}
            <MessageInput {...inputProps} />
          </div>
        </section>
      )}
      <p className="ai-footer-note">
        制作物やスキルは、<Link href="/works">Works</Link>・
        <Link href="/about">About</Link>でもご覧いただけます。
      </p>
    </div>
  );
}
