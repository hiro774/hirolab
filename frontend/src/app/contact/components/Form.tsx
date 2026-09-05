import { useEffect, useRef } from "react";
import { Props } from "../hooks/types";

export default function Form({
  formData,
  submitStatus,
  isSubmitting,
  handleChange,
  handleSubmit,
}: Props) {
  const statusRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (submitStatus) statusRef.current?.focus();
  }, [submitStatus]);

  return (
    <div className="contact-form-card surface">
      <div className="contact-form-heading">
        <h2>お問い合わせフォーム</h2>
        <span>
          <b>*</b> 必須項目
        </span>
      </div>
      {submitStatus && (
        <div
          ref={statusRef}
          tabIndex={-1}
          className={`contact-status ${submitStatus.success ? "contact-status-success" : "contact-status-error"}`}
          role={submitStatus.success ? "status" : "alert"}
        >
          <strong>
            {submitStatus.success
              ? "送信が完了しました"
              : "送信できませんでした"}
          </strong>
          <p>{submitStatus.message}</p>
        </div>
      )}
      <form
        onSubmit={handleSubmit}
        className="contact-form"
        aria-busy={isSubmitting}
      >
        <fieldset disabled={isSubmitting}>
          <div className="contact-field">
            <label htmlFor="contact-name">
              お名前 <span aria-hidden="true">*</span>
            </label>
            <input
              type="text"
              id="contact-name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              autoComplete="name"
              placeholder="山田 太郎"
            />
          </div>
          <div className="contact-field">
            <label htmlFor="contact-email">
              メールアドレス <span aria-hidden="true">*</span>
            </label>
            <input
              type="email"
              id="contact-email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              autoComplete="email"
              placeholder="hello@example.com"
            />
          </div>
          <div className="contact-field">
            <label htmlFor="contact-content">
              お問い合わせ内容 <span aria-hidden="true">*</span>
            </label>
            <textarea
              id="contact-content"
              name="content"
              value={formData.content}
              onChange={handleChange}
              required
              rows={6}
              placeholder="ご質問・ご相談など、お気軽にご記入ください。"
            />
          </div>
          <div className="contact-submit-row">
            <button
              type="submit"
              className="lab-button lab-button-primary contact-submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className="contact-loading-ring" aria-hidden="true" />
                  送信中…
                </>
              ) : (
                <>
                  メッセージを送る{" "}
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M5 12h14m-6-6 6 6-6 6"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </>
              )}
            </button>
          </div>
        </fieldset>
        <p className="contact-submit-status" role="status" aria-live="polite">
          {isSubmitting ? "お問い合わせを送信しています。" : ""}
        </p>
      </form>
    </div>
  );
}
