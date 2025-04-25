import { useEffect } from "react";
import { MessageType } from "./types";

type Props = {
  messages: MessageType[];
  setMessages: React.Dispatch<React.SetStateAction<MessageType[]>>;
  typingMessageId: string | null;
  setTypingMessageId: React.Dispatch<React.SetStateAction<string | null>>;
};

export const useTyping = ({
  messages,
  setMessages,
  typingMessageId,
  setTypingMessageId,
}: Props) => {
  // タイピングアニメーション用のuseEffect
  useEffect(() => {
    if (!typingMessageId) return;

    const typingMessage = messages.find(
      (msg) => msg.id === typingMessageId && msg.isTyping
    );
    if (!typingMessage || !typingMessage.fullContent) return;

    // 現在表示されているテキストの長さ
    const currentLength = typingMessage.content.length;
    // 完全なテキストの長さ
    const fullLength = typingMessage.fullContent.length;

    // まだ表示していない文字がある場合
    if (currentLength < fullLength) {
      // タイピング速度（ランダム要素を加えて自然に見せる）
      const typingSpeed = 30 + Math.random() * 20;

      const timer = setTimeout(() => {
        setMessages((prevMessages) =>
          prevMessages.map((msg) => {
            if (msg.id === typingMessageId) {
              // 次の文字を追加
              const nextChar = msg.fullContent!.charAt(currentLength);
              return {
                ...msg,
                content: msg.content + nextChar,
                // タイピングが完了したらisTypingをfalseに
                isTyping: currentLength + 1 < fullLength,
              };
            }
            return msg;
          })
        );

        // タイピングが完了したら状態をリセット
        if (currentLength + 1 >= fullLength) {
          setTypingMessageId(null);
        }
      }, typingSpeed);

      return () => clearTimeout(timer);
    }
  }, [messages, typingMessageId]);
};
