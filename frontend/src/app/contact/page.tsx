"use client";

import Form from "./components/Form";
import Header from "./components/Header";
import { useForm } from "./hooks/useForm";

export default function Contact() {
  const { formData, submitStatus, isSubmitting, handleChange, handleSubmit } =
    useForm();

  return (
    <div className="min-h-screen mt-20 mb-10 md:mb-0 pt-4 md:pt-8 px-4 md:px-8 animate-fadeIn relative overflow-hidden">
      <div className="container mt-8 md:mt-15 mx-auto max-w-3xl relative z-10">
        {/* ヘッダーセクション */}
        <Header />
        {/* フォームセクション */}
        <Form
          formData={formData}
          submitStatus={submitStatus}
          isSubmitting={isSubmitting}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  );
}
