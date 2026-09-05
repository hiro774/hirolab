import { useEffect, useRef } from "react";
import { MessageType } from "./types";
export const useScroll = ({
  messages,
  isSending,
}: {
  messages: MessageType[];
  isSending: boolean;
}) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const container = messagesContainerRef.current;
    if (container) container.scrollTop = container.scrollHeight;
  }, [messages, isSending]);
  return { messagesEndRef, messagesContainerRef };
};
