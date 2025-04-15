import Icon from "./components/Icon";
import Skills from "./components/Skills";
import Profile from "./components/Profile";

export default function About() {
  return (
    <div className="mt-15 sm:py-2 md:py-4 animate-fadeIn relative overflow-hidden">
      {/* 背景 - グラデーションとパターンを追加 */}
      <div className="absolute inset-0"></div>

      <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-24 py-2 sm:py-4 md:py-9 relative z-10">
        {/* 上部セクション：アイコンとプロフィール - 影とアニメーションを追加 */}
        <div className="grid grid-cols-1 lg:grid-cols-[30%_70%] gap-7 backdrop-blur-sm rounded-xl">
          {/* 左側：アイコン */}
          <div className="flex justify-center lg:justify-start">
            <Icon />
          </div>
          {/* 右側：プロフィール */}
          <Skills />
        </div>
        <div className="relative mt-8"></div>

        {/* 下部セクション：スキル - デザイン改善 */}
        <div className="relative mt-12 md:mt-10">
          {/* 装飾ライン - より洗練されたデザイン */}
          <div className="absolute -left-4 top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyan-400 via-purple-400 to-blue-400 hidden md:block rounded-full"></div>

          {/* 装飾要素 - 小さな円形の装飾 */}
          <div className="absolute -left-[10px] top-0 w-4 h-4 rounded-full bg-cyan-400 hidden md:block z-10"></div>
          <div className="absolute -left-[10px] bottom-0 w-4 h-4 rounded-full bg-blue-400 hidden md:block z-10"></div>

          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-5 shadow-lg transition-all duration-500 hover:shadow-xl mb-8 md:mb-5">
            <Profile />
          </div>
        </div>
      </div>
    </div>
  );
}
