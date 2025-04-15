import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="text-center mb-15">
      {/* アイコン部分 */}
      <div className="w-40 h-20 mx-auto relative flex items-center justify-center mt-10">
        <Image
          src="/images/text/works.png"
          alt="アイコン画像"
          width={160}
          height={80}
        />
      </div>

      {/* テキスト（画像の下） */}
      <p className="text-gray-600 max-w-2xl mx-auto">
        Here are some of the projects I&apos;ve worked on details.
      </p>
    </div>
  );
};

export default Header;
