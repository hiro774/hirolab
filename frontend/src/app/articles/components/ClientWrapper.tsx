"use client";

import { useState } from "react";
import ArticleList from "./ArticleList";
import Image from "next/image";

type Post = {
  id: string | number;
  title: string;
  emoji: string;
  path: string;
  published_at: string;
  source: string;
};

export default function ClientWrapper({ allPosts }: { allPosts: Post[] }) {
  const [keyword, setKeyword] = useState("");

  const filtered = allPosts.filter((post) =>
    post.title.toLowerCase().includes(keyword.toLowerCase())
  );

  const zennPosts = filtered.filter((post) => post.source === "Zenn");
  const qiitaPosts = filtered.filter((post) => post.source === "Qiita");

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8 animate-fadeIn relative overflow-hidden">
      {/* 背景装飾 */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-blue-50/10 to-gray-100"></div>
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-indigo-100/30 rounded-full opacity-50 blur-3xl transform translate-x-1/4 -translate-y-1/4"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-purple-100/20 rounded-full opacity-30 blur-3xl transform -translate-x-1/4 translate-y-1/4"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* ヘッダーセクション */}
        <div className="text-center mb-12">
          <div className="w-50 h-20 mx-auto relative flex items-center justify-center mt-10 mb-1">
            <Image
              src="/images/text/articles.png"
              alt="アイコン画像"
              width={1000}
              height={1000}
            />
          </div>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            A collection of my technical articles published on Zenn and Qiita.
          </p>
        </div>

        {/* 検索セクション */}
        <div className="mb-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-md transition-all duration-500 hover:shadow-lg border border-gray-100">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <input
                type="text"
                placeholder="キーワードで検索（例：python）"
                className="w-full pl-10 p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300 transition duration-300 bg-white/90"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* 記事セクション */}
        <div className="space-y-16">
          {/* Qiita記事 */}
          <section className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-md transition-all duration-500 hover:shadow-lg border border-gray-100">
            <div className="flex items-center mb-6">
              <h2 className="text-2xl font-medium text-gray-800 tracking-wide border-l-4 border-emerald-200/70 pl-3">
                Qiita Articles
              </h2>
            </div>
            <div className="border-t border-gray-200 pt-6">
              <ArticleList posts={qiitaPosts} source="qiita" />
            </div>
          </section>

          {/* Zenn記事 */}
          <section className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-md transition-all duration-500 hover:shadow-lg border border-gray-100">
            <div className="flex items-center mb-6">
              <h2 className="text-2xl font-medium text-gray-800 tracking-wide border-l-4 border-indigo-200/70 pl-3">
                Zenn Articles
              </h2>
            </div>
            <div className="border-t border-gray-200 pt-6">
              <ArticleList posts={zennPosts} source="zenn" />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
