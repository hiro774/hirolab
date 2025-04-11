"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const checkbox = document.getElementById("my-drawer-3") as HTMLInputElement;

    if (!checkbox) return;

    // 初期状態を設定
    setIsOpen(checkbox.checked);

    // チェックボックスの変更イベントをリッスン
    const handleChange = () => {
      setIsOpen(checkbox.checked);
    };

    checkbox.addEventListener("change", handleChange);

    return () => {
      checkbox.removeEventListener("change", handleChange);
    };
  }, []);

  return (
    <>
      {/* オーバーレイ */}
      <div
        className={`fixed inset-0 bg-black transition-opacity duration-300 z-40 ${
          isOpen ? "opacity-50" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => {
          const checkbox = document.getElementById(
            "my-drawer-3"
          ) as HTMLInputElement;
          if (checkbox) checkbox.checked = false;
          setIsOpen(false);
        }}
      />

      {/* サイドバー */}
      <div
        className={`fixed top-0 left-0 h-full w-80 z-50 transition-transform duration-300 ease-out ${
          isOpen ? "transform-none" : "-translate-x-full"
        }`}
      >
        <div className="menu p-0 w-full h-full bg-white/70 backdrop-blur-md border border-white/20 shadow-md flex flex-col bg-gradient-radial from-indigo-500/5 via-transparent to-transparent">
          {/* ヘッダーセクション */}
          <div className="absolute top-3 left-6 z-10">
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
          <div className="sidebar-header pt-6 flex flex-col items-center border-b border-gray-200/20">
            <div className="mt-4">
              <div className="w-35 h-25">
                <Image
                  src="/images/icon/lulu_robot.png"
                  alt="アイコン画像"
                  width={1000}
                  height={1000}
                  className="rounded-full"
                />
              </div>
              <div className="w-35 h-35">
                <Image
                  src="/images/text/hirolab.png"
                  alt="アイコン画像"
                  width={1000}
                  height={1000}
                  className="rounded-full"
                />
              </div>
            </div>
          </div>

          {/* メニューセクション */}
          <ul className="menu-items px-4">
            <li className="menu-category mb-2 text-sm font-semibold text-gray-500 uppercase tracking-wider pl-2">
              メニュー
            </li>
            <li className="menu-item mb-2">
              <Link
                href="/"
                className="flex items-center p-3 rounded-lg text-base transition-all duration-200 border-l-3 border-transparent hover:bg-indigo-500/10 hover:border-l-3 hover:border-indigo-500 hover:translate-x-1.5"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  className="mr-2 text-primary"
                >
                  <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5Z" />
                  <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6Z" />
                </svg>
                <span className="font-medium">Top</span>
              </Link>
            </li>
            <li className="menu-item mb-2">
              <Link
                href="/about"
                className="flex items-center p-3 rounded-lg text-base transition-all duration-200 border-l-3 border-transparent hover:bg-indigo-500/10 hover:border-l-3 hover:border-indigo-500 hover:translate-x-1.5"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  className="mr-2 text-primary"
                >
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                  <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z" />
                </svg>
                <span className="font-medium">About</span>
              </Link>
            </li>
            {/* <li className="menu-item mb-2">
              <Link
                href="/articles"
                className="flex items-center p-3 rounded-lg text-base transition-all duration-200 border-l-3 border-transparent hover:bg-indigo-500/10 hover:border-l-3 hover:border-indigo-500 hover:translate-x-1.5"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  className="mr-2 text-primary"
                >
                  <path d="M7 2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5zM2 1a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm0 8a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2zm.854-3.646a.5.5 0 0 1-.708 0l-1-1a.5.5 0 1 1 .708-.708l.646.647 1.646-1.647a.5.5 0 1 1 .708.708zm0 8a.5.5 0 0 1-.708 0l-1-1a.5.5 0 0 1 .708-.708l.646.647 1.646-1.647a.5.5 0 0 1 .708.708zM7 10.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5zm0-5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0 8a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5" />
                </svg>
                <span className="font-medium">Articles</span>
              </Link>
            </li> */}
            <li className="menu-item mb-2">
              <Link
                href="/works"
                className="flex items-center p-3 rounded-lg text-base transition-all duration-200 border-l-3 border-transparent hover:bg-indigo-500/10 hover:border-l-3 hover:border-indigo-500 hover:translate-x-1.5"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  className="mr-2 text-primary"
                >
                  <path d="M1.5 0A1.5 1.5 0 0 0 0 1.5v7A1.5 1.5 0 0 0 1.5 10H6v1H1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-5v-1h4.5A1.5 1.5 0 0 0 16 8.5v-7A1.5 1.5 0 0 0 14.5 0zm0 1h13a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5M12 12.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0m2 0a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0M1.5 12h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1M1 14.25a.25.25 0 0 1 .25-.25h5.5a.25.25 0 1 1 0 .5h-5.5a.25.25 0 0 1-.25-.25" />
                </svg>
                <span className="font-medium">Works</span>
              </Link>
            </li>
            <li className="menu-item mb-2">
              <Link
                href="/ai"
                className="flex items-center p-3 rounded-lg text-base transition-all duration-200 border-l-3 border-transparent hover:bg-indigo-500/10 hover:border-l-3 hover:border-indigo-500 hover:translate-x-1.5"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  className="mr-2 text-primary"
                >
                  <path d="M6 12.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5ZM3 8.062C3 6.76 4.235 5.765 5.53 5.886a26.58 26.58 0 0 0 4.94 0C11.765 5.765 13 6.76 13 8.062v1.157a.933.933 0 0 1-.765.935c-.845.147-2.34.346-4.235.346-1.895 0-3.39-.2-4.235-.346A.933.933 0 0 1 3 9.219V8.062Zm4.542-.827a.25.25 0 0 0-.217.068l-.92.9a24.767 24.767 0 0 1-1.871-.183.25.25 0 0 0-.068.495c.55.076 1.232.149 2.02.193a.25.25 0 0 0 .189-.071l.754-.736.847 1.71a.25.25 0 0 0 .404.062l.932-.97a25.286 25.286 0 0 0 1.922-.188.25.25 0 0 0-.068-.495c-.538.074-1.207.145-1.98.189a.25.25 0 0 0-.166.076l-.754.785-.842-1.7a.25.25 0 0 0-.182-.135Z" />
                  <path d="M8.5 1.866a1 1 0 1 0-1 0V3h-2A4.5 4.5 0 0 0 1 7.5V8a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1v-.5A4.5 4.5 0 0 0 10.5 3h-2V1.866ZM14 7.5V13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.5A3.5 3.5 0 0 1 5.5 4h5A3.5 3.5 0 0 1 14 7.5Z" />
                </svg>
                <span className="font-medium">AI</span>
              </Link>
            </li>
            {/* お問い合わせセクション */}
            <li className="contact-category mt-10 mb-2 text-base font-semibold text-gray-500 uppercase tracking-wider pl-2">
              お問い合わせ
            </li>
            <li className="menu-item menu-accent mt-2">
              <Link
                href=""
                className="flex items-center p-3 rounded-lg text-base transition-all duration-200 border-l-3 border-transparent hover:bg-rose-500/10 hover:border-l-3 hover:border-rose-500 hover:translate-x-1.5"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  className="mr-2 text-accent"
                >
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                </svg>
                <span className="font-medium">Contact</span>
              </Link>
            </li>
          </ul>

          {/* フッターセクション */}
          <div className="mt-auto p-4 border-t border-gray-200/20 text-center text-xs text-gray-500">
            © 2025 HiroLab
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
