"use client";

import { useState } from "react";
import Header from "./components/Header";
import { worksData } from "./components/data";
import { WorkType } from "./components/types";
import WorkCard from "./components/WorkCard";
import WorkModal from "./components/WorkModal";
import "./works.css";

export default function Works() {
  const [selectedWork, setSelectedWork] = useState<WorkType | null>(null);

  return (
    <div className="page-shell works-page">
      <Header />
      <div className="works-collection-heading">
        <p className="section-label">PROJECT COLLECTION</p>
        <span className="works-total">
          {String(worksData.length).padStart(2, "0")} projects
        </span>
      </div>
      <div className="works-grid">
        {worksData.map((work, index) => (
          <WorkCard
            key={work.id}
            work={work}
            index={index}
            onClick={setSelectedWork}
          />
        ))}
      </div>
      {selectedWork && (
        <WorkModal
          key={selectedWork.id}
          work={selectedWork}
          onClose={() => setSelectedWork(null)}
        />
      )}
    </div>
  );
}
