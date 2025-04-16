import Image from "next/image";
import React from "react";

const Profile = () => {
  return (
    <div>
      <div className="flex sm:flex-row items-start gap-4 md:mt-5 mb-6">
        {/* aboutme.png画像 */}
        <div className="w-36 md:w-40 h-auto">
          <Image
            src="/images/text/aboutme.png"
            alt="About Me"
            width={176}
            height={176}
            className="rounded-lg shadow-md"
          />
        </div>

        <div className="w-36 md:w-40 h-auto md:ml-2">
          <Image
            src="/images/icon/lulu_walk.png"
            alt="lulu_walk"
            width={176}
            height={176}
          />
        </div>
      </div>
      <div className="flex justify-center items-center py-10 bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-lg transition-all duration-500 hover:shadow-xl mb-6">
        {/* 装飾ライン */}
        <div className="absolute -left-4 top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyan-400 via-purple-400 to-blue-400 hidden md:block rounded-full"></div>

        {/* 装飾要素 */}
        <div className="absolute -left-[10px] top-0 w-4 h-4 rounded-full bg-cyan-400 hidden md:block z-10"></div>
        <div className="absolute -left-[10px] bottom-0 w-4 h-4 rounded-full bg-blue-400 hidden md:block z-10"></div>

        <div className="px-5 py-2">
          <h3 className="text-xl font-medium mb-4 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 mr-2 text-cyan-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
            <span className="text-gray-700 text-2xl">Profile</span>
          </h3>
          <div>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              はじめまして、Webエンジニアへの転職を目指している「HIRO」と申します。
            </p>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed pt-3">
              未経験からエンジニアへの転職を目指し、日々技術を磨いています。
            </p>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed pt-3">
              前職では、Google
              AppsScriptやPythonを活用して業務効率化などを行なっておりました。
              特にGoogle Work spaceを活用した自動化システムの構築が得意です。
            </p>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed pt-3">
              常に最新の技術トレンドを追求し、ユーザー体験を最優先に考えたWeb開発を心がけています。
            </p>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed pt-3">
              技術だけでなく、デザイン思考やアクセシビリティにも配慮し、誰もが使いやすく美しいプロダクトを作ることを目標としています。問題解決のための創造的なアプローチと、継続的な学習への情熱が私の強みです。{" "}
            </p>
          </div>
        </div>
      </div>

      {/* <div className="px-5 py-4">
        <h3 className="text-xl font-medium mb-4 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-2 text-purple-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
            />
          </svg>
          <span className="text-gray-700">Experience</span>
        </h3>
        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
          前職では、Google Apps
          ScriptやPythonを活用して業務効率化に貢献しました。特にGoogle
          Workspaceを活用した自動化システムの構築により、チームの生産性を30%向上させた実績があります。この経験を活かし、実用的で効率的なWebアプリケーション開発を目指しています。
        </p>
      </div>

      <div className="px-5 py-4">
        <h3 className="text-xl font-medium mb-4 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-2 text-blue-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
            />
          </svg>
          <span className="text-gray-700">Approach</span>
        </h3>
        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
          常に最新の技術トレンドを追求し、ユーザー体験を最優先に考えたWeb開発を心がけています。技術だけでなく、デザイン思考やアクセシビリティにも配慮し、誰もが使いやすく美しいプロダクトを作ることを目標としています。問題解決のための創造的なアプローチと、継続的な学習への情熱が私の強みです。
        </p>
      </div> */}
    </div>
  );
};

export default Profile;
