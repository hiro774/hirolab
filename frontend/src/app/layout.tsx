import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "クリエイティブポートフォリオ | Web開発者",
  description:
    "Web開発、デザイン、クリエイティブプロジェクトのポートフォリオサイト",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // サイドバーを表示した時のスクロールバー対策のスタイル
  const drawerStyle = `
    .drawer-toggle:checked ~ .drawer-content {
      margin-right: 0 !important;
    }
    .drawer-toggle:checked ~ .drawer-side .drawer-overlay {
      margin-right: 0 !important;
    }
  `;

  return (
    <html lang="ja" data-theme="light" className="scroll-smooth">
      <head>
        <style>{drawerStyle}</style>
      </head>
      <body className="min-h-screen">
        <div className="drawer">
          <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col min-h-screen">
            {/* ヘッダー */}
            <header className="navbar glass-effect fixed top-0 z-50 px-6 animate-fadeIn">
              <div className="navbar-start">
                <div className="xl:hidden">
                  <label
                    htmlFor="my-drawer-3"
                    className="flex items-center justify-center p-2 hover:rotate-90 transition-transform duration-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="inline-block w-6 h-6 stroke-current"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      ></path>
                    </svg>
                  </label>
                </div>
                <Link
                  href=""
                  className="btn btn-ghost normal-case text-2xl font-bold flex items-center gap-2"
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/80 to-accent/80 flex items-center justify-center">
                    <span className="text-white text-sm font-bold">PL</span>
                  </div>
                  <span className="text-primary">Portfolio</span>
                  <span className="text-accent">Lab</span>
                </Link>
                <div className="hidden xl:flex ml-6">
                  <ul className="menu menu-horizontal px-1 gap-1 flex-nowrap">
                    <li>
                      <Link
                        href=""
                        className="btn btn-ghost btn-sm rounded-full text-sm flex items-center gap-2 px-3"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                          className="text-primary"
                        >
                          <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5Z" />
                          <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6Z" />
                        </svg>
                        <span>Top</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href=""
                        className="btn btn-ghost btn-sm rounded-full text-sm flex items-center gap-2 px-3"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                          className="text-primary"
                        >
                          <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                        </svg>
                        <span>About</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href=""
                        className="btn btn-ghost btn-sm rounded-full text-sm flex items-center gap-2 px-3"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                          className="text-primary"
                        >
                          <path d="M4.545 6.714 4.11 8H3l1.862-5h1.284L8 8H6.833l-.435-1.286H4.545zm1.634-.736L5.5 3.956h-.049l-.679 2.022H6.18z" />
                          <path d="M0 2a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v3h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3H2a2 2 0 0 1-2-2V2zm2-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2zm7.138 9.995c.193.301.402.583.63.846-.748.575-1.673 1.001-2.768 1.292.178.217.451.635.555.867 1.125-.359 2.08-.844 2.886-1.494.777.665 1.739 1.165 2.93 1.472.133-.254.414-.673.629-.89-1.125-.253-2.057-.694-2.82-1.284.681-.747 1.222-1.651 1.621-2.757H14V8h-3v1.059c.285.784.75 1.543 1.343 2.235-.793-.563-1.431-1.287-1.911-2.187-.474.895-1.102 1.618-1.894 2.187.591-.683 1.051-1.439 1.339-2.235H6.5V8h-3v1h1.549c.21 1.125.767 2.054 1.464 2.815-.702.563-1.563.994-2.65 1.235.134.262.371.655.534.864 1.12-.267 2.025-.714 2.815-1.34.79.548 1.702.987 2.788 1.34.366-.207.61-.619.737-.883-1.08-.248-1.938-.68-2.643-1.235C4.739 11.054 5.282 10.125 5.5 9H6.5v2H10v-2h.955c.242 1.229.81 2.245 1.519 3.008z" />
                        </svg>
                        <span>Lang</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href=""
                        className="btn btn-ghost btn-sm rounded-full text-sm flex items-center gap-1 px-2"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                          className="text-primary"
                        >
                          <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z" />
                          <path d="M3 5.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 8zm0 2.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z" />
                        </svg>
                        <span>Works</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="navbar-end hidden xl:flex gap-4 mr-5">
                <Link
                  href=""
                  className="btn btn-ghost btn-sm rounded-full flex items-center gap-2 px-4 py-2 hover:bg-primary/10"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    className="text-primary"
                  >
                    <path d="M6 12.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5ZM3 8.062C3 6.76 4.235 5.765 5.53 5.886a26.58 26.58 0 0 0 4.94 0C11.765 5.765 13 6.76 13 8.062v1.157a.933.933 0 0 1-.765.935c-.845.147-2.34.346-4.235.346-1.895 0-3.39-.2-4.235-.346A.933.933 0 0 1 3 9.219V8.062Zm4.542-.827a.25.25 0 0 0-.217.068l-.92.9a24.767 24.767 0 0 1-1.871-.183.25.25 0 0 0-.068.495c.55.076 1.232.149 2.02.193a.25.25 0 0 0 .189-.071l.754-.736.847 1.71a.25.25 0 0 0 .404.062l.932-.97a25.286 25.286 0 0 0 1.922-.188.25.25 0 0 0-.068-.495c-.538.074-1.207.145-1.98.189a.25.25 0 0 0-.166.076l-.754.785-.842-1.7a.25.25 0 0 0-.182-.135Z" />
                    <path d="M8.5 1.866a1 1 0 1 0-1 0V3h-2A4.5 4.5 0 0 0 1 7.5V8a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1v-.5A4.5 4.5 0 0 0 10.5 3h-2V1.866ZM14 7.5V13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.5A3.5 3.5 0 0 1 5.5 4h5A3.5 3.5 0 0 1 14 7.5Z" />
                  </svg>
                  <span className="text-black text-base font-medium">AI</span>
                </Link>
                <Link
                  href=""
                  className="btn btn-ghost btn-sm rounded-full flex items-center gap-2 px-4 py-2 hover:bg-accent/10"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    className="text-accent"
                  >
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                  </svg>
                  <span className="text-black text-base font-medium">
                    Contact
                  </span>
                </Link>
              </div>
            </header>

            {/* メインコンテンツ */}
            <main className="container mx-auto px-4 pt-24 pb-16 flex-grow animate-fadeIn">
              {children}
            </main>

            {/* フッター */}
            <footer className="footer footer-center p-6 text-base-content rounded-t-lg mt-auto">
              <aside>
                <p>Copyright © 2025 - All right reserved by PortfolioLab</p>
              </aside>
            </footer>
          </div>

          {/* モバイルメニュー */}
          <div className="drawer-side z-50">
            <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
            <div className="menu p-0 w-80 min-h-full glass-effect sidebar-container">
              {/* サイドバーヘッダー */}
              <div className="sidebar-header p-6 flex flex-col items-center border-b border-gray-200/20">
                <div className="avatar mb-4">
                  <div className="w-24 h-24 rounded-full ring ring-primary ring-offset-2 ring-offset-base-100 overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <span className="text-3xl font-bold">PL</span>
                  </div>
                </div>
                <h2 className="text-xl font-bold mb-1">
                  <span className="text-primary">Portfolio</span>
                  <span className="text-accent">Lab</span>
                </h2>
                <p className="text-sm text-gray-600 mb-3">Web開発・デザイン</p>
                <div className="flex gap-3">
                  <a href="" className="btn btn-circle btn-sm btn-ghost">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                      className="text-primary"
                    >
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                    </svg>
                  </a>
                  <a href="" className="btn btn-circle btn-sm btn-ghost">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                      className="text-primary"
                    >
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                    </svg>
                  </a>
                  <a href="" className="btn btn-circle btn-sm btn-ghost">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                      className="text-primary"
                    >
                      <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* メニュー */}
              <ul className="menu-items p-4">
                <li className="menu-category mb-2 text-xs font-semibold text-gray-500 uppercase tracking-wider pl-2">
                  メニュー
                </li>
                <li className="menu-item mb-2">
                  <Link
                    href=""
                    className="sidebar-link flex items-center p-3 rounded-lg"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                      className="mr-3 text-primary"
                    >
                      <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                    </svg>
                    <span className="font-medium">自己紹介</span>
                  </Link>
                </li>
                <li className="menu-item mb-2">
                  <Link
                    href=""
                    className="sidebar-link flex items-center p-3 rounded-lg"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                      className="mr-3 text-primary"
                    >
                      <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z" />
                      <path d="M3 5.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 8zm0 2.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z" />
                    </svg>
                    <span className="font-medium">プロジェクト</span>
                  </Link>
                </li>
                <li className="menu-item mb-2">
                  <Link
                    href=""
                    className="sidebar-link flex items-center p-3 rounded-lg"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                      className="mr-3 text-primary"
                    >
                      <path d="M12.258 3h-8.51l-.083 2.46h.479c.26-1.544.758-1.783 2.693-1.845l.424-.013v7.827c0 .663-.144.82-1.3.923v.52h4.082v-.52c-1.162-.103-1.306-.26-1.306-.923V3.602l.431.013c1.934.062 2.434.301 2.693 1.846h.479L12.258 3z" />
                    </svg>
                    <span className="font-medium">ブログ</span>
                  </Link>
                </li>
                <li className="menu-item mb-2">
                  <Link
                    href=""
                    className="sidebar-link flex items-center p-3 rounded-lg"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                      className="mr-3 text-primary"
                    >
                      <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                      <path d="M6.854 4.646a.5.5 0 0 1 0 .708L4.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0zm2.292 0a.5.5 0 0 0 0 .708L11.793 8l-2.647 2.646a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708 0z" />
                    </svg>
                    <span className="font-medium">スキル</span>
                  </Link>
                </li>

                <li className="menu-category mt-6 mb-2 text-xs font-semibold text-gray-500 uppercase tracking-wider pl-2">
                  お問い合わせ
                </li>
                <li className="menu-item mt-2">
                  <Link
                    href=""
                    className="sidebar-link-accent flex items-center p-3 rounded-lg"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                      className="mr-3 text-accent"
                    >
                      <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                    </svg>
                    <span className="font-medium">Contact</span>
                  </Link>
                </li>
              </ul>

              {/* フッター */}
              <div className="sidebar-footer mt-auto p-4 border-t border-gray-200/20 text-center text-xs text-gray-500">
                © 2025 PortfolioLab
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
