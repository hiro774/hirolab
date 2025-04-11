// メッセージの型定義
export type MessageType = {
  id: string;
  content: string;
  fullContent?: string; // タイピングアニメーション用の完全なテキスト
  sender: "user" | "ai";
  timestamp: string;
  isTyping?: boolean; // タイピング中かどうか
};
