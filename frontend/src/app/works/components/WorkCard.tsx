import Image from "next/image";
import { WorkType } from "./types";

interface Props {
  work: WorkType;
  index: number;
  onClick: (work: WorkType) => void;
}

export default function WorkCard({ work, index, onClick }: Props) {
  return (
    <article className="work-card">
      <div className="work-card-image">
        {work.thumbnail ? (
          <Image
            src={work.thumbnail}
            alt={work.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1000px) 50vw, 380px"
            quality={85}
          />
        ) : (
          <span className="work-image-placeholder">画像準備中</span>
        )}
        <span className="work-card-number" aria-hidden="true">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <div className="work-card-body">
        <h2 className="work-card-title">
          <button
            className="work-card-trigger"
            onClick={() => onClick(work)}
            aria-label={`${work.title}の詳細を見る`}
            aria-haspopup="dialog"
          >
            {work.title}
          </button>
        </h2>
        <p className="work-card-description">{work.description}</p>
        <div className="work-tags">
          {work.tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
        <div className="work-card-footer" aria-hidden="true">
          <span>詳しく見る</span>
          <span className="work-card-arrow">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
            >
              <path d="M5 12h14m-6-6 6 6-6 6" />
            </svg>
          </span>
        </div>
      </div>
    </article>
  );
}
