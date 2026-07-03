"use client";

import { useEffect, useState } from "react";
import { navLinks } from "@/constants/navLinks";

export default function useActiveSection() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const updateActive = () => {
      const scrollPosition = window.scrollY + 140;

      let current = "home";

      for (const item of navLinks) {
        const section = document.getElementById(item.id);

        if (!section) continue;

        if (scrollPosition >= section.offsetTop) {
          current = item.id;
        }
      }

      setActive(current);
    };

    updateActive();

    window.addEventListener("scroll", updateActive, {
      passive: true,
    });

    return () =>
      window.removeEventListener("scroll", updateActive);
  }, []);

  return active;
}