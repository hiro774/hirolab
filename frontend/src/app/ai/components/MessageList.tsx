import React from "react";
import Image from "next/image";
import { MessageType } from "./types";

type MessageListProps = {
  messages: MessageType[];
  isSending: boolean;
  messagesEndRef: React.RefObject<HTMLDivElement | null>;
  messagesContainerRef: React.RefObject<HTMLDivElement | null>;
};

const MessageList: React.FC<MessageListProps> = ({
  messages,
  isSending,
  messagesEndRef,
  messagesContainerRef,
}) => {
  return (
    <div
      ref={messagesContainerRef}
      className="flex-grow bg-white/60 backdrop-blur-sm p-4 pb-0 overflow-y-auto border-x border-b border-white/30 shadow-inner rounded-b-xl"
    >
      <div className="space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${
              message.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-[80%] sm:max-w-[70%] rounded-2xl p-3 ${
                message.sender === "user"
                  ? "bg-primary/10 text-gray-800"
                  : "bg-white shadow-md border border-gray-100"
              }`}
            >
              {message.sender === "ai" && (
                <div className="flex items-center mb-1">
                  {/* <div className="w-6 h-6 rounded-full overflow-hidden mr-2">
                    <Image
                      src="/images/icon/hiro_robot.png"
                      alt="HIRO AI"
                      width={24}
                      height={24}
                      className="object-cover"
                    />
                  </div> */}
                  <span className="text-sm font-medium text-primary ml-1">
                    HIRO AI
                  </span>
                </div>
              )}
              <p className="text-sm sm:text-base whitespace-pre-wrap">
                {message.content}
                {message.isTyping && (
                  <span className="inline-block w-1 h-4 ml-1 bg-primary animate-pulse"></span>
                )}
              </p>
              <div
                className={`text-xs mt-1 ${
                  message.sender === "user"
                    ? "text-right text-gray-500"
                    : "text-gray-400"
                }`}
              >
                {message.timestamp}
              </div>
            </div>
          </div>
        ))}

        {/* 送信中インジケーター */}
        {isSending && (
          <div className="flex justify-start">
            <div className="max-w-[80%] sm:max-w-[70%] rounded-2xl p-3 bg-white shadow-md border border-gray-100">
              <div className="flex items-center mb-1">
                <div className="w-6 h-6 rounded-full overflow-hidden mr-2">
                  <Image
                    src="/images/icon/hiro_robot.png"
                    alt="HIRO AI"
                    width={24}
                    height={24}
                    className="object-cover"
                  />
                </div>
                <span className="text-xs font-medium text-primary">
                  HIRO AI
                </span>
              </div>
              <div className="flex space-x-1">
                <div
                  className="w-2 h-2 rounded-full bg-gray-300 animate-bounce"
                  style={{ animationDelay: "0ms" }}
                ></div>
                <div
                  className="w-2 h-2 rounded-full bg-gray-300 animate-bounce"
                  style={{ animationDelay: "150ms" }}
                ></div>
                <div
                  className="w-2 h-2 rounded-full bg-gray-300 animate-bounce"
                  style={{ animationDelay: "300ms" }}
                ></div>
              </div>
            </div>
          </div>
        )}

        {/* 自動スクロール用の空のdiv */}
        <div ref={messagesEndRef} />
      </div>
    </div>
  );
};

export default MessageList;
