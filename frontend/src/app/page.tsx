import Image from "next/image";
import Link from "next/link";
import { worksData } from "./works/components/data";
import "./home.css";

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      aria-hidden="true"
    >
      <path d={diagonal ? "M5 19 19 5M5 5h14v14" : "M4 12h15m-6-6 6 6-6 6"} />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="home-shell">
      <section className="home-hero" aria-labelledby="home-title">
        <div className="hero-copy">
          <p className="eyebrow">WELCOME TO MY PERSONAL LAB</p>
          <h1 id="home-title">
            HIRO
            <br />
            <span>
              LAB<span className="hero-period">.</span>
            </span>
          </h1>
          <p className="hero-description">
            Showcasing web creations &amp;
            <br className="desktop-break" /> tech insights with passion.
          </p>
          <div className="hero-actions">
            <Link href="/works" className="lab-button lab-button-primary">
              制作実績を見る <Arrow />
            </Link>
            <Link href="/ai" className="lab-button lab-button-secondary">
              HIRO AIと話す <Arrow diagonal />
            </Link>
          </div>
          <div className="hero-socials">
            <span>FIND ME ON</span>
            <a
              href="https://github.com/hiro774"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub <Arrow diagonal />
            </a>
            <a
              href="https://x.com/hirolulu65379"
              target="_blank"
              rel="noopener noreferrer"
            >
              X <Arrow diagonal />
            </a>
          </div>
        </div>
        <div className="hero-art" aria-label="HIRO LABのロボットキャラクター">
          <div className="lab-window">
            <div className="window-toolbar">
              <div className="window-dots" aria-hidden="true">
                <i />
                <i />
                <i />
              </div>
              <span>HIRO LAB / PLAYGROUND</span>
              <span aria-hidden="true">↗</span>
            </div>
            <div className="robot-stage">
              <span className="orbit orbit-outer" aria-hidden="true" />
              <span className="orbit orbit-inner" aria-hidden="true" />
              <span className="stage-cross cross-one" aria-hidden="true">
                +
              </span>
              <span className="stage-cross cross-two" aria-hidden="true">
                +
              </span>
              <div className="robot-portrait">
                <Image
                  src="/images/icon/lulu_robot.webp"
                  alt="HIRO LABのロボット"
                  width={320}
                  height={320}
                  priority
                  sizes="(max-width: 720px) 220px, 280px"
                />
              </div>
              <span className="robot-caption">
                A LITTLE CURIOSITY. A LOT OF POSSIBILITIES.
              </span>
            </div>
          </div>
          <span className="floating-code" aria-hidden="true">
            &lt;/&gt;
          </span>
          <div className="hello-sticker">
            <span aria-hidden="true">✦</span> Hello, I’m HIRO.
          </div>
          <span className="art-footnote" aria-hidden="true">
            DESIGN · BUILD · EXPLORE
          </span>
        </div>
      </section>
      <div className="home-divider">
        <span>WEB CREATIONS & TECH INSIGHTS</span>
        <a href="#explore">
          Explore the lab <span aria-hidden="true">↓</span>
        </a>
      </div>
      <section
        id="explore"
        className="home-works"
        aria-labelledby="home-works-title"
      >
        <div className="home-section-heading">
          <div>
            <p className="eyebrow">01 / WORKS</p>
            <h2 id="home-works-title">
              From the lab<span>.</span>
            </h2>
          </div>
          <Link href="/works" className="section-link">
            すべての作品を見る <Arrow />
          </Link>
        </div>
        <div className="home-work-grid">
          {worksData.slice(0, 3).map((work, index) => (
            <Link
              href="/works"
              key={work.id}
              className="home-work-card"
              aria-label={`${work.title}を作品一覧で見る`}
            >
              <div className="home-work-image">
                <Image
                  src={work.thumbnail}
                  alt={work.title}
                  fill
                  sizes="(max-width: 640px) calc(100vw - 40px), (max-width: 900px) 44vw, 360px"
                />
                <span className="home-work-number">0{index + 1}</span>
                <span className="home-work-arrow">
                  <Arrow diagonal />
                </span>
              </div>
              <div className="home-work-caption">
                <h3>{work.title}</h3>
                <p>{work.description}</p>
                <div className="home-work-tags">
                  {work.tags.slice(0, 3).map((tag) => (
                    <span className="tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <section className="home-explore" aria-label="HiroLabをもっと見る">
        <Link href="/about" className="explore-tile">
          <span className="section-label">02 / ABOUT</span>
          <div>
            <h2>Behind the lab.</h2>
            <Arrow diagonal />
          </div>
          <p>プロフィールと、使っている技術。</p>
        </Link>
        <Link href="/articles" className="explore-tile">
          <span className="section-label">03 / ARTICLES</span>
          <div>
            <h2>Notes & insights.</h2>
            <Arrow diagonal />
          </div>
          <p>日々の学びをまとめた技術記事。</p>
        </Link>
        <Link href="/ai" className="explore-tile explore-ai">
          <span className="section-label">04 / HIRO AI</span>
          <div>
            <h2>Say hello.</h2>
            <Arrow diagonal />
          </div>
          <p>HIRO AIに、気軽に話しかけてみてください。</p>
        </Link>
      </section>
    </div>
  );
}
