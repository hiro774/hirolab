import ClientWrapper from "./components/ClientWrapper";

type Post = {
  id: string | number;
  title: string;
  emoji: string;
  path: string;
  published_at: string;
  source: string; // "Zenn" or "Qiita"
};

export const metadata = {
  title: "Articles | HiroLab",
  description: "ZennとQiitaに投稿した技術記事をまとめています。",
};

export default async function ArticlesPage() {
  // エンドポイント取得
  const zenApiUrl = process.env.ZEN_API_URL;
  const qiitaApiUrl = process.env.QIITA_API_URL;

  // Zenn
  const zennRes = await fetch(
    `${zenApiUrl}`,
    { next: { revalidate: 3600 } } // 1時間ごとに再検証
  );
  const zennData = await zennRes.json();

  // Qiita
  const qiitaUser = "G-awa";
  const qiitaRes = await fetch(
    `${qiitaApiUrl}`,
    { next: { revalidate: 3600 } } // 1時間ごとに再検証
  );
  const qiitaData = await qiitaRes.json();

  // 共通形式に変換
  const zennPosts: Post[] = zennData.articles.map(
    (item: {
      id: string | number;
      title: string;
      emoji: string;
      path: string;
      published_at: string;
    }) => ({
      id: item.id,
      title: item.title,
      emoji: "", // 空の絵文字
      path: `zenn.dev/${item.path}`,
      published_at: item.published_at,
      source: "Zenn",
    })
  );

  const qiitaPosts: Post[] = qiitaData.map(
    (item: { id: string; title: string; created_at: string }) => ({
      id: item.id,
      title: item.title,
      emoji: "", // 空の絵文字
      path: `qiita.com/${qiitaUser}/items/${item.id}`,
      published_at: item.created_at,
      source: "Qiita",
    })
  );

  // 日付順にソート（新しい順）
  const allPosts = [...zennPosts, ...qiitaPosts].sort(
    (a, b) =>
      new Date(b.published_at).getTime() - new Date(a.published_at).getTime()
  );

  return <ClientWrapper allPosts={allPosts} />;
}
