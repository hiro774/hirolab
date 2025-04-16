import Icon from "./components/Icon";
import Skills from "./components/Skills";
import Profile from "./components/Profile";

export default function About() {
  return (
    <div className="mx-auto mt-15 md:m-3 sm:py-2 md:py-4 animate-fadeIn relative overflow-hidden">
      <div className="absolute inset-0"></div>

      <div className="w-[90%] mx-auto container mx-auto px-4 md:px-8 lg:px-16 xl:px-24 md:py-8 relative z-10">
        {/* 上部セクション */}
        <div className="flex mx-auto items-center w-[95%] md:w-[90%] grid grid-cols-1 lg:grid-cols-[30%_70%] gap-4 md:gap-15 backdrop-blur-sm rounded-xl">
          {/* 左側：アイコン */}
          <div className="flex items-center justify-center lg:justify-start">
            <Icon />
          </div>
          {/* 右側：プロフィール */}
          <div className="flex justify-center items-center md:mt-10">
            <Profile />
          </div>
        </div>

        {/* 下部セクション */}
        <div className="relative mb-10">
          <Skills />
        </div>
      </div>
    </div>
  );
}
