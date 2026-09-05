# HiroLab — フロントエンド

Next.js / React / TypeScriptで作成したポートフォリオです。

## 外観をローカルで確認する

```sh
cd /Users/matsubarahirokazu/portfolio/hirolab/frontend
npm ci
npm run dev
```

http://localhost:3000 を開きます。外観だけの確認にはAPIキーやバックエンドの起動は不要です。

ファイル監視の上限エラー（EMFILE）が出る環境では `WATCHPACK_POLLING=1000 npm run dev` を使ってください。

## 外部機能も接続する場合

`.env.example` を `.env.local` にコピーし、現在の環境で利用している接続先を設定してから開発サーバーを再起動してください。

| 変数                               | 用途                                    |
| ---------------------------------- | --------------------------------------- |
| `NEXT_PUBLIC_MESSAGE_API_ENDPOINT` | AIチャットのバックエンドURL             |
| `NEXT_PUBLIC_CONTACT_API_ENDPOINT` | 問い合わせのバックエンドURL             |
| `ZEN_API_URL`                      | Zennの記事取得URL（既存の変数名を継続） |
| `QIITA_API_URL`                    | Qiitaの記事取得URL                      |
| `QIITA_USER`                       | Qiitaの記事リンクに使用するユーザー名   |

バックエンドを接続する場合は、そのCORS設定で `http://localhost:3000`（プレビューが127.0.0.1なら `http://127.0.0.1:3000`）を許可します。OpenAIキーなど、バックエンド用の設定はルートのREADMEを参照してください。

接続先が未設定の場合、記事一覧は取得できない旨を表示し、AI・問い合わせは送信を試みたときにエラーを表示します。実際の応答や送信成功を模した表示はしません。

## デザインと内容の編集場所

- 共通の配色・余白・ボタン・メニュー: `src/styles/custom.css`
- トップ画面: `src/app/page.tsx` と `src/app/home.css`
- 各ページ: `src/app/about`、`works`、`articles`、`ai`、`contact`
- 作品の情報・画像パス: `src/app/works/components/data.ts`
- 画像: `public/images`

## 検証

```sh
npm run lint
npx tsc --noEmit
npm run build
```

ビルドした画面は `npm start` で確認できます。これらのコマンドでGitHubへの反映やVercelへのデプロイは行われません。
