"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import ArticleList from "./ArticleList";
import { Post, ArticleSource, SourceStatus } from "./types";

type Props = {
  allPosts: Post[];
  sourceStatus: Record<ArticleSource, SourceStatus>;
};

export default function ClientWrapper({ allPosts, sourceStatus }: Props) {
  const [keyword, setKeyword] = useState("");
  const [selectedSource, setSelectedSource] = useState<"all" | ArticleSource>(
    "all",
  );
  const [isRefreshing, startTransition] = useTransition();
  const router = useRouter();
  const query = keyword.trim().toLowerCase();
  const filtered = allPosts.filter((post) =>
    post.title.toLowerCase().includes(query),
  );
  const sources: ArticleSource[] =
    selectedSource === "all" ? ["Qiita", "Zenn"] : [selectedSource];
  const count = filtered.filter(
    (post) => selectedSource === "all" || post.source === selectedSource,
  ).length;

  return (
    <div className="page-shell articles-page">
      <header className="page-heading articles-heading">
        <div>
          <p className="eyebrow">ARTICLES</p>
          <h1 className="page-title">学びの記録。</h1>
          <p className="page-description">
            Zenn・Qiitaで公開している技術記事をまとめています。
          </p>
        </div>
        <div className="articles-heading-art" aria-hidden="true">
          <span className="articles-note-back" />
          <span className="articles-note-front">
            <span />
            <span />
            <span />
          </span>
          <span className="articles-note-spark">✳</span>
        </div>
      </header>

      <div className="articles-toolbar">
        <div
          className="articles-filters"
          role="group"
          aria-label="記事の掲載先で絞り込む"
        >
          {(["all", "Qiita", "Zenn"] as const).map((source) => (
            <button
              type="button"
              key={source}
              aria-pressed={selectedSource === source}
              onClick={() => setSelectedSource(source)}
            >
              {source === "all" ? "すべて" : source}
              <span>
                {source === "all"
                  ? allPosts.length
                  : allPosts.filter((post) => post.source === source).length}
              </span>
            </button>
          ))}
        </div>
        <div className="articles-search" role="search">
          <svg
            width="19"
            height="19"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            aria-hidden="true"
          >
            <circle cx="10.5" cy="10.5" r="6.5" />
            <path d="m16 16 4.5 4.5" />
          </svg>
          <input
            type="search"
            aria-label="記事をキーワードで検索"
            placeholder="キーワードで検索"
            value={keyword}
            onChange={(event) => setKeyword(event.target.value)}
          />
          {keyword && (
            <button
              type="button"
              onClick={() => setKeyword("")}
              aria-label="検索キーワードを消す"
            >
              ×
            </button>
          )}
        </div>
      </div>
      <div className="articles-result-line">
        <p role="status" aria-live="polite">
          {query ? `「${keyword.trim()}」の検索結果` : "公開記事"}
          <span>{count}件</span>
        </p>
        <span>新しい順</span>
      </div>

      <div className="articles-collections">
        {sources.map((source) => {
          const posts = filtered.filter((post) => post.source === source);
          return (
            <section
              className="articles-collection"
              key={source}
              aria-labelledby={`articles-${source}`}
            >
              <div className="articles-collection-heading">
                <div>
                  <span
                    className={`articles-source-mark articles-source-${source.toLowerCase()}`}
                    aria-hidden="true"
                  >
                    {source === "Qiita" ? "Q" : "/"}
                  </span>
                  <h2 id={`articles-${source}`}>{source}</h2>
                  <span className="articles-source-count">{posts.length}</span>
                </div>
                <span className="articles-collection-caption">
                  TECHNICAL NOTES
                </span>
              </div>
              <ArticleList
                posts={posts}
                source={source}
                status={sourceStatus[source]}
                hasQuery={query.length > 0}
                onClear={() => setKeyword("")}
                onRetry={() => startTransition(() => router.refresh())}
                isRefreshing={isRefreshing}
              />
            </section>
          );
        })}
      </div>
    </div>
  );
}
