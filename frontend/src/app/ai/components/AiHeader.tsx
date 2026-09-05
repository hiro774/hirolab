import Image from "next/image";
export default function AiHeader() {
  return (
    <header className="ai-chat-header">
      <div className="ai-header-avatar">
        <Image
          src="/images/icon/hiro_robot.webp"
          alt=""
          width={56}
          height={56}
        />
      </div>
      <div>
        <h1>
          HIRO AI<span>AI CHAT</span>
        </h1>
        <p>あなたの質問に答えます</p>
      </div>
    </header>
  );
}
