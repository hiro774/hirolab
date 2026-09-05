import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="page-shell">
      <div className="site-state">
        <Image
          src="/images/icon/lulu_walk.webp"
          alt=""
          width={112}
          height={112}
        />
        <p className="eyebrow">404 / NOT FOUND</p>
        <h1>ページが見つかりませんでした。</h1>
        <p>URLをご確認いただくか、トップページからご覧ください。</p>
        <Link href="/" className="lab-button lab-button-primary">
          トップページへ戻る <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </div>
  );
}
