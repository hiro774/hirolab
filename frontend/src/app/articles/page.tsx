import ClientWrapper from "./components/ClientWrapper";
import { Post, ArticleSource, SourceStatus } from "./components/types";
import "./articles.css";

type SourceResult = { posts: Post[]; status: SourceStatus };

async function loadArticles(
  source: ArticleSource,
  apiUrl?: string,
): Promise<SourceResult> {
  if (!apiUrl) return { posts: [], status: "unavailable" };

  try {
    const response = await fetch(apiUrl, {
      next: { revalidate: 3600 },
      signal: AbortSignal.timeout(8000),
    });
    if (!response.ok) return { posts: [], status: "unavailable" };

    const data: unknown = await response.json();
    const items =
      source === "Zenn" &&
      data &&
      typeof data === "object" &&
      "articles" in data
        ? data.articles
        : data;
    if (!Array.isArray(items)) return { posts: [], status: "unavailable" };

    const posts: Post[] = items.flatMap((item: unknown) => {
      if (
        !item ||
        typeof item !== "object" ||
        !("id" in item) ||
        !("title" in item)
      )
        return [];
      if (
        (typeof item.id !== "string" && typeof item.id !== "number") ||
        typeof item.title !== "string"
      )
        return [];

      const published =
        source === "Zenn" && "published_at" in item
          ? item.published_at
          : "created_at" in item
            ? item.created_at
            : undefined;
      if (typeof published !== "string" || Number.isNaN(Date.parse(published)))
        return [];

      let path: string;
      if (source === "Zenn") {
        if (!("path" in item) || typeof item.path !== "string") return [];
        path = `zenn.dev/${item.path.replace(/^\/+/, "")}`;
      } else {
        if (!process.env.QIITA_USER) return [];
        path = `qiita.com/${process.env.QIITA_USER}/items/${item.id}`;
      }
      return [
        {
          id: item.id,
          title: item.title,
          emoji: "",
          path,
          published_at: published,
          source,
        },
      ];
    });

    if (items.length > 0 && posts.length === 0)
      return { posts: [], status: "unavailable" };
    return { posts, status: "ready" };
  } catch {
    return { posts: [], status: "unavailable" };
  }
}

export default async function ArticlesPage() {
  const [zenn, qiita] = await Promise.all([
    loadArticles("Zenn", process.env.ZEN_API_URL),
    loadArticles("Qiita", process.env.QIITA_API_URL),
  ]);
  const allPosts = [...zenn.posts, ...qiita.posts].sort(
    (a, b) =>
      new Date(b.published_at).getTime() - new Date(a.published_at).getTime(),
  );

  return (
    <ClientWrapper
      allPosts={allPosts}
      sourceStatus={{ Zenn: zenn.status, Qiita: qiita.status }}
    />
  );
}
