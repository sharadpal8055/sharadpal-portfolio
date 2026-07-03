"use client";

import { useEffect, useState } from "react";

/**
 * ============================================================
 * useScrollProgress
 * ------------------------------------------------------------
 * Returns the page scroll progress as a value between 0 and 100.
 *
 * Example:
 * 0   → Top of page
 * 50  → Middle
 * 100 → Bottom
 * ============================================================
 */

export default function useScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;

      const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      if (documentHeight <= 0) {
        setScrollProgress(0);
        return;
      }

      const progress = (scrollTop / documentHeight) * 100;

      setScrollProgress(Math.min(Math.max(progress, 0), 100));
    };

    updateScrollProgress();

    window.addEventListener("scroll", updateScrollProgress, {
      passive: true,
    });

    window.addEventListener("resize", updateScrollProgress);

    return () => {
      window.removeEventListener("scroll", updateScrollProgress);
      window.removeEventListener("resize", updateScrollProgress);
    };
  }, []);

  return scrollProgress;
}