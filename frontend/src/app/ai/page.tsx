"use client";

import React from "react";
import AiHeader from "./components/AiHeader";
import MessageList from "./components/MessageList";
import MessageInput from "./components/MessageInput";
import InitialMessageInput from "./components/InitialMessageInput";
import { useChat } from "./components/useChat";

export default function Ai() {
  const {
    isInitialState,
    messages,
    inputText,
    setInputText,
    isSending,
    sendMessage,
    inputRef,
    messagesEndRef,
    messagesContainerRef,
  } = useChat();

  // 初期状態の場合は中央配置された入力フォームを表示
  if (isInitialState) {
    return (
      <div className="min-h-[calc(100svh-40px)] md:min-h-[calc(100vh-50px)] flex flex-col animate-fadeIn pt-5 pb-0 md:pb-0 md:pt-12 transition-all duration-300">
        <InitialMessageInput
          inputRef={inputRef}
          inputText={inputText}
          setInputText={setInputText}
          sendMessage={sendMessage}
          isSending={isSending}
        />
      </div>
    );
  }

  // 通常状態の場合は従来のチャットインターフェースを表示
  return (
    <div className="mt-15 min-h-[calc(100svh-40px)] md:min-h-[calc(100vh-50px)] flex flex-col animate-fadeIn pt-5 pb-0 md:pb-0 md:pt-12 transition-all duration-300">
      {/* チャットコンテナ */}
      <div className="flex-grow flex flex-col max-w-5xl mx-auto w-full px-4 sm:px-6">
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
      <div className="max-w-5xl mx-auto w-full mt-2 mb-5 md:mb-10">
        <MessageInput
          inputRef={inputRef}
          inputText={inputText}
          setInputText={setInputText}
          sendMessage={sendMessage}
          isSending={isSending}
        />
      </div>
    </div>
  );
}
