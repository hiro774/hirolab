import Image from "next/image";
import { WorkType } from "./types";

interface Props {
  work: WorkType;
  onClick: (work: WorkType) => void;
}

export default function WorkCard({ work, onClick }: Props) {
  return (
    <div
      className="bg-white/70 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer"
      onClick={() => onClick(work)}
    >
      <div className="h-60 bg-gradient-to-r from-blue-100 to-purple-100 flex items-center justify-center overflow-hidden">
        {work.thumbnail ? (
          <Image
            src={work.thumbnail}
            alt={work.title}
            width={640}
            height={320}
            quality={100}
            className="object-cover w-full h-full"
            loading="lazy"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAFeAJ5jU2rNgAAAABJRU5ErkJggg=="
          />
        ) : (
          <p>画像準備中</p>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-800">{work.title}</h3>
        <p className="text-gray-600 mb-4 h-12 line-clamp-2">
          {work.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {work.tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
