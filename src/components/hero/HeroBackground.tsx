"use client";

import { motion } from "framer-motion";

export default function HeroBackground() {
  return (
    <>
      {/* Grid */}
      <div aria-hidden className="grid-bg absolute inset-0 opacity-30" />

      {/* Noise */}
      <div aria-hidden className="noise absolute inset-0" />

      {/* Left Glow */}
      <motion.div
        aria-hidden
        animate={{
          x: [0, 40, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="hero-glow absolute top-10 -left-60 h-[500px] w-[500px] rounded-full bg-orange-500/20 blur-[160px]"
      />

      {/* Right Glow */}
      <motion.div
        aria-hidden
        animate={{
          x: [0, -30, 0],
          y: [0, 35, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-40 right-[-180px] h-[450px] w-[450px] rounded-full bg-orange-400/10 blur-[150px]"
      />

      {/* Small Orb */}
      <motion.div
        aria-hidden
        animate={{
          y: [0, 25, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 8,
        }}
        className="absolute top-28 left-1/2 h-24 w-24 rounded-full bg-orange-500/30 blur-3xl"
      />
    </>
  );
}
