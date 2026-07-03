"use client";

import { motion } from "framer-motion";

export default function HeroImageFrame() {
  return (
    <>
      {/* Outer Ring */}

      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          repeat: Infinity,
          duration: 25,
          ease: "linear",
        }}
        className="absolute inset-0 rounded-full border border-dashed border-orange-500/30"
      />

      {/* Inner Ring */}

      <motion.div
        animate={{
          rotate: -360,
        }}
        transition={{
          repeat: Infinity,
          duration: 18,
          ease: "linear",
        }}
        className="absolute inset-6 rounded-full border border-white/10"
      />
    </>
  );
}
