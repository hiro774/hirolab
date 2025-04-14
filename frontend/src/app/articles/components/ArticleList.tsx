"use client";

import Link from "next/link";

type Post = {
  id: string | number;
  title: string;
  emoji: string;
  path: string;
  published_at: string;
  source: string;
};

type Props = {
  posts: Post[];
  source?: string; // オプショナルなsourceプロパティを追加
};

export default function ArticleList({ posts, source }: Props) {
  // 日付をフォーマットする関数（タイムゾーンに依存しない実装）
  const formatDate = (dateString: string) => {
    // ISO形式の日付文字列から直接年月日を抽出
    const [year, month, day] = dateString.split("T")[0].split("-");
    return `${year}.${month}.${day}`;
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.length === 0 ? (
        <div className="col-span-full text-center py-10 text-gray-500">
          記事が見つかりませんでした。別のキーワードで検索してください。
        </div>
      ) : (
        posts.map((post) => (
          <Link
            key={post.id}
            href={`https://${post.path}`}
            target="_blank"
            className="group bg-white/90 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-full border border-gray-100"
          >
            <div className="p-6 flex-grow">
              <h3 className="font-medium text-lg line-clamp-2 text-gray-800 mb-4 group-hover:text-gray-600 transition-colors duration-200">
                {post.title}
              </h3>
              <div className="flex justify-between items-center mt-auto">
                <span
                  className={`text-xs font-medium px-2 py-1 rounded-md inline-flex items-center ${
                    source === "qiita"
                      ? "bg-emerald-50 text-emerald-700"
                      : source === "zenn"
                      ? "bg-indigo-50 text-indigo-700"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  {post.source}
                </span>
                <div className="flex items-center text-xs text-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3.5 w-3.5 mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  {formatDate(post.published_at)}
                </div>
              </div>
            </div>
            <div
              className={`h-[1px] w-full transition-colors duration-300 ${
                source === "qiita"
                  ? "bg-emerald-100 group-hover:bg-emerald-200"
                  : source === "zenn"
                  ? "bg-indigo-100 group-hover:bg-indigo-200"
                  : "bg-gray-100 group-hover:bg-gray-300"
              }`}
            ></div>
          </Link>
        ))
      )}
    </div>
  );
}
