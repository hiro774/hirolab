import { WorkType } from "./types";

export const worksData: WorkType[] = [
  {
    id: 1,
    title: "ポートフォリオサイト",
    description: "Next.jsとTailwind CSSを使用した個人ポートフォリオサイト",
    thumbnail: "/images/hirolab.png",
    tags: ["Next.js", "React", "Tailwind CSS"],
    details: {
      overview:
        "エンジニアとしての経験やスキルを紹介するためのポートフォリオサイト。モダンなデザインと滑らかなアニメーションを取り入れ、レスポンシブ対応しています。",
      features: [
        "レスポンシブデザイン",
        "ダークモード対応",
        "アニメーションエフェクト",
        "SEO最適化",
      ],
      technologies: [
        "Next.js 14",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
      ],
      challenges:
        "パフォーマンス最適化とアニメーションの両立が課題でした。Lighthouse scoreで95以上を達成するために、画像の最適化やコンポーネントの遅延読み込みを実装しました。",
      github: "https://github.com/username/portfolio",
      website: "https://portfolio.example.com",
    },
  },
  {
    id: 2,
    title: "AI チャットボット",
    description: "OpenAI APIを使用した会話型AIアシスタント",
    thumbnail: "/images/lulu_robot.png",
    tags: ["React", "Node.js", "OpenAI API"],
    details: {
      overview:
        "OpenAI APIを活用した会話型AIアシスタント。ユーザーの質問に対して自然な応答を生成し、様々なトピックについて会話できます。",
      features: [
        "自然言語処理",
        "会話履歴の保存",
        "カスタマイズ可能なAIパーソナリティ",
        "マルチモーダル対応（テキスト、画像）",
      ],
      technologies: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "OpenAI API",
        "Socket.io",
      ],
      challenges:
        "APIレスポンスの遅延を最小限に抑えるために、ストリーミングレスポンスを実装し、ユーザー体験を向上させました。また、コスト効率を考慮したトークン使用量の最適化も行いました。",
      github: "https://github.com/username/ai-chatbot",
      website: "https://ai-chatbot.example.com",
    },
  },
  {
    id: 3,
    title: "ECサイト",
    description: "フルスタックのEコマースプラットフォーム",
    thumbnail: "/images/lulu_walk.png",
    tags: ["Next.js", "Prisma", "Stripe API"],
    details: {
      overview:
        "モダンなUIを備えたEコマースプラットフォーム。商品管理、カート機能、決済処理、注文管理など、ECサイトに必要な機能を一通り実装しています。",
      features: [
        "商品検索・フィルタリング",
        "ユーザー認証",
        "カート機能",
        "Stripe決済統合",
        "注文履歴・管理",
        "管理者ダッシュボード",
      ],
      technologies: [
        "Next.js",
        "TypeScript",
        "Prisma",
        "PostgreSQL",
        "Stripe API",
        "NextAuth.js",
        "Tailwind CSS",
      ],
      challenges:
        "在庫管理と同時購入の競合を解決するために、トランザクション処理を実装しました。また、決済プロセスのセキュリティ強化のために、Webhookを活用した非同期処理を導入しました。",
      github: "https://github.com/username/ecommerce",
      website: "https://ecommerce.example.com",
    },
  },
  {
    id: 4,
    title: "タスク管理アプリ",
    description: "ドラッグ＆ドロップ対応のカンバン方式タスク管理ツール",
    thumbnail: "/images/lulu.png",
    tags: ["React", "Redux", "Firebase"],
    details: {
      overview:
        "カンバン方式のタスク管理ツール。直感的なドラッグ＆ドロップ操作でタスクの状態を管理できます。チーム開発向けの機能も備えています。",
      features: [
        "ドラッグ＆ドロップインターフェース",
        "タスクの優先度・期限設定",
        "チーム共有機能",
        "通知システム",
        "進捗レポート",
      ],
      technologies: [
        "React",
        "Redux Toolkit",
        "TypeScript",
        "Firebase",
        "React Beautiful DnD",
        "Chart.js",
      ],
      challenges:
        "リアルタイムの同期とオフライン対応の両立が課題でした。Firebaseのオフラインキャッシュとカスタム同期ロジックを実装し、ネットワーク状態に関わらず一貫した操作性を実現しました。",
      github: "https://github.com/username/task-manager",
      website: "https://task-manager.example.com",
    },
  },
];
