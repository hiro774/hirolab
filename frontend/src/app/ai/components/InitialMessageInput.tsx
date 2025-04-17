import React from "react";

type InitialMessageInputProps = {
  inputText: string;
  setInputText: (text: string) => void;
  sendMessage: (e: React.FormEvent) => Promise<void>;
  isSending: boolean;
  inputRef: React.RefObject<HTMLInputElement | null>;
};

// 初期状態の中央配置された入力フォームコンポーネント
const InitialMessageInput: React.FC<InitialMessageInputProps> = ({
  inputText,
  setInputText,
  sendMessage,
  isSending,
  inputRef,
}) => {
  return (
    <div className="flex items-center justify-center h-[calc(100vh-200px)]">
      <div className="w-full max-w-2xl px-4 animate-scaleIn">
        <div className="text-center mb-8 mt-20 md:mt-0">
          <div className="flex justify-center mb-3"></div>
          <h2 className="text-4xl font-bold text-primary mb-2 relative inline-block">
            HIRO AI
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-transparent"></span>
          </h2>
          <p className="text-gray-600 mt-5">
            何でも質問してください。お手伝いします。
          </p>
        </div>
        <div className="bg-white/90 backdrop-blur-md rounded-xl p-5 border border-white/40 shadow-lg transform transition-all duration-300 hover:shadow-xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <form
            onSubmit={sendMessage}
            className="flex items-center relative z-10"
          >
            <div className="relative flex-grow">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  className="opacity-70"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z" />
                </svg>
              </div>
              <input
                ref={inputRef}
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="AIに質問してみましょう..."
                className="flex-grow w-full pl-10 pr-3 py-3 rounded-l-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all duration-200 bg-white/80"
                disabled={isSending}
                autoFocus
              />
            </div>
            <button
              type="submit"
              className="bg-primary hover:bg-primary-dark text-white p-3 rounded-r-lg transition-all duration-300 disabled:opacity-50 hover:shadow-md hover:shadow-primary/20 relative overflow-hidden group/btn"
              disabled={isSending || !inputText.trim()}
            >
              <span className="absolute inset-0 w-full h-full bg-white/10 transform scale-x-0 group-hover/btn:scale-x-100 transition-transform origin-left duration-300"></span>
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
    </div>
  );
};

export default InitialMessageInput;
