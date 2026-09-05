import Image from "next/image";
import MessageInput, { MessageInputProps } from "./MessageInput";
const suggestions = [
  "自己紹介をしてください",
  "どんな趣味がありますか？",
  "好きな映画は？",
];
export default function InitialMessageInput(props: MessageInputProps) {
  return (
    <section className="ai-welcome" aria-labelledby="ai-welcome-title">
      <div className="ai-mascot-scene">
        <div className="ai-mascot-orbit" />
        <span
          className="ai-mascot-spark ai-mascot-spark-one"
          aria-hidden="true"
        >
          ✦
        </span>
        <span
          className="ai-mascot-spark ai-mascot-spark-two"
          aria-hidden="true"
        >
          +
        </span>
        <Image
          src="/images/icon/hiro_robot.webp"
          alt="HIRO AIのロボット"
          width={220}
          height={220}
          priority
        />
        <span className="ai-hello-bubble">Hello!</span>
      </div>
      <span className="eyebrow">MEET HIRO AI</span>
      <h1 id="ai-welcome-title">
        HIRO AIと、
        <br className="ai-mobile-break" />
        話してみませんか。
      </h1>
      <p className="ai-welcome-description">
        気になることを、ひとこと。
        <br />
        AIとの会話をお楽しみください。
      </p>
      <div className="ai-welcome-input">
        <MessageInput {...props} />
      </div>
      <div className="ai-suggestions" aria-label="質問の例">
        {suggestions.map((suggestion) => (
          <button
            key={suggestion}
            type="button"
            onClick={() => {
              props.setInputText(suggestion);
              props.inputRef.current?.focus();
            }}
          >
            {suggestion}
            <span aria-hidden="true">↗</span>
          </button>
        ))}
      </div>
    </section>
  );
}
