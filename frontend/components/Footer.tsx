"use client";

import { usePathname } from "next/navigation";
import React from "react";

const Footer = () => {
  const pathname = usePathname();
  const hiddenPaths = ["/ai"];

  if (hiddenPaths.includes(pathname)) return null;

  return (
    <footer className="footer footer-center p-4 text-base-content rounded-t-lg mt-auto bg-white/70 backdrop-blur border-t border-white/20">
      <aside>
        <p>Copyright © 2025 - All right reserved by HiroLab</p>
      </aside>
    </footer>
  );
};

export default Footer;
