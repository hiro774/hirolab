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
  return (
    <html lang="ja" data-theme="light" className="scroll-smooth">
      <body className="min-h-screen">
        <div>
          <input
            id="my-drawer-3"
            type="checkbox"
            className="drawer-toggle hidden"
          />
          <div className="flex flex-col min-h-screen">
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
