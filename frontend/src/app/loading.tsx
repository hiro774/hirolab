import Image from "next/image";

export default function Loading() {
  return (
    <div className="page-shell" role="status" aria-live="polite">
      <div className="site-state">
        <Image
          src="/images/icon/lulu_walk.webp"
          alt=""
          width={96}
          height={96}
        />
        <p className="eyebrow">HIRO LAB</p>
        <h2>読み込んでいます</h2>
        <p>もう少しだけ、お待ちください。</p>
      </div>
    </div>
  );
}
