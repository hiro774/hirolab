import type { Metadata } from "next";
import "../../styles/globals.css";
import "../../styles/custom.css";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
// import ScrollToTop from "./ScroollTop";

export const metadata: Metadata = {
  title: "HiroLab",
  description: "Web開発・技術記事のポートフォリオサイト",
  icons: {
    icon: "/images/icon/lulu_robot.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" data-theme="light" className="scroll-smooth">
      <body className="min-h-screen">
        {/* <ScrollToTop /> */}
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
            <main className="w-full flex-grow animate-fadeIn">{children}</main>
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
