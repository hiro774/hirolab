import React from "react";
import { Props } from "../hooks/types";

const Form = ({
  formData,
  submitStatus,
  isSubmitting,
  handleChange,
  handleSubmit,
}: Props) => {
  return (
    <div className="bg-white/60 backdrop-blur-sm rounded-xl p-8 shadow-lg transition-all duration-500 hover:shadow-xl">
      {submitStatus && (
        <div
          className={`mb-6 p-4 rounded-lg ${
            submitStatus.success
              ? "bg-green-100 text-green-800"
              : "bg-red-100 text-red-800"
          }`}
        >
          {submitStatus.message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* 名前フィールド */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            氏名 <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
            placeholder="山田 太郎"
          />
        </div>

        {/* メールアドレスフィールド */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            メールアドレス <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
            placeholder="example@example.com"
          />
        </div>

        {/* 内容フィールド */}
        <div>
          <label
            htmlFor="content"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            お問い合わせ内容 <span className="text-red-500">*</span>
          </label>
          <textarea
            id="content"
            name="content"
            value={formData.content}
            onChange={handleChange}
            required
            rows={6}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
            placeholder="お問い合わせ内容をご記入ください"
          ></textarea>
        </div>

        {/* 送信ボタン */}
        <div className="flex justify-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`text-base px-6 py-1.5 cursor-pointer bg-sky-600 text-white font-medium rounded-md shadow-lg hover:shadow-lg transform hover:opacity-80 transition-opacity duration-300 ${
              isSubmitting ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {isSubmitting ? (
              <span className="flex items-center">
                <svg
                  className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                送信中...
              </span>
            ) : (
              "SEND"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
