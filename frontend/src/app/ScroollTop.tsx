"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function ScrollToTop() {
  const pathname = usePathname();
  const previousPath = useRef<string | null>(null);

  useEffect(() => {
    // 初回マウント時にはスキップ
    if (previousPath.current === null) {
      previousPath.current = pathname;
      return;
    }

    const isToAI = pathname === "/ai";
    const isFromAI = previousPath.current === "/ai";

    if (isToAI || isFromAI) {
      window.scrollTo(0, 0);
    }

    previousPath.current = pathname;
  }, [pathname]);

  return null;
}
