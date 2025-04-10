"use client";

import { useState } from "react";
import Header from "./components/Header";
import { worksData } from "./components/data";
import { WorkType } from "./components/types";
import WorkCard from "./components/WorkCard";
import WorkModal from "./components/WorkMdal";

export default function Works() {
  // 選択された作品の状態管理
  const [selectedWork, setSelectedWork] = useState<WorkType | null>(null);
  // モーダル表示状態の管理
  const [isModalOpen, setIsModalOpen] = useState(false);
  // モーダルアニメーション状態の管理
  const [isClosing, setIsClosing] = useState(false);

  // 作品をクリックした時の処理
  const handleWorkClick = (work: WorkType) => {
    setSelectedWork(work);
    setIsModalOpen(true);
    setIsClosing(false);
  };

  // モーダルを閉じる処理
  const closeModal = () => {
    setIsClosing(true);
    // アニメーション完了後にモーダルを非表示にする
    setTimeout(() => {
      setIsModalOpen(false);
      setIsClosing(false);
    }, 300); // アニメーションの時間と同じにする
  };

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 animate-fadeIn relative overflow-hidden">
      {/* 背景装飾 */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-gray-50 to-purple-50 z-0 opacity-80"></div>
      <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-cyan-100/30 blur-3xl z-0"></div>
      <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-purple-100/20 blur-3xl z-0"></div>

      <div className="relative z-10">
        {/* ヘッダーセクション */}
        <Header />
        {/* 作品一覧 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {worksData.map((work) => (
            <WorkCard key={work.id} work={work} onClick={handleWorkClick} />
          ))}
        </div>

        {/* 詳細モーダル */}
        {isModalOpen && selectedWork && (
          <WorkModal
            work={selectedWork}
            isClosing={isClosing}
            onClose={closeModal}
          />
        )}
      </div>
    </div>
  );
}
