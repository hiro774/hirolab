import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";

class ContactError extends Error {}

export const useForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    content: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);
  const requestRef = useRef<AbortController | null>(null);
  const mountedRef = useRef(true);

  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
      requestRef.current?.abort();
    };
  }, []);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
    setSubmitStatus(null);
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (requestRef.current) return;
    const request = new AbortController();
    requestRef.current = request;
    setIsSubmitting(true);
    setSubmitStatus(null);
    const timeout = setTimeout(() => request.abort(), 30000);
    try {
      const endpoint = process.env.NEXT_PUBLIC_CONTACT_API_ENDPOINT;
      if (!endpoint)
        throw new ContactError(
          "現在、お問い合わせを送信できません。入力内容はそのまま残しています。時間をおいて、もう一度お試しください。",
        );
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
        signal: request.signal,
      });
      if (response.status === 429)
        throw new ContactError(
          "送信が集中しています。入力内容はそのまま残しています。少し時間をおいて、もう一度お試しください。",
        );
      if (!response.ok)
        throw new ContactError(
          "お問い合わせを送信できませんでした。入力内容はそのまま残しています。時間をおいて、もう一度お試しください。",
        );
      const data = await response.json();
      if (data.success !== true)
        throw new ContactError(
          "お問い合わせを届けられませんでした。入力内容はそのまま残しています。時間をおいて、もう一度お試しください。",
        );
      if (!mountedRef.current) return;
      setSubmitStatus({
        success: true,
        message: "お問い合わせを受け付けました。ありがとうございます。",
      });
      setFormData({ name: "", email: "", content: "" });
    } catch (cause) {
      if (!mountedRef.current) return;
      setSubmitStatus({
        success: false,
        message:
          cause instanceof ContactError
            ? cause.message
            : "接続を確認して、もう一度お試しください。入力内容はそのまま残しています。",
      });
    } finally {
      clearTimeout(timeout);
      requestRef.current = null;
      if (mountedRef.current) setIsSubmitting(false);
    }
  };
  return { formData, submitStatus, isSubmitting, handleChange, handleSubmit };
};
