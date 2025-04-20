import Image from "next/image";
import Link from "next/link";
import React from "react";

const Profile = () => {
  return (
    <div>
      <div className="flex sm:flex-row items-start gap-4 md:mt-5 mb-6">
        <div className="w-36 md:w-40 h-auto">
          <Image
            src="/images/text/aboutme.webp"
            alt="About Me"
            width={176}
            height={176}
            className="rounded-lg shadow-md"
          />
        </div>

        <div className="w-36 md:w-40 h-auto md:ml-2">
          <Image
            src="/images/icon/lulu_walk.webp"
            alt="lulu_walk"
            width={176}
            height={176}
          />
        </div>
      </div>
      <div className="flex justify-center items-center py-10 md:py-8 bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-lg transition-all duration-500 hover:shadow-xl mb-6">
        {/* 装飾ライン */}
        <div className="absolute -left-4 top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyan-400 via-purple-400 to-blue-400 hidden md:block rounded-full"></div>

        {/* 装飾要素 */}
        <div className="absolute -left-[10px] top-0 w-4 h-4 rounded-full bg-cyan-400 hidden md:block z-10"></div>
        <div className="absolute -left-[10px] bottom-0 w-4 h-4 rounded-full bg-blue-400 hidden md:block z-10"></div>

        <div className="px-5">
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
            <p className="text-gray-700 text-base leading-relaxed">
              はじめまして、HIRO です。
              未経験からのwebエンジニア転職を目指し、日々奮闘中です。
            </p>
            <p className="text-gray-700 text-base leading-relaxed pt-3">
              前の職場では、Google Apps Script
              を使った業務の自動化に取り組んでいました。 特に Google Workspace
              を活用した仕組みづくりが得意分野です。
            </p>
            <p className="text-gray-700 text-base leading-relaxed pt-3">
              今は主に、Next.js や Djangoを使って
              自学習のアウトプットとしてWebアプリを作っています。
            </p>
            <p className="text-gray-700 text-base leading-relaxed pt-3">
              学んだことはすぐに手を動かして試す派です。
              このサイトも、勉強の中で得た知識のアウトプットとして作成しました。
            </p>
            <p className="text-gray-700 text-base leading-relaxed pt-3">
              趣味は映画鑑賞。好きな食べ物は麺類すべて。詳しいプロフィールは、気軽に話しかけられる
              <Link
                href="/ai"
                className="text-blue-500 underline hover:text-blue-700 font-medium"
              >
                AI Bot
              </Link>
              からどうぞ！
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
