"use client";

import CountUp from "react-countup";
import { motion } from "framer-motion";

import { achievementStats } from "@/constants/achievements";

/* -------------------------------------------------------------------------- */
/*                              Motion Variants                               */
/* -------------------------------------------------------------------------- */

const containerVariants = {
  hidden: {},

  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },

  show: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

/* -------------------------------------------------------------------------- */
/*                            Achievements Stats                              */
/* -------------------------------------------------------------------------- */

export default function AchievementsStats() {
  return (
    <motion.div
      variants={containerVariants}

      initial="hidden"

      whileInView="show"

      viewport={{
        once: true,
        amount: 0.2,
      }}

      className="mt-24 grid gap-6 sm:grid-cols-2 xl:grid-cols-4"
    >
      {achievementStats.map((item) => {
        const Icon = item.icon;

        const numberValue = Number(String(item.value).replace(/[^0-9]/g, ""));

        const suffix = String(item.value).replace(/[0-9]/g, "");

        return (
          <motion.div
            key={item.id}

            variants={cardVariants}

            whileHover={{
              y: -10,
              scale: 1.03,
            }}

            transition={{
              type: "spring",
              stiffness: 260,
            }}

            className="glass group relative overflow-hidden rounded-[30px] border border-white/10 p-8 transition-all duration-300 hover:border-orange-500/40 hover:shadow-2xl hover:shadow-orange-500/10"
          >
            {/* Glow Effect */}

            <div className="absolute -top-16 -right-16 h-44 w-44 rounded-full bg-orange-500/10 opacity-0 blur-[90px] transition-all duration-500 group-hover:opacity-100" />

            {/* Icon */}

            <div className="relative mb-7 flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-500 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
              <Icon size={30} />
            </div>

            {/* Number */}

            <h3 className="heading relative text-5xl font-bold">
              <CountUp
                end={numberValue}

                duration={2}

                enableScrollSpy
              />

              {suffix}
            </h3>

            {/* Label */}

            <p className="relative mt-4 text-sm tracking-wide text-zinc-400">
              {item.label}
            </p>

            {/* Accent */}

            <div className="relative mt-8 h-[2px] w-full rounded-full bg-gradient-to-r from-orange-500/80 via-orange-300/30 to-transparent" />
          </motion.div>
        );
      })}
    </motion.div>
  );
}
