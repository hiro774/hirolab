import Link from "next/link";

export default function Profile() {
  return (
    <section className="surface about-bio" aria-labelledby="profile-heading">
      <div className="about-section-topline">
        <span className="section-label">01 / PROFILE</span>
        <span className="about-small-spark" aria-hidden="true">
          ✳
        </span>
      </div>
      <h2 id="profile-heading">はじめまして、HIRO です。</h2>
      <div className="about-bio-copy">
        <p>未経験からのwebエンジニア転職を目指し、日々奮闘中です。</p>
        <p>
          前の職場では、Google Apps Script
          を使った業務の自動化に取り組んでいました。 特に Google Workspace
          を活用した仕組みづくりが得意分野です。
        </p>
        <p>
          今は主に、Next.js や
          Djangoを使って自学習のアウトプットとしてWebアプリを作っています。
        </p>
        <p>
          学んだことはすぐに手を動かして試す派です。このサイトも、勉強の中で得た知識のアウトプットとして作成しました。
        </p>
        <p>
          趣味は映画鑑賞。好きな食べ物は麺類すべて。詳しいプロフィールは、気軽に話しかけられる
          <Link href="/ai">AI Bot</Link>からどうぞ！
        </p>
      </div>
    </section>
  );
}
