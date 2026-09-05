import Icon from "./components/Icon";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import "./about.css";

export default function About() {
  return (
    <div className="page-shell about-page">
      <header className="page-heading">
        <p className="eyebrow">ABOUT ME</p>
        <h1 className="page-title">つくる人のこと。</h1>
        <p className="page-description">
          プロフィールと、日々の制作に使っている技術をご紹介します。
        </p>
      </header>
      <div className="about-profile-grid">
        <Icon />
        <Profile />
      </div>
      <Skills />
    </div>
  );
}
