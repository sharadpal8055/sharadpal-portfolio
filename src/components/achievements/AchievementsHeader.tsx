"use client";

import { motion } from "framer-motion";
import { Trophy } from "lucide-react";

import { achievementsSection } from "@/constants/achievements";

/* -------------------------------------------------------------------------- */
/*                              Motion Variants                               */
/* -------------------------------------------------------------------------- */

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 35,
  },

  show: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

/* -------------------------------------------------------------------------- */
/*                          Achievements Header                               */
/* -------------------------------------------------------------------------- */

export default function AchievementsHeader() {
  return (
    <div className="mx-auto max-w-5xl text-center">
      {/* -------------------------------------------------------------- */}
      {/* Badge */}
      {/* -------------------------------------------------------------- */}

      <motion.div variants={itemVariants} className="flex justify-center">
        <div className="glass inline-flex items-center gap-3 rounded-full border border-orange-500/20 px-6 py-3">
          <Trophy size={18} className="text-orange-500" />

          <span className="text-sm font-semibold tracking-wide text-orange-400">
            {achievementsSection.badge}
          </span>
        </div>
      </motion.div>

      {/* -------------------------------------------------------------- */}
      {/* Heading */}
      {/* -------------------------------------------------------------- */}

      <motion.h2
        id="achievements-heading"
        variants={itemVariants}
        className="heading mx-auto mt-8 max-w-5xl text-[clamp(2.8rem,6vw,5rem)] leading-tight"
      >
        {achievementsSection.heading}
      </motion.h2>

      {/* -------------------------------------------------------------- */}
      {/* Description */}
      {/* -------------------------------------------------------------- */}

      <motion.p
        variants={itemVariants}
        className="subheading mx-auto mt-8 max-w-4xl leading-9"
      >
        {achievementsSection.description}
      </motion.p>

      {/* -------------------------------------------------------------- */}
      {/* Animated Divider */}
      {/* -------------------------------------------------------------- */}

      <motion.div variants={itemVariants} className="mt-14 flex justify-center">
        <div className="relative h-[2px] w-56 overflow-hidden rounded-full bg-white/10">
          <motion.div
            animate={{
              x: ["-100%", "100%"],
            }}

            transition={{
              duration: 2.5,

              repeat: Infinity,

              ease: "linear",
            }}

            className="absolute inset-y-0 w-24 rounded-full bg-gradient-to-r from-transparent via-orange-500 to-transparent"
          />
        </div>
      </motion.div>
    </div>
  );
}
