"use client";

import { motion } from "framer-motion";

type SkillPillProps = {
  name: string;
  icon: React.ElementType;
  color: string;
};

export default function SkillPill({
  name,
  icon: Icon,
  color,
}: SkillPillProps) {
  return (
    <motion.div
      whileHover={{
        y: -4,
        scale: 1.05,
      }}
      whileTap={{
        scale: 0.97,
      }}
      transition={{
        duration: 0.2,
      }}
      className="
        group
        flex
        items-center
        gap-3

        rounded-full

        border
        border-white/10

        bg-white/[0.03]

        px-4
        py-2.5

        transition-all
        duration-300

        hover:border-orange-500/40
        hover:bg-orange-500/5
      "
    >
      <div
        className="
          flex
          h-8
          w-8
          items-center
          justify-center

          rounded-full

          bg-white/5

          transition-transform
          duration-300

          group-hover:rotate-12
        "
      >
        <Icon
          className={`${color} text-lg`}
        />
      </div>

      <span
        className="
          text-sm
          font-medium
          text-zinc-200
        "
      >
        {name}
      </span>
    </motion.div>
  );
}