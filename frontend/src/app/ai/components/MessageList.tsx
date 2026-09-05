import { RefObject } from "react";
import Image from "next/image";
import { MessageType } from "../hooks/types";
type MessageListProps = {
  messages: MessageType[];
  isSending: boolean;
  messagesEndRef: RefObject<HTMLDivElement | null>;
  messagesContainerRef: RefObject<HTMLDivElement | null>;
};
export default function MessageList({
  messages,
  isSending,
  messagesEndRef,
  messagesContainerRef,
}: MessageListProps) {
  return (
    <div
      ref={messagesContainerRef}
      className="ai-messages"
      role="log"
      aria-label="会話履歴"
      aria-live="polite"
      aria-relevant="additions"
      tabIndex={0}
    >
      <p className="ai-conversation-start">HIRO AIとの会話</p>
      {messages.map((message) => (
        <div
          key={message.id}
          className={`ai-message-row ai-message-row-${message.sender}`}
        >
          {message.sender === "ai" && (
            <Image
              className="ai-message-avatar"
              src="/images/icon/hiro_robot.webp"
              alt=""
              width={36}
              height={36}
            />
          )}
          <div className="ai-message-body">
            <span className="ai-message-author">
              {message.sender === "user" ? "あなた" : "HIRO AI"}
            </span>
            <p className="ai-message-bubble">{message.content}</p>
            <time className="ai-message-time">{message.timestamp}</time>
          </div>
        </div>
      ))}
      {isSending && (
        <div className="ai-waiting" role="status">
          <span className="ai-loading-ring" aria-hidden="true" />
          返信を待っています…
        </div>
      )}
      <div ref={messagesEndRef} />
    </div>
  );
}
