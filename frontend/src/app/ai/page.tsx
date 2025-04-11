"use client";

import React from "react";
import AiHeader from "./components/AiHeader";
import MessageList from "./components/MessageList";
import MessageInput from "./components/MessageInput";
import { useChat } from "./components/useChat";

export default function Ai() {
  const {
    messages,
    inputText,
    setInputText,
    isSending,
    sendMessage,
    messagesEndRef,
    messagesContainerRef,
  } = useChat();

  return (
    <div className="min-h-screen flex flex-col animate-fadeIn pt-12 pb-40 transition-all duration-300">
      {/* チャットコンテナ */}
      <div className="flex-grow flex flex-col max-w-4xl mx-auto w-full px-4 sm:px-6">
        {/* チャットヘッダー */}
        <AiHeader />
        {/* メッセージエリア */}
        <MessageList
          messages={messages}
          isSending={isSending}
          messagesEndRef={messagesEndRef}
          messagesContainerRef={messagesContainerRef}
        />
      </div>

      {/* 固定された入力エリア */}
      <MessageInput
        inputText={inputText}
        setInputText={setInputText}
        sendMessage={sendMessage}
        isSending={isSending}
      />
    </div>
  );
}
