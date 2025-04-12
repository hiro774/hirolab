import { useState, useRef, useEffect } from "react";
import { MessageType } from "./types";

export const useChat = () => {
  // メッセージの状態管理
  const [messages, setMessages] = useState<MessageType[]>([]);
  // タイピングアニメーション用の状態
  const [typingMessageId, setTypingMessageId] = useState<string | null>(null);
  // 入力テキストの状態管理
  const [inputText, setInputText] = useState("");
  // 送信中の状態管理
  const [isSending, setIsSending] = useState(false);
  // 履歴の管理
  const [history, setHistory] = useState<string[]>([]);
  // 入力カーソルのref
  const inputRef = useRef<HTMLInputElement>(null);
  // メッセージ表示領域のref
  const messagesEndRef = useRef<HTMLDivElement>(null);
  // メッセージコンテナのref
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  // 初回メッセージの高さを保存するref
  const initialContentHeightRef = useRef(0);
  // スクロールが必要かどうかを判断するためのref
  const needsScrollRef = useRef(false);
  // 初回レンダリングかどうかを判断するためのref
  const isFirstRenderRef = useRef(true);

  // 初期メッセージを表示
  useEffect(() => {
    const welcomeMessage: MessageType = {
      id: "welcome",
      content:
        "こんにちは！このサイトの管理人HIROです。何かお手伝いできることはありますか？",
      sender: "ai",
      timestamp: new Date().toLocaleTimeString("ja-JP", {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };
    setMessages([welcomeMessage]);
  }, []);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

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

  // メッセージが追加されたときに自動スクロール
  useEffect(() => {
    // コンテナが存在するか確認
    if (!messagesContainerRef.current) return;

    // コンテナとコンテンツの高さを取得
    const container = messagesContainerRef.current;
    const currentContentHeight = container.scrollHeight;

    // 初回レンダリング時（ウェルカムメッセージ表示時）に初期コンテンツの高さを記録
    if (isFirstRenderRef.current && messages.length === 1) {
      // 少し遅延して初期コンテンツの高さを確実に取得
      setTimeout(() => {
        if (messagesContainerRef.current) {
          initialContentHeightRef.current =
            messagesContainerRef.current.scrollHeight;
          // console.log(
          //   "初期コンテンツの高さを記録:",
          //   initialContentHeightRef.current
          // );
        }
        isFirstRenderRef.current = false;
      }, 100);
      return;
    }

    // 初期コンテンツの高さが記録されていない場合はスキップ
    if (initialContentHeightRef.current === 0) return;

    // 現在のコンテンツの高さが初期コンテンツの高さより大きいかチェック
    const hasExceededInitialHeight =
      currentContentHeight > initialContentHeightRef.current;
    // console.log(
    //   "現在のコンテンツの高さ:",
    //   currentContentHeight,
    //   "初期コンテンツの高さ:",
    //   initialContentHeightRef.current,
    //   "初期高さを超えた:",
    //   hasExceededInitialHeight
    // );

    // 初期コンテンツの高さを超えた場合のみスクロールを有効にする
    if (hasExceededInitialHeight) {
      needsScrollRef.current = true;
    }

    // スクロールが必要な場合のみスクロールする
    if (needsScrollRef.current) {
      // console.log("スクロール実行");

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
      // console.log("タイピング完了 - スクロール実行");

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

      // console.log("スクロール処理実行完了");
    } catch (error) {
      console.error("スクロール処理中にエラー:", error);
    }
  };

  // メッセージを送信する関数
  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!inputText.trim()) return;

    const now = new Date().toLocaleTimeString("ja-JP", {
      hour: "2-digit",
      minute: "2-digit",
    });

    // ユーザーメッセージをUIに追加
    const userMessage: MessageType = {
      id: Date.now().toString(),
      content: inputText,
      sender: "user",
      timestamp: now,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputText("");
    setIsSending(true);

    // UIの更新が完了するのを待ってからフォーカスを設定（機能していない可能性有）
    setTimeout(() => {
      inputRef.current?.focus();
    }, 10);

    try {
      // APIリクエスト（サンプル）
      // 実際のAPIエンドポイントに置き換える
      const response = await fetch("http://localhost:8000/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content: inputText, history: history }),
      });

      // サンプルレスポンス（実際のAPIが実装されるまでのモック）
      const data = await response.json();

      // AIの応答をUIに追加（タイピングアニメーション付き）
      setTimeout(() => {
        const messageId = (Date.now() + 1).toString();
        const aiMessage: MessageType = {
          id: messageId,
          content: "", // 最初は空
          fullContent: data.content, // 完全なテキスト
          sender: "ai",
          timestamp: now,
          isTyping: true, // タイピング中フラグ
        };

        setMessages((prev) => [...prev, aiMessage]);
        setTypingMessageId(messageId); // タイピングアニメーションを開始
        setHistory((prev) => [...prev, inputText, data.content]);
        setIsSending(false);

        // AIの応答が表示された後に再度フォーカスを設定
        setTimeout(() => {
          inputRef.current?.focus();
        }, 100);
      }, 1000); // 1秒の遅延を追加してAIが「考えている」ように見せる
    } catch (error) {
      console.error("Error sending message:", error);

      // エラーメッセージをUIに追加（タイピングアニメーション付き）
      const messageId = (Date.now() + 1).toString();
      const errorMessage: MessageType = {
        id: messageId,
        content: "",
        fullContent:
          "申し訳ありません、メッセージの送信中にエラーが発生しました。もう一度お試しください。",
        sender: "ai",
        timestamp: now,
        isTyping: true,
      };

      setMessages((prev) => [...prev, errorMessage]);
      setTypingMessageId(messageId);
      setIsSending(false);

      // エラー表示後にも入力フィールドにフォーカスを戻す
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  };

  console
    .log
    // `message: ${messages}`
    // `inputText: ${inputText}`,
    // `setInputText: ${setInputText}`
    // `isSending: ${isSending}`
    // `sendMessage: ${sendMessage}`
    // `messagesEndRef: ${messagesEndRef}`,
    // `messagesContainerRef: ${messagesContainerRef}`
    ();

  return {
    messages,
    inputText,
    setInputText,
    isSending,
    sendMessage,
    inputRef,
    messagesEndRef,
    messagesContainerRef,
  };
};
