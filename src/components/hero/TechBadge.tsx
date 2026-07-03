"use client";

import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

interface TechBadgeProps {
  icon: React.ElementType;
  color: string;
  position: string;
}

export default function TechBadge({
  icon: Icon,
  color,
  position,
}: TechBadgeProps) {
  return (
    <motion.div
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
      }}
      className={cn("absolute z-20", position)}
    >
      <motion.div
        whileHover={{
          scale: 1.15,
          rotate: 8,
        }}
        className="glass flex h-14 w-14 items-center justify-center rounded-full border border-white/10 shadow-xl shadow-black/30"
      >
        <Icon size={28} className={color} />
      </motion.div>
    </motion.div>
  );
}
