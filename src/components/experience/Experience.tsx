"use client";

import { motion } from "framer-motion";

import ExperienceHeader from "./ExperienceHeader";
import ExperienceStats from "./ExperienceStats";
import ExperienceTimeline from "./ExperienceTimeline";
import ExperiencePrinciples from "./ExperiencePrinciples";
import ExperienceCTA from "./ExperienceCTA";

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

export default function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="section-padding relative overflow-hidden"
    >
      {/* ------------------------------------------------------------------ */}
      {/* Background */}
      {/* ------------------------------------------------------------------ */}

      <div className="grid-bg absolute inset-0 opacity-30" />

      <div className="noise" />

      <div className="absolute top-24 -left-40 h-[450px] w-[450px] rounded-full bg-orange-500/10 blur-[140px]" />

      <div className="absolute right-0 bottom-0 h-[420px] w-[420px] rounded-full bg-orange-400/10 blur-[140px]" />

      {/* ------------------------------------------------------------------ */}
      {/* Content */}
      {/* ------------------------------------------------------------------ */}

      <motion.div
        variants={containerVariants}
        initial="show"
        whileInView="show"
        viewport={{
          once: true,
          amount: 0.15,
        }}
        className="container-width relative z-10"
      >
        {/* Header */}

        <ExperienceHeader />

        {/* Stats */}

        <ExperienceStats />

        {/* Timeline */}

        <ExperienceTimeline />

        {/* Principles */}

        <ExperiencePrinciples />

        {/* CTA */}

        <ExperienceCTA />
      </motion.div>
    </section>
  );
}
