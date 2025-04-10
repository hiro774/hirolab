import React from "react";

const Header = () => {
  return (
    <div className="text-center mb-12">
      <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        作品一覧
      </h1>
      <p className="text-gray-600 max-w-2xl mx-auto">
        これまでに手がけたプロジェクトをご紹介します。各プロジェクトをクリックすると詳細をご覧いただけます。
      </p>
    </div>
  );
};

export default Header;
