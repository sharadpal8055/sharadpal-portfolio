"use client";

import { motion } from "framer-motion";

import SocialLinks from "@/components/common/SocialLinks";

export default function HeroSocials() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        delay: 0.85,
        duration: 0.6,
      }}
      className="mt-10 flex flex-col items-center gap-5 sm:items-start"
    >
      {/* Label */}

      <div className="flex items-center gap-3">
        <span className="h-px w-10 bg-orange-500/60" />

        <p className="text-sm font-medium tracking-[0.25em] text-zinc-400 uppercase">
          Connect With Me
        </p>
      </div>

      {/* Social Icons */}

      <SocialLinks direction="row" size="md" />
    </motion.div>
  );
}
