import { WorkType } from "./types";

export const worksData: WorkType[] = [
  // {
  //   id: 4,
  //   title: "未定",
  //   description: "",
  //   thumbnail: "",
  //   previewImage: [""],
  //   tags: ["TypeScript", "Next.js", "Python", "Django"],
  //   details: {
  //     overview:
  //       "OpenAI APIを活用した会話型AI Bot。ユーザーの質問に対して自然な応答を生成し、様々なトピックについて会話できます。",
  //     features: [
  //       "自然言語処理",
  //       "会話履歴の保存",
  //       "カスタマイズ可能なAIパーソナリティ",
  //       "マルチモーダル対応（テキスト、画像）",
  //     ],
  //     technologies: [
  //       "Python",
  //       "Django",
  //       "PostgreSQL",
  //       "AWS Lambnda",
  //       "OpenAI API",
  //       "LINE API",
  //       "Railway",
  //     ],
  //     challenges:
  //       "APIレスポンスの遅延を最小限に抑えるために、ストリーミングレスポンスを実装し、ユーザー体験を向上させました。また、コスト効率を考慮したトークン使用量の最適化も行いました。",
  //     github: "https://github.com/username/ai-chatbot",
  //     website: "https://ai-chatbot.example.com",
  //   },
  // },
  {
    id: 3,
    title: "Mlb Report AI",
    description: "OPENAI-APIとRAGを活用した会話型Line Bot",
    thumbnail: "/images/thumbnail/mlbAi_thumbnail.png",
    previewImage: [
      "/images/previewimage/mlbAi_previewimage1.png",
      "/images/previewimage/mlbAi_previewimage2.png",
      "/images/previewimage/mlbAi_previewimage3.png",
      "/images/previewimage/mlbAi_previewimage4.png",
      "/images/previewimage/mlbAi_previewimage5.png",
    ],
    tags: ["Python", "Django", "AWS Lambda", "Supabase"],
    details: {
      overview:
        "OpenAI APIを活用した会話型AI Bot。ユーザーの質問に対して自然な応答を生成し、様々なトピックについて会話できます。",
      features: [
        "自然言語処理",
        "会話履歴の保存",
        "カスタマイズ可能なAIパーソナリティ",
        "マルチモーダル対応（テキスト、画像）",
      ],
      technologies: [
        "Python",
        "Django",
        "PostgreSQL",
        "AWS Lambnda",
        "OpenAI API",
        "LINE API",
        "Railway",
      ],
      challenges:
        "APIレスポンスの遅延を最小限に抑えるために、ストリーミングレスポンスを実装し、ユーザー体験を向上させました。また、コスト効率を考慮したトークン使用量の最適化も行いました。",
      github: "https://github.com/hiro774/mlbai",
      website: "",
    },
  },
  {
    id: 2,
    title: "Pomo - ポモドーロタイマー -",
    description: "Youtube動画をBGMに設定できるポモドーロアプリ",
    thumbnail: "/images/thumbnail/pomo_thumbnail.png",
    previewImage: [
      "/images/previewimage/pomo_previewimage1.png",
      "/images/previewimage/pomo_previewimage2.png",
      "/images/previewimage/pomo_previewimage3.png",
      "/images/previewimage/pomo_previewimage4.png",
    ],
    tags: ["TypeScript", "Next.js", "Supabase"],
    details: {
      overview:
        "Youtube動画をBGMに設定できるポモドーロアプリです。様々な要素をカスタマイズしながらぽもードーロタイマーを作成できます。",
      features: [
        "ポモドーロタイマー",
        "作業時間・休憩時間の設定",
        "YoutubeBGMの設定",
        "環境設定の保存",
      ],
      technologies: ["TypeScript", "React", "Next.js", "Tailwind CSS"],
      challenges:
        "APIレスポンスの遅延を最小限に抑えるために、ストリーミングレスポンスを実装し、ユーザー体験を向上させました。また、コスト効率を考慮したトークン使用量の最適化も行いました。",
      github: "https://github.com/hiro774/pomo",
      website: "https://pomo-gamma-ashy.vercel.app/",
    },
  },
  {
    id: 1,
    title: "HIRO LAB",
    description: "生成AIを組み込んだ自作ポートフォリオサイト",
    thumbnail: "/images/thumbnail/hirolab_thumbnail.png",
    previewImage: [
      "/images/previewimage/hirolab_previewimage1.png",
      "/images/previewimage/hirolab_previewimage2.png",
      "/images/previewimage/hirolab_previewimage3.png",
      "/images/previewimage/hirolab_previewimage4.png",
    ],
    tags: ["TypeScript", "Next.js", "Python", "FastAPI"],
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
        "TypeScript",
        "React",
        "Next.js",
        "Tailwind CSS",
        "Python",
        "FastAPI",
        "OpenAI API",
      ],
      challenges:
        "パフォーマンス最適化とアニメーションの両立が課題でした。Lighthouse scoreで95以上を達成するために、画像の最適化やコンポーネントの遅延読み込みを実装しました。",
      github: "https://github.com/hiro774/hirolab",
      website: "https://hirolab.vercel.app/",
    },
  },
];
