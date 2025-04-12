import Image from "next/image";
import React from "react";

const AiHeader = () => {
  return (
    <div className="bg-white/80 backdrop-blur-md rounded-t-xl p-4 border border-white/30 shadow-sm">
      <div className="flex items-center">
        <div className="w-16 h-16 rounded-full overflow-hidden mr-3">
          <Image
            src="/images/icon/hiro_robot.png"
            alt="HIRO AI"
            width={200}
            height={200}
            className="object-cover"
          />
        </div>
        <div className="">
          <div className="h-10 overflow-hidden">
            <p className="font-bold text-2xl text-gray-700">HIRO AI</p>
          </div>
          <p className="text-xs text-gray-500">あなたの質問に答えます</p>
        </div>
      </div>
    </div>
  );
};

export default AiHeader;
