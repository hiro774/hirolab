import type { Metadata } from "next";
import "../styles/globals.css";
import "../styles/custom.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "HiroLab",
  description: "Web開発・技術記事のポートフォリオサイト",
  icons: {
    icon: "/images/icon/lulu_robot.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" data-theme="light" className="scroll-smooth">
      <body id="top">
        <a href="#main-content" className="skip-link">
          本文へスキップ
        </a>
        <div className="site-frame">
          <Header />
          <main id="main-content" className="site-main" tabIndex={-1}>
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
