export type ArticleSource = "Qiita" | "Zenn";
export type SourceStatus = "ready" | "unavailable";

export type Post = {
  id: string | number;
  title: string;
  emoji: string;
  path: string;
  published_at: string;
  source: ArticleSource;
};
