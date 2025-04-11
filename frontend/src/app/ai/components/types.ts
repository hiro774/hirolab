// メッセージの型定義
export type MessageType = {
  id: string;
  content: string;
  fullContent?: string; // タイピングアニメーション用の完全なテキスト
  sender: "user" | "ai";
  timestamp: string;
  isTyping?: boolean; // タイピング中かどうか
};

// APIレスポンスの型定義（将来的に使用予定）
// export type ApiResponse = {
//   message: string;
// };
