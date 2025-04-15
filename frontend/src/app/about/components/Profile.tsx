import React from "react";

const Profile = () => {
  return (
    <div>
      <div className="px-5 py-3">
        <h3 className="text-xl font-medium mb-3 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-2 text-cyan-700"
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
          <span className="text-gray-700">Profile</span>
        </h3>
        <div className="">
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            はじめまして、Webエンジニアへの転職を目指している「HIRO」と申します。
          </p>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            未経験からエンジニアへの転職を目指し、日々技術を磨いています。
          </p>
        </div>
      </div>

      <div className="px-5 py-3">
        <h3 className="text-xl font-medium mb-3 flex items-center py-2">
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

      <div className="px-5 py-3">
        <h3 className="text-xl font-medium mb-3 flex items-center py-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-2"
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
          Approach
        </h3>
        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
          常に最新の技術トレンドを追求し、ユーザー体験を最優先に考えたWeb開発を心がけています。技術だけでなく、デザイン思考やアクセシビリティにも配慮し、誰もが使いやすく美しいプロダクトを作ることを目標としています。問題解決のための創造的なアプローチと、継続的な学習への情熱が私の強みです。
        </p>
      </div>
    </div>
  );
};

export default Profile;
