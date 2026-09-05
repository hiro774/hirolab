import Link from "next/link";
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <Link
            href="/"
            className="brand-type"
            aria-label="HIRO LAB トップページ"
          >
            HIRO<span> LAB.</span>
          </Link>
          <p className="footer-copy">© {new Date().getFullYear()} HiroLab</p>
        </div>
        <nav className="footer-links" aria-label="フッターメニュー">
          <a
            href="https://github.com/hiro774"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub ↗
          </a>
          <Link href="/contact">Contact ↗</Link>
          <a href="#top" className="footer-top">
            ページ上部へ ↑
          </a>
        </nav>
      </div>
    </footer>
  );
}
