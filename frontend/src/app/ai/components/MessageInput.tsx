import { FormEvent, RefObject } from "react";
export type MessageInputProps = {
  inputText: string;
  setInputText: (text: string) => void;
  sendMessage: (event: FormEvent) => Promise<void>;
  isSending: boolean;
  inputRef: RefObject<HTMLInputElement | null>;
};
export default function MessageInput({
  inputText,
  setInputText,
  sendMessage,
  isSending,
  inputRef,
}: MessageInputProps) {
  return (
    <form
      onSubmit={sendMessage}
      className="ai-input-form"
      aria-label="AIへのメッセージ"
    >
      <label className="ai-visually-hidden" htmlFor="ai-message">
        HIRO AIへのメッセージ
      </label>
      <input
        id="ai-message"
        ref={inputRef}
        type="text"
        value={inputText}
        onChange={(event) => setInputText(event.target.value)}
        placeholder="HIRO AIに質問してみる…"
        disabled={isSending}
        autoComplete="off"
      />
      <button
        type="submit"
        className="ai-send-button"
        disabled={isSending || !inputText.trim()}
        aria-label={isSending ? "返信を待っています" : "メッセージを送信"}
      >
        {isSending ? (
          <span className="ai-loading-ring" aria-hidden="true" />
        ) : (
          <svg
            width="21"
            height="21"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M12 19V5m-6 6 6-6 6 6"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </button>
    </form>
  );
}
