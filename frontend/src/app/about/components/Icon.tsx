import Image from "next/image";
import Link from "next/link";

export default function Icon() {
  return (
    <aside className="surface about-identity" aria-label="HIROのプロフィール">
      <span className="about-identity-label">HELLO, I’M</span>
      <div className="about-avatar-stage">
        <span className="about-avatar-orbit" aria-hidden="true" />
        <span className="about-avatar-star" aria-hidden="true">
          ✳
        </span>
        <Image
          src="/images/icon/hiro_robot.webp"
          alt="HIROのロボットアバター"
          width={284}
          height={284}
          priority
          sizes="(max-width: 600px) 200px, 244px"
          className="about-avatar"
        />
      </div>
      <h2>
        HIRO<span aria-hidden="true">.</span>
      </h2>
      <p className="about-identity-role">Entry-level engineer</p>
      <div className="about-socials">
        <Link
          href="https://github.com/hiro774"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-button"
          aria-label="GitHubを開く（新しいタブ）"
        >
          <svg
            width="19"
            height="19"
            viewBox="0 0 16 16"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-3.3.9-3.2.9-4.27 0 0 .67-.21 2.2.82a7.6 7.6 0 0 1 4 0c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48v2.2c0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
          </svg>
        </Link>
        <Link
          href="/contact"
          className="icon-button"
          aria-label="お問い合わせページへ"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            aria-hidden="true"
          >
            <rect x="3" y="5" width="18" height="14" rx="3" />
            <path d="m4 7 8 6 8-6" />
          </svg>
        </Link>
        <Link
          href="https://x.com/hirolulu65379"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-button"
          aria-label="Xを開く（新しいタブ）"
        >
          <svg
            width="17"
            height="17"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            aria-hidden="true"
          >
            <path d="M4 3h4l12 18h-4L4 3Zm16 0L4 21" />
          </svg>
        </Link>
      </div>
      <span className="about-identity-footnote">
        HIRO LAB / PERSONAL PROFILE
      </span>
    </aside>
  );
}
