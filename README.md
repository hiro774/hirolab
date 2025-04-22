# HIRO LAB

## 目次
1. [概要](#1-概要)
2. [システム概要](#2-システム概要)
3. [デモ](#3-デモ)
4. [使用技術](#4-使用技術)
5. [ローカルでの動かし方](#5-ローカルでの動かし方)
6. [外部URL](#6-外部url)
7. [ライセンス](#7-ライセンス)
<br><br>

## 1. 概要
本アプリは、エンジニアとしての経験やスキルを紹介するためのポートフォリオサイトです。  
実装している主な機能は以下のとおりです。
- モダンなデザインと滑らかなアニメーションを取り入れたレスポンシブ対応のポートフォリオサイト（Home）
- 自己紹介ページ（About）
- 作成した技術記事の紹介（Articles）
- 制作したプロジェクトの紹介（Works）
- OpenAI APIを活用した「HIRO AI」との会話機能（AI）
- お問い合わせフォーム（Contact）
<br><br>

## 2. システム概要
本アプリは、フロントエンドとバックエンドの2つのシステムで構成されています。

### ★フロントエンド
Next.js（React）を使用したシングルページアプリケーション（SPA）です。

### ★バックエンド
FastAPIを使用したRESTful APIサーバーです。

**主要エンドポイント**
- `/api/ai`：AIチャット機能のためのエンドポイント
- `/api/contact`：お問い合わせフォーム送信用エンドポイント
- `/health`：ヘルスチェック用エンドポイント

**AIチャット機能**
- OpenAI APIを使用して自然な会話を実現
- 「HIRO」というwebエンジニア転職を目指す男性のペルソナを設定
- レート制限機能により、APIの過剰な使用を防止
<br><br>

## 3. デモ

![HIRO LAB Aboutページ](/frontend/public/images/previewImage/hirolab_previewimage1.webp)
![HIRO LAB workページ](/frontend/public/images/previewImage/hirolab_previewimage2.webp)
![HIRO LAB AIHomeページ](/frontend/public/images/previewImage/hirolab_previewimage3.webp)
![HIRO LAB AIChatページ](/frontend/public/images/previewImage/hirolab_previewimage4.webp)
<br>

## 4. 使用技術

### フロントエンド
- **フレームワーク**: Next.js 15.2.5 (React 19.0.0)
- **スタイリング**: Tailwind CSS 4, DaisyUI
- **言語**: TypeScript 5
- **画像最適化**: Sharp

### バックエンド
- **フレームワーク**: FastAPI (Python 3.12.7)
- **サーバー**: Uvicorn
- **AI連携**: LangChain, OpenAI API
- **レート制限**: SlowAPI

### インフラ
- **コンテナ化**: Docker, Docker Compose
- **デプロイ**: Vercel (フロントエンド), Render (バックエンド)
<br><br>

## 5. ローカルでの動かし方

### 前提条件
- Docker と Docker Compose がインストールされていること
- OpenAI API キーを取得していること

### 初回環境構築

```bash
# リポジトリのクローン
git clone https://github.com/hiro774/hirolab.git
cd hirolab

# 環境変数ファイルの作成
cp .env.example .env
# .envファイルを編集して必要なAPI鍵などを設定

# Dockerコンテナの起動
docker-compose up -d
```

### 環境変数の設定

以下の環境変数を`.env`ファイルに設定する必要があります。

```
# OpenAI API設定
OPENAI_API_KEY="your_openai_api_key"

# CORS設定
ALLOWED_ORIGINS="http://localhost:3000"

# Slack Webhook（お問い合わせフォーム用、オプション）
SLACK_WEBHOOK_URL="your_slack_webhook_url"
```

### アクセス方法

- フロントエンド: http://0.0.0.0:3000
- バックエンドAPI: http://0.0.0.0:8000
<br><br>

## 6. 外部URL

- **ライブデモ**: [https://hirolab.vercel.app/](https://hirolab.vercel.app/)
- **GitHub**: [https://github.com/hiro774/hirolab](https://github.com/hiro774/hirolab)
<br><br>

## 7. ライセンス

このプロジェクトはMITライセンスの下で公開されています。
