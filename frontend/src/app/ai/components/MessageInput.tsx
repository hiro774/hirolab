import React from "react";

type MessageInputProps = {
  inputText: string;
  setInputText: (text: string) => void;
  sendMessage: (e: React.FormEvent) => Promise<void>;
  isSending: boolean;
  inputRef: React.RefObject<HTMLInputElement | null>;
};

const MessageInput: React.FC<MessageInputProps> = ({
  inputText,
  setInputText,
  sendMessage,
  isSending,
  inputRef,
}) => {
  return (
    <div className="fixed bottom-10 md:bottom-6 left-0 right-0 z-10 px-4 transition-all duration-300 ease-in-out">
      <div className="max-w-2xl mx-auto bg-white/90 backdrop-blur-md rounded-xl p-3 border border-white/40 shadow-lg transform transition-transform duration-300">
        <form onSubmit={sendMessage} className="flex items-center">
          <input
            ref={inputRef}
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="メッセージを入力..."
            className="flex-grow p-3 rounded-l-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/30"
            disabled={isSending}
          />
          <button
            type="submit"
            className="bg-primary hover:bg-primary-dark text-white p-3 rounded-r-lg transition-colors duration-200 disabled:opacity-50"
            disabled={isSending || !inputText.trim()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z" />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
};

export default MessageInput;
