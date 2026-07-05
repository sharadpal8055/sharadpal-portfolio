"use client";

import { motion } from "framer-motion";

import { achievements } from "@/constants/achievements";

import AchievementCard from "./AchievementCard";

/* -------------------------------------------------------------------------- */
/*                              Motion Variants                               */
/* -------------------------------------------------------------------------- */

const containerVariants = {
  hidden: {},

  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 45,
  },

  show: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.6,
      
    },
  },
};

/* -------------------------------------------------------------------------- */
/*                            Achievements Grid                               */
/* -------------------------------------------------------------------------- */

export default function AchievementsGrid() {
  return (
    <section className="mt-32">
      {/* -------------------------------------------------------------- */}
      {/* Section Title */}
      {/* -------------------------------------------------------------- */}

      <motion.div
        initial={{
          opacity: 0,
          y: 30,
        }}

        whileInView={{
          opacity: 1,
          y: 0,
        }}

        viewport={{
          once: true,
        }}

        transition={{
          duration: 0.6,
        }}

        className="mx-auto max-w-3xl text-center"
      >
        <h3 className="heading text-[clamp(2.2rem,5vw,4rem)]">
          Recognition & Milestones
        </h3>

        <p className="subheading mx-auto mt-6 max-w-2xl leading-8">
          Highlights from my engineering journey, competitions, learning
          milestones, and professional growth.
        </p>
      </motion.div>

      {/* -------------------------------------------------------------- */}
      {/* Achievement Cards */}
      {/* -------------------------------------------------------------- */}

      <motion.div
        variants={containerVariants}

        initial="hidden"

        whileInView="show"

        viewport={{
          once: true,
          amount: 0.15,
        }}

        className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3"
      >
        {achievements.map((achievement) => (
          <motion.div
            key={achievement.id}

            variants={itemVariants}
          >
            <AchievementCard achievement={achievement} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
