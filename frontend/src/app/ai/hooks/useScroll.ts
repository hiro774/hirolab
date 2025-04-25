import { useEffect, useRef } from "react";
import { MessageType } from "./types";

type Props = {
  messages: MessageType[];
  typingMessageId: string | null;
};

export const useScroll = ({ messages, typingMessageId }: Props) => {
  // 初回メッセージの高さを保存するref
  const initialContentHeightRef = useRef(0);
  // スクロールが必要かどうかを判断するためのref
  const needsScrollRef = useRef(false);
  // 初回レンダリングかどうかを判断するためのref
  const isFirstRenderRef = useRef(true);
  // メッセージ表示領域のref
  const messagesEndRef = useRef<HTMLDivElement>(null);
  // メッセージコンテナのref
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  // メッセージが追加されたときに自動スクロール
  useEffect(() => {
    // コンテナが存在するか確認
    if (!messagesContainerRef.current) return;

    // コンテナとコンテンツの高さを取得
    const container = messagesContainerRef.current;
    const currentContentHeight = container.scrollHeight;

    console.log(`高さ：${currentContentHeight}`);
    console.log(`isFirstRenderRef：${isFirstRenderRef.current}`);
    console.log(`messages.length：${messages.length}`);

    // 初回レンダリング時（ウェルカムメッセージ表示時）に初期コンテンツの高さを記録
    if (isFirstRenderRef.current && messages.length === 1) {
      // 少し遅延して初期コンテンツの高さを確実に取得
      setTimeout(() => {
        if (messagesContainerRef.current) {
          initialContentHeightRef.current =
            messagesContainerRef.current.scrollHeight;
        }
        isFirstRenderRef.current = false;
      }, 100);
      return;
    }

    // 初期コンテンツの高さが記録されていない場合はスキップ
    if (initialContentHeightRef.current === 0) {
      console.log("記録なし");
      return;
    }

    // 現在のコンテンツの高さが初期コンテンツの高さより大きいかチェック
    const hasExceededInitialHeight =
      currentContentHeight > initialContentHeightRef.current;

    // 初期コンテンツの高さを超えた場合のみスクロールを有効にする
    if (hasExceededInitialHeight) {
      needsScrollRef.current = true;
    }

    // スクロールが必要な場合のみスクロールする
    if (needsScrollRef.current) {
      console.log("スクロール実行");

      // 複数のタイミングでスクロールを実行（より確実にするため）
      // 即時実行
      scrollToBottom();

      // 短い遅延後に実行
      setTimeout(() => {
        scrollToBottom();
      }, 50);

      // 少し長い遅延後に実行
      setTimeout(() => {
        scrollToBottom();
      }, 300);
    }
  }, [messages]);

  // タイピングアニメーション完了時にもスクロール
  useEffect(() => {
    // タイピングが完了した場合（typingMessageIdがnullになった場合）
    if (typingMessageId === null && needsScrollRef.current) {
      console.log("タイピング完了 - スクロール実行");

      // 少し遅延してスクロール
      setTimeout(() => {
        scrollToBottom();
      }, 50);
    }
  }, [typingMessageId]);

  // 一番下にスクロールする関数
  const scrollToBottom = () => {
    try {
      if (!messagesContainerRef.current) return;

      // 直接スクロール位置を設定（スムーズなアニメーションなし）
      messagesContainerRef.current.scrollTop =
        messagesContainerRef.current.scrollHeight;

      // messagesEndRefも使用
      if (messagesEndRef.current) {
        messagesEndRef.current.scrollIntoView({ behavior: "auto" });
      }

      console.log("スクロール処理実行完了");
    } catch (error) {
      console.error("スクロール処理中にエラー:", error);
    }
  };

  return {
    messagesEndRef,
    messagesContainerRef,
  };
};
