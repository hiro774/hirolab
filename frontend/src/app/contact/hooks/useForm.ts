import { useState, FormEvent } from "react";

export const useForm = () => {
  const contactApiUrl = process.env.NEXT_PUBLIC_CONTACT_API_ENDPOINT;

  // フォームの状態管理
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    content: "",
  });

  // 送信状態の管理
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  // 入力変更ハンドラー
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // フォーム送信ハンドラー
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(`${contactApiUrl}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus({
          success: true,
          message: "お問い合わせを受け付けました。ありがとうございます。",
        });
      }

      // フォームをリセット
      setFormData({
        name: "",
        email: "",
        content: "",
      });
    } catch {
      setSubmitStatus({
        success: false,
        message: "送信に失敗しました。後ほど再度お試しください。",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return { formData, submitStatus, isSubmitting, handleChange, handleSubmit };
};
