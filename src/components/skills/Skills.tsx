"use client";

import { motion } from "framer-motion";

import SkillsBackground from "./SkillsBackground";
import SkillsHeader from "./SkillsHeader";
import SkillsStats from "./SkillsStats";
import SkillsGrid from "./SkillsGrid";
import SkillsCTA from "./SkillsCTA";

const containerVariants = {
  hidden: {},

  show: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.15,
    },
  },
};

export default function Skills() {
  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      <SkillsBackground />

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
        <SkillsHeader />

        <SkillsStats />

        <SkillsGrid />

        <SkillsCTA />
      </motion.div>
    </section>
  );
}
