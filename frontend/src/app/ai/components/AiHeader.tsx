import Image from "next/image";
import React from "react";

const AiHeader = () => {
  return (
    <div className="bg-white/80 backdrop-blur-md rounded-t-xl p-4 border border-white/30 shadow-sm">
      <div className="flex items-center">
        <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
          <Image
            src="/images/icon/hiro_robot.png"
            alt="HIRO AI"
            width={40}
            height={40}
            className="object-cover"
          />
        </div>
        <div>
          <h1 className="text-lg font-semibold text-gray-800">HIRO AI</h1>
          <p className="text-xs text-gray-500">あなたの質問に答えます</p>
        </div>
      </div>
    </div>
  );
};

export default AiHeader;
