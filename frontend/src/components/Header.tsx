"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const links = [
  { href: "/", label: "Top" },
  { href: "/about", label: "About" },
  { href: "/works", label: "Works" },
  { href: "/articles", label: "Articles" },
  { href: "/ai", label: "AI" },
];
function Arrow() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      aria-hidden="true"
    >
      <path d="M5 19 19 5M5 5h14v14" />
    </svg>
  );
}

export default function Header() {
  const pathname = usePathname();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => dialogRef.current?.close();

  useEffect(() => {
    if (!menuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const desktop = window.matchMedia("(min-width: 721px)");
    const closeOnDesktop = () => {
      if (desktop.matches) dialogRef.current?.close();
    };
    desktop.addEventListener("change", closeOnDesktop);
    return () => {
      document.body.style.overflow = previousOverflow;
      desktop.removeEventListener("change", closeOnDesktop);
    };
  }, [menuOpen]);

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" className="brand" aria-label="HIRO LAB トップページ">
          <Image
            src="/images/icon/lulu_robot.webp"
            alt=""
            width={36}
            height={36}
          />
          <span className="brand-type">
            HIRO<span> LAB.</span>
          </span>
        </Link>
        <nav className="desktop-nav" aria-label="メインメニュー">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="nav-link"
              aria-current={pathname === href ? "page" : undefined}
            >
              {label}
            </Link>
          ))}
        </nav>
        <Link
          href="/contact"
          className="lab-button header-contact"
          aria-current={pathname === "/contact" ? "page" : undefined}
        >
          Contact <Arrow />
        </Link>
        <button
          className="icon-button menu-toggle"
          aria-label="メニューを開く"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => {
            dialogRef.current?.showModal();
            setMenuOpen(true);
          }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            aria-hidden="true"
          >
            <path d="M4 8h16M4 16h16" />
          </svg>
        </button>
      </div>
      <dialog
        ref={dialogRef}
        id="mobile-navigation"
        className="mobile-menu"
        aria-label="メインメニュー"
        onClose={() => setMenuOpen(false)}
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            const rect = event.currentTarget.getBoundingClientRect();
            if (
              event.clientX < rect.left ||
              event.clientX > rect.right ||
              event.clientY < rect.top ||
              event.clientY > rect.bottom
            )
              closeMenu();
          }
        }}
      >
        <div className="mobile-menu-top">
          <span className="brand-type">
            HIRO<span> LAB.</span>
          </span>
          <button
            className="icon-button"
            aria-label="メニューを閉じる"
            onClick={closeMenu}
            autoFocus
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              aria-hidden="true"
            >
              <path d="m6 6 12 12M18 6 6 18" />
            </svg>
          </button>
        </div>
        <nav className="mobile-nav" aria-label="モバイルメニュー">
          {[...links, { href: "/contact", label: "Contact" }].map(
            ({ href, label }) => (
              <Link
                key={href}
                href={href}
                aria-current={pathname === href ? "page" : undefined}
                onClick={closeMenu}
              >
                {label}
                <Arrow />
              </Link>
            ),
          )}
        </nav>
        <p className="mobile-menu-note">WEB CREATIONS & TECH INSIGHTS</p>
      </dialog>
    </header>
  );
}
