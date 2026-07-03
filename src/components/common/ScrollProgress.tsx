"use client";

import { motion, useSpring } from "framer-motion";
import { useEffect } from "react";

import useScrollProgress from "@/hooks/useScrollProgress";

export default function ScrollProgress() {
  const progress = useScrollProgress();

  /**
   * Smooth animation
   */
  const scaleX = useSpring(progress / 100, {
    stiffness: 140,
    damping: 25,
    mass: 0.25,
  });

  useEffect(() => {
    scaleX.set(progress / 100);
  }, [progress, scaleX]);

  return (
    <motion.div
      aria-hidden="true"
      className="fixed left-0 top-0 z-[9999] h-[3px] w-full origin-left bg-transparent"
      style={{
        scaleX,
      }}
    >
     <div
    className="
        progress-glow

        h-full
        w-full

        rounded-full

        bg-gradient-to-r
        from-orange-500
        via-orange-400
        to-orange-600

        shadow-[0_0_20px_rgba(255,107,0,0.65)]
    "
/>
    </motion.div>
  );
}