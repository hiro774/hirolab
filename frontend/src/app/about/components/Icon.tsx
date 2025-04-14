import Image from "next/image";
import Link from "next/link";
import React from "react";

const Icon = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col items-center justify-center py-16">
        {/* 洗練された円形フレーム - アニメーションとグラデーションを追加 */}
        <div className="relative w-68 h-68 sm:w-76 sm:h-76 md:w-84 md:h-84">
          {/* 内側の円 */}
          <div className="absolute inset-3 rounded-full bg-gradient-to-br from-white to-gray-50 shadow-inner"></div>

          {/* 画像コンテナ */}
          <div className="absolute inset-6 overflow-hidden rounded-full border-2 border-white shadow-md">
            {/* 画像 */}
            <Image
              src="/images/icon/hiro_robot.png"
              alt="プロフィール画像"
              width={300}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* 名前 - アイコンの下に追加 */}
        <div className="text-center mt-7">
          <h1
            style={{ fontFamily: "'Orbitron', sans-serif" }}
            className="text-2xl md:text-3xl font-bold tracking-wider text-gray-700 drop-shadow-md"
          >
            HIRO
          </h1>
          <h2 className="text-sm md:text-base font-medium mt-5 text-black">
            Entry-level engineer
          </h2>
        </div>

        {/* ソーシャルリンク - モダンなデザイン */}
        <div className="text-center space-y-2 mt-8">
          <div className="flex justify-center space-x-5 mt-4">
            {/* GitHub */}
            <Link
              href="https://github.com/hiro774"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 shadow-sm hover:shadow transition-all duration-300 transform hover:-translate-y-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 16 16"
                className="text-gray-700"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
              </svg>
            </Link>

            {/* Email */}
            <Link
              href="/contact"
              className="p-3 rounded-full bg-gradient-to-br from-cyan-50 to-cyan-100 hover:from-cyan-100 hover:to-cyan-200 shadow-sm hover:shadow transition-all duration-300 transform hover:-translate-y-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 16 16"
                className="text-cyan-700"
              >
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
              </svg>
            </Link>

            {/* Twitter */}
            <Link
              href="https://x.com/hirolulu65379"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gradient-to-br from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 shadow-sm hover:shadow transition-all duration-300 transform hover:-translate-y-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 16 16"
                className="text-blue-600"
              >
                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Icon;
