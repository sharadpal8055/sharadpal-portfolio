"use client";

import { motion } from "framer-motion";

import AchievementsHeader from "./AchievementsHeader";
import AchievementsStats from "./AchievementsStats";
import AchievementsGrid from "./AchievementsGrid";
import Certifications from "./Certifications";
import AchievementsCTA from "./AchievementsCTA";

/* -------------------------------------------------------------------------- */
/*                              Motion Variants                               */
/* -------------------------------------------------------------------------- */

const containerVariants = {
  hidden: {},

  show: {
    transition: {
      staggerChildren: 0.16,
      delayChildren: 0.15,
    },
  },
};

/* -------------------------------------------------------------------------- */
/*                              Achievements                                  */
/* -------------------------------------------------------------------------- */

export default function Achievements() {
  return (
    <section
      id="achievements"
      aria-labelledby="achievements-heading"
      className="section-padding relative overflow-hidden"
    >
      {/* -------------------------------------------------------------- */}
      {/* Background Effects */}
      {/* -------------------------------------------------------------- */}

      <div className="grid-bg absolute inset-0 opacity-30" />

      <div className="noise" />

      <div className="absolute top-32 -left-40 h-[450px] w-[450px] rounded-full bg-orange-500/10 blur-[140px]" />

      <div className="absolute -right-40 bottom-20 h-[450px] w-[450px] rounded-full bg-orange-400/10 blur-[140px]" />

      {/* -------------------------------------------------------------- */}
      {/* Content */}
      {/* -------------------------------------------------------------- */}

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{
          once: true,
          amount: 0.15,
        }}
        className="container-width relative z-10"
      >
        {/* Header */}

        <AchievementsHeader />

        {/* Statistics */}

        <AchievementsStats />

        {/* Main Achievements */}

        <AchievementsGrid />

        {/* Certifications */}

        <Certifications />

        {/* CTA */}

        <AchievementsCTA />
      </motion.div>
    </section>
  );
}
