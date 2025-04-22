import { WorkType } from "./types";

export const worksData: WorkType[] = [
  {
    id: 3,
    title: "Mlb Report AI",
    description: "OPENAI-APIとRAGを活用した会話型Line Bot",
    thumbnail: "/images/thumbnail/mlbAi_thumbnail.webp",
    previewImage: [
      "/images/previewImage/mlbAi_previewimage1.webp",
      "/images/previewImage/mlbAi_previewimage2.webp",
      "/images/previewImage/mlbAi_previewimage3.webp",
      "/images/previewImage/mlbAi_previewimage4.webp",
    ],
    tags: ["Python", "Django", "AWS Lambda", "Supabase"],
    details: {
      overviews: [
        "大谷翔平選手のニュース・動画・成績を自動で収集・要約するLINE対応チャットボットです。",
        "収集データはLLMで要約・保存し、RAG構成で質問に自然に回答します。ファンキャラ「ラグ子」として、大谷選手について楽しく会話できます。",
      ],
      features: [
        "大谷翔平選手のニュース・動画・試合成績を毎日自動で収集・要約",
        "要約結果は「意味検索」できる形式でデータベースに保存",
        "検索結果をもとに、AIが自然な回答を生成",
        "情報収集と質問応答の2つのシステムで構成されたRAGチャットボット",
      ],
      technologies: [
        "Python",
        "Django",
        "PostgreSQL",
        "AWS Lambda",
        "OpenAI API",
        "LINE API",
        "Railway",
      ],
      github: "https://github.com/hiro774/mlbai",
      website: "",
    },
  },
  {
    id: 2,
    title: "Pomo - ポモドーロタイマー -",
    description: "Youtube動画をBGMに設定できるポモドーロアプリ",
    thumbnail: "/images/thumbnail/pomo_thumbnail.webp",
    previewImage: [
      "/images/previewImage/pomo_previewimage1.webp",
      "/images/previewImage/pomo_previewimage2.webp",
      "/images/previewImage/pomo_previewimage3.webp",
      "/images/previewImage/pomo_previewimage4.webp",
    ],
    tags: ["TypeScript", "Next.js", "Supabase"],
    details: {
      overviews: [
        "ポモドーロテクニックを実践するための、シンプルで使いやすいタイマーアプリです。",
        "作業・休憩時間の設定や、YouTubeを使ったBGM再生、ダークモードの切り替えなどに対応しています。Google認証によるログインや、ユーザーごとの設定保存機能も備えています。",
      ],
      features: [
        "作業・休憩時間を自由に設定可能",
        "タイマーの自動切り替えと進捗バー表示",
        "YouTubeで作業・休憩時間のBGM設定",
        "Google認証によるログイン対応",
        "各ユーザーの設定内容はSupabaseに保存＆自動読み込み",
      ],
      technologies: ["TypeScript", "React", "Next.js", "Tailwind CSS"],
      github: "https://github.com/hiro774/pomo",
      website: "https://pomo-gamma-ashy.vercel.app/",
    },
  },
  {
    id: 1,
    title: "HIRO LAB",
    description: "生成AIを組み込んだ自作ポートフォリオサイト",
    thumbnail: "/images/thumbnail/hirolab_thumbnail.webp",
    previewImage: [
      "/images/previewImage/hirolab_previewimage1.webp",
      "/images/previewImage/hirolab_previewimage2.webp",
      "/images/previewImage/hirolab_previewimage3.webp",
      "/images/previewImage/hirolab_previewimage4.webp",
    ],
    tags: ["TypeScript", "Next.js", "Python", "FastAPI"],
    details: {
      overviews: [
        "このアプリは、これまでの開発経験や技術的な取り組みをまとめたポートフォリオサイトです。",
        "モダンなUIやアニメーションを取り入れ、記事・制作物・AIチャット・問い合わせ機能を備えています。スマホでもスムーズに閲覧できるよう、レスポンシブ設計にも対応しています。",
      ],
      features: [
        "自己紹介ページ（About）",
        "作成した技術記事の紹介（Articles）",
        "制作したプロジェクトの紹介（Works）",
        "OpenAI APIを活用した「HIRO AI」との会話機能（AI）",
        "お問い合わせフォーム（Contact）",
      ],
      technologies: [
        "TypeScript",
        "React",
        "Next.js",
        "Tailwind CSS",
        "Python",
        "FastAPI",
        "OpenAI API",
      ],
      github: "https://github.com/hiro774/hirolab",
      website: "https://hirolab.vercel.app/",
    },
  },
];
