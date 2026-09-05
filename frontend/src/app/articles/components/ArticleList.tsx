"use client";

import Image from "next/image";
import Link from "next/link";
import { Post, ArticleSource, SourceStatus } from "./types";

type Props = {
  posts: Post[];
  source: ArticleSource;
  status: SourceStatus;
  hasQuery: boolean;
  onClear: () => void;
  onRetry: () => void;
  isRefreshing: boolean;
};

export default function ArticleList({
  posts,
  source,
  status,
  hasQuery,
  onClear,
  onRetry,
  isRefreshing,
}: Props) {
  if (posts.length === 0) {
    const unavailable = status === "unavailable";
    return (
      <div className="surface articles-empty">
        <Image
          src="/images/icon/lulu_walk.webp"
          alt=""
          width={108}
          height={108}
          className="articles-empty-robot"
        />
        <div>
          <h3>
            {unavailable
              ? "記事を読み込めませんでした"
              : hasQuery
                ? "一致する記事がありません"
                : "記事はまだありません"}
          </h3>
          <p>
            {unavailable
              ? `${source}の記事を現在表示できません。時間をおいて、もう一度お試しください。`
              : hasQuery
                ? "別のキーワードで検索するか、検索条件をクリアしてください。"
                : "公開された記事は、こちらに表示されます。"}
          </p>
          {unavailable ? (
            <button
              type="button"
              className="articles-empty-action"
              disabled={isRefreshing}
              onClick={onRetry}
            >
              {isRefreshing ? "読み込み中…" : "もう一度読み込む"}
              <span aria-hidden="true">↻</span>
            </button>
          ) : hasQuery ? (
            <button
              type="button"
              className="articles-empty-action"
              onClick={onClear}
            >
              検索をクリア<span aria-hidden="true">↗</span>
            </button>
          ) : null}
        </div>
      </div>
    );
  }

  return (
    <ul className="articles-grid">
      {posts.map((post) => (
        <li key={`${post.source}-${post.id}`}>
          <Link
            href={`https://${post.path}`}
            target="_blank"
            rel="noopener noreferrer"
            className="surface articles-card"
          >
            <div className="articles-card-meta">
              <span
                className={`articles-source-pill articles-pill-${source.toLowerCase()}`}
              >
                {post.source}
              </span>
              <time dateTime={post.published_at}>
                {post.published_at.split("T")[0].replaceAll("-", ".")}
              </time>
            </div>
            <h3>{post.title}</h3>
            <span className="articles-card-footer">
              記事を読む
              <span className="articles-card-arrow" aria-hidden="true">
                ↗
              </span>
              <span className="articles-sr-only">（新しいタブ）</span>
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
