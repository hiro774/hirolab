import type { Metadata } from "next";
import "./globals.css";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

export const metadata: Metadata = {
  title: "Portfolio Lab",
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
            <Header />
            {/* メインコンテンツ */}
            <main className="container mx-auto px-4 pt-24 pb-16 flex-grow animate-fadeIn">
              {children}
            </main>
            {/* フッター */}
            <Footer />
          </div>
          {/* モバイルメニュー */}
          <Sidebar />
        </div>
      </body>
    </html>
  );
}
