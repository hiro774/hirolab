"use client";

import Image from "next/image";
import { WorkType } from "./types";
import Link from "next/link";
import { useState, useEffect } from "react";

interface Props {
  work: WorkType;
  isClosing: boolean;
  onClose: () => void;
}

export default function WorkModal({ work, isClosing, onClose }: Props) {
  // 画像スライダー用の状態
  const [images, setImages] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // 初期化時に利用可能な画像を設定
  useEffect(() => {
    // 現在利用可能な画像を配列に格納
    const availableImages = work.previewImage;
    setImages(availableImages);
  }, [work]);

  // 次の画像に移動
  const goToNextImage = () => {
    if (images.length <= 1) return;
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  // 前の画像に移動
  const goToPrevImage = () => {
    if (images.length <= 1) return;
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div
      className={`fixed inset-0 bg-black/60 flex items-start justify-center z-50 p-4 pt-20 ${
        isClosing ? "animate-fadeOut" : "animate-fadeIn"
      }`}
      onClick={onClose}
    >
      <div
        className={`bg-white rounded-xl max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-xl ${
          isClosing ? "animate-scaleOut" : "animate-scaleIn"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* ヘッダー */}
        <div className="sticky top-0 bg-gray-50 p-5 z-20 border-b border-gray-200 flex justify-between items-center rounded-t-xl">
          <h2 className="text-2xl font-bold text-gray-800 tracking-tight">
            {work.title}
          </h2>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full cursor-pointer bg-white text-gray-500 hover:bg-gray-100 hover:text-gray-700 transition-colors duration-200 border border-gray-200"
          >
            ✕
          </button>
        </div>

        <div className="py-10 px-8 md:px-16 lg:px-20">
          {/* 画像スライダー */}
          <div className="mb-10 relative">
            <div className="relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-lg shadow-md">
              {images.length > 0 && (
                <Image
                  src={images[currentIndex]}
                  alt={work.title}
                  fill
                  className="object-contain"
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAFeAJ5jU2rNgAAAABJRU5ErkJggg=="
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                  quality={80}
                />
              )}
            </div>

            {/* 矢印ボタン */}
            {images.length > 1 && (
              <>
                <button
                  onClick={goToPrevImage}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 shadow-md flex items-center justify-center text-gray-700 hover:bg-white transition-colors z-10 cursor-pointer"
                  aria-label="前の画像"
                >
                  ←
                </button>
                <button
                  onClick={goToNextImage}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 shadow-md flex items-center justify-center text-gray-700 hover:bg-white transition-colors z-10 cursor-pointer"
                  aria-label="次の画像"
                >
                  →
                </button>
              </>
            )}

            {/* 画像カウンター */}
            {images.length > 1 && (
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                {currentIndex + 1} / {images.length}
              </div>
            )}
          </div>

          {/* 概要 */}
          <div className="mb-10 pb-8 border-b border-gray-200">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">概要</h3>
            {work.details.overviews.map((overview: string, index: number) => (
              <p key={index} className="text-gray-700 leading-relaxed">
                {overview}
              </p>
            ))}
          </div>

          {/* 機能 */}
          <div className="mb-10 pb-8 border-b border-gray-200">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              主な機能
            </h3>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              {work.details.features.map((feature: string, index: number) => (
                <li key={index} className="leading-relaxed">
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* 使用技術 */}
          <div className="mb-10 pb-8 border-b border-gray-200">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              使用技術
            </h3>
            <div className="flex flex-wrap gap-2">
              {work.details.technologies.map((tech: string, index: number) => (
                <span
                  key={index}
                  className="px-4 py-1.5 bg-gray-100 text-gray-700 border border-gray-200 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors duration-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* リンク */}
          <div className="flex flex-wrap gap-4 justify-center mt-12">
            <Link
              href={work.details.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white border border-gray-300 text-gray-700 rounded-lg shadow-sm hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 flex items-center font-medium"
              onClick={(e) => e.stopPropagation()}
            >
              GitHub
            </Link>
            {work.details.website ? (
              <Link
                href={work.details.website}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gray-800 text-white rounded-lg shadow-sm hover:bg-gray-700 transition-colors duration-200 flex items-center font-medium"
                onClick={(e) => e.stopPropagation()}
              >
                サイトを見る
              </Link>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
