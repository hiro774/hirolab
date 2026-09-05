"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { WorkType } from "./types";

interface Props {
  work: WorkType;
  onClose: () => void;
}

export default function WorkModal({ work, onClose }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = work.previewImage.length
    ? work.previewImage
    : work.thumbnail
      ? [work.thumbnail]
      : [];

  useEffect(() => {
    const dialog = dialogRef.current;
    const previousOverflow = document.body.style.overflow;
    if (dialog && !dialog.open) dialog.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
      dialog?.close();
    };
  }, []);

  function closeModal() {
    dialogRef.current?.close();
  }

  function changeImage(direction: number) {
    setCurrentIndex(
      (index) => (index + direction + images.length) % images.length,
    );
  }

  return (
    <dialog
      ref={dialogRef}
      className="work-dialog"
      aria-labelledby="work-dialog-title"
      onClose={() => {
        // A development effect replay can close and reopen the same dialog.
        if (!dialogRef.current?.open) onClose();
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          const rect = event.currentTarget.getBoundingClientRect();
          if (
            event.clientX < rect.left ||
            event.clientX > rect.right ||
            event.clientY < rect.top ||
            event.clientY > rect.bottom
          )
            closeModal();
        }
      }}
    >
      <div className="work-dialog-header">
        <div>
          <p className="section-label">PROJECT DETAILS</p>
          <h2 id="work-dialog-title">{work.title}</h2>
        </div>
        <button
          type="button"
          className="icon-button work-dialog-close"
          onClick={closeModal}
          aria-label="作品の詳細を閉じる"
          autoFocus
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            aria-hidden="true"
          >
            <path d="m6 6 12 12M18 6 6 18" />
          </svg>
        </button>
      </div>
      <div className="work-dialog-content">
        {images.length > 0 && (
          <section className="work-gallery" aria-label="作品の画像">
            <div className="work-gallery-image">
              <Image
                src={images[currentIndex]}
                alt={`${work.title}の画面 ${currentIndex + 1}`}
                fill
                className="work-preview"
                sizes="(max-width: 640px) 100vw, 900px"
                quality={85}
              />
            </div>
            <div className="work-gallery-controls">
              <p
                className="work-gallery-counter"
                aria-live="polite"
                aria-atomic="true"
              >
                <strong>{String(currentIndex + 1).padStart(2, "0")}</strong>
                <span>/ {String(images.length).padStart(2, "0")}</span>
              </p>
              {images.length > 1 && (
                <>
                  <div
                    className="work-gallery-dots"
                    aria-label="表示する画像を選択"
                  >
                    {images.map((src, index) => (
                      <button
                        key={src}
                        type="button"
                        className={`work-gallery-dot ${index === currentIndex ? "is-active" : ""}`}
                        onClick={() => setCurrentIndex(index)}
                        aria-label={`画像${index + 1}を表示`}
                        aria-current={
                          index === currentIndex ? "true" : undefined
                        }
                      >
                        <span />
                      </button>
                    ))}
                  </div>
                  <div className="work-gallery-arrows">
                    <button
                      type="button"
                      className="icon-button"
                      onClick={() => changeImage(-1)}
                      aria-label="前の画像"
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        aria-hidden="true"
                      >
                        <path d="M19 12H5m6-6-6 6 6 6" />
                      </svg>
                    </button>
                    <button
                      type="button"
                      className="icon-button"
                      onClick={() => changeImage(1)}
                      aria-label="次の画像"
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        aria-hidden="true"
                      >
                        <path d="M5 12h14m-6-6 6 6-6 6" />
                      </svg>
                    </button>
                  </div>
                </>
              )}
            </div>
          </section>
        )}
        <section className="work-detail-section">
          <h3>概要</h3>
          <div className="work-detail-text">
            {work.details.overviews.map((overview, index) => (
              <p key={index}>{overview}</p>
            ))}
          </div>
        </section>
        <section className="work-detail-section">
          <h3>主な機能</h3>
          <ul className="work-feature-list">
            {work.details.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </section>
        <section className="work-detail-section">
          <h3>使用技術</h3>
          <div className="work-tags">
            {work.details.technologies.map((tech) => (
              <span key={tech} className="tag">
                {tech}
              </span>
            ))}
          </div>
        </section>
        <div className="work-dialog-links">
          {work.details.website && (
            <Link
              href={work.details.website}
              target="_blank"
              rel="noopener noreferrer"
              className="lab-button lab-button-primary"
            >
              サイトを見る<span aria-hidden="true">↗</span>
              <span className="works-sr-only">（新しいタブで開きます）</span>
            </Link>
          )}
          {work.details.github && (
            <Link
              href={work.details.github}
              target="_blank"
              rel="noopener noreferrer"
              className="lab-button lab-button-secondary"
            >
              GitHub<span aria-hidden="true">↗</span>
              <span className="works-sr-only">（新しいタブで開きます）</span>
            </Link>
          )}
        </div>
      </div>
    </dialog>
  );
}
