export default function Home() {
  return (
    <div className="animate-fadeIn">
      {/* ヒーローセクション */}
      <section className="py-16 text-center">
        <div className="avatar mb-6 inline-block">
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary/80 to-accent/80 flex items-center justify-center">
            <span className="text-white text-4xl font-bold">PL</span>
          </div>
        </div>
        <h1 className="text-4xl font-bold mb-4">
          <span className="text-primary">Portfolio</span>
          <span className="text-accent ml-2">Lab</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
          Web開発、クリエイティブプロジェクトのポートフォリオサイト
        </p>
        <div className="flex justify-center gap-4 mb-8">
          <a href="" className="btn btn-circle btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              viewBox="0 0 16 16"
              className="text-primary"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
            </svg>
          </a>
          <a href="" className="btn btn-circle btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              viewBox="0 0 16 16"
              className="text-primary"
            >
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
            </svg>
          </a>
          <a href="" className="btn btn-circle btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              viewBox="0 0 16 16"
              className="text-primary"
            >
              <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
            </svg>
          </a>
        </div>
        <a href="" className="btn btn-ghost btn-lg">
          <span className="text-black text-lg font-medium">
            プロジェクトを見る
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            viewBox="0 0 16 16"
            className="ml-2"
          >
            <path
              fillRule="evenodd"
              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
            />
          </svg>
        </a>
      </section>

      {/* 特徴セクション */}
      <section className="py-16 bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">特徴</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            最新のテクノロジーとデザインを組み合わせた高品質なWebアプリケーション開発
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          <div className="glass-effect p-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <div className="text-primary mb-4 flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">自己紹介</h3>
            <p className="text-gray-600">
              Web開発者としての経験とスキルを紹介します。フロントエンド、バックエンド、デザインなど幅広い分野に対応可能です。
            </p>
          </div>

          <div className="glass-effect p-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <div className="text-primary mb-4 flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z" />
                <path d="M3 5.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 8zm0 2.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">プロジェクト</h3>
            <p className="text-gray-600">
              これまでに手がけたプロジェクトの紹介。Webアプリケーション、モバイルアプリ、デザインなど様々な実績があります。
            </p>
          </div>

          <div className="glass-effect p-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <div className="text-primary mb-4 flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                <path d="M6.854 4.646a.5.5 0 0 1 0 .708L4.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0zm2.292 0a.5.5 0 0 0 0 .708L11.793 8l-2.647 2.646a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">スキル</h3>
            <p className="text-gray-600">
              HTML/CSS、JavaScript、React、Next.js、Django、Python、デザインツールなど、幅広いスキルセットを持っています。
            </p>
          </div>
        </div>
      </section>

      {/* プロジェクトセクション */}
      <section className="py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">最近のプロジェクト</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            最近取り組んだプロジェクトの一部をご紹介します
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
          <div className="glass-effect rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <div className="h-48 bg-gradient-to-r from-primary/20 to-accent/20 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                fill="currentColor"
                viewBox="0 0 16 16"
                className="text-primary"
              >
                <path d="M12.258 3h-8.51l-.083 2.46h.479c.26-1.544.758-1.783 2.693-1.845l.424-.013v7.827c0 .663-.144.82-1.3.923v.52h4.082v-.52c-1.162-.103-1.306-.26-1.306-.923V3.602l.431.013c1.934.062 2.434.301 2.693 1.846h.479L12.258 3z" />
              </svg>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">ブログプラットフォーム</h3>
              <p className="text-gray-600 mb-4">
                Next.jsとDjangoを組み合わせた高性能なブログプラットフォーム。マークダウン対応、画像アップロード機能付き。
              </p>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                  Next.js
                </span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                  Django
                </span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                  Tailwind
                </span>
              </div>
            </div>
          </div>

          <div className="glass-effect rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <div className="h-48 bg-gradient-to-r from-accent/20 to-primary/20 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                fill="currentColor"
                viewBox="0 0 16 16"
                className="text-accent"
              >
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
              </svg>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">ポートフォリオサイト</h3>
              <p className="text-gray-600 mb-4">
                Next.jsとTailwind
                CSSを使用した洗練されたポートフォリオサイト。レスポンシブデザイン、アニメーション効果付き。
              </p>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">
                  React
                </span>
                <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">
                  Next.js
                </span>
                <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">
                  Tailwind
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* コンタクトセクション */}
      <section className="py-16 text-center">
        <div className="glass-effect p-8 rounded-lg max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">お問い合わせ</h2>
          <p className="text-gray-600 mb-8">
            プロジェクトのご相談、お問い合わせはこちらからお気軽にどうぞ
          </p>
          <a href="" className="btn btn-ghost btn-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              viewBox="0 0 16 16"
              className="mr-2 text-accent"
            >
              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
            </svg>
            <span className="text-black text-lg font-medium">お問い合わせ</span>
          </a>
        </div>
      </section>
    </div>
  );
}
