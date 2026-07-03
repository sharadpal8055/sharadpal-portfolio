"use client";

import { ChevronDown } from "lucide-react";

import { motion } from "framer-motion";

export default function ScrollIndicator() {
  return (
    <motion.button
      aria-label="Scroll to About section"
      onClick={() =>
        document.getElementById("about")?.scrollIntoView({
          behavior: "smooth",
        })
      }
      animate={{
        y: [0, 10, 0],
      }}
      transition={{
        repeat: Infinity,
        duration: 2,
      }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 text-zinc-500 transition-colors hover:text-orange-500"
    >
      <ChevronDown size={30} />
    </motion.button>
  );
}
