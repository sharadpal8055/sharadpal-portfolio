"use client";

import { motion } from "framer-motion";
import { GraduationCap, Target, Quote } from "lucide-react";

import { aboutData } from "@/constants/about";

import AboutCards from "./AboutCards";
import AboutTimeline from "./AboutTimeline";
import AboutHighlights from "./AboutHighlights";
import AboutCTA from "./AboutCTA";

import type { Variants } from "framer-motion";

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },

  show: {
    opacity: 1,

    y: 0,

    transition: {
      duration: 0.7,

      
    },
  },
};

export default function AboutContent() {
  return (
    <div className="mx-auto max-w-7xl">
      {/* Badge */}

      <motion.div variants={itemVariants} className="flex justify-center">
        <span className="glass inline-flex rounded-full border border-orange-500/20 px-5 py-2 text-sm font-semibold text-orange-400">
          {aboutData.badge}
        </span>
      </motion.div>

      {/* Heading */}

      <motion.h2
        id="about-heading"
        variants={itemVariants}
        className="heading mx-auto mt-8 max-w-5xl text-center text-[clamp(2.8rem,6vw,5rem)]"
      >
        {aboutData.heading}
      </motion.h2>

      {/* Intro */}

      <motion.p
        variants={itemVariants}
        className="subheading mx-auto mt-8 max-w-4xl text-center leading-9"
      >
        {aboutData.intro}
      </motion.p>

      {/* Description */}

      <motion.p
        variants={itemVariants}
        className="mx-auto mt-8 max-w-4xl text-center leading-9 text-zinc-400"
      >
        {aboutData.description}
      </motion.p>

      {/* Philosophy */}

      <motion.section
        variants={itemVariants}
        className="glass mx-auto mt-20 max-w-4xl rounded-[32px] border border-orange-500/20 p-10"
      >
        <div className="flex flex-col items-center text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-orange-500/10 text-orange-500">
            <Quote size={28} />
          </div>

          <h3 className="mt-6 text-2xl font-bold">My Philosophy</h3>

          <p className="mt-6 leading-9 text-zinc-400">{aboutData.philosophy}</p>
        </div>
      </motion.section>

      {/* Education */}

      <motion.section
        variants={itemVariants}
        className="glass mx-auto mt-20 max-w-5xl rounded-[32px] border border-white/10 p-10"
      >
        <div className="flex flex-col items-center text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-500">
            <GraduationCap size={30} />
          </div>

          <h3 className="mt-6 text-2xl font-bold">
            {aboutData.education.college}
          </h3>

          <p className="mt-3 text-zinc-400">{aboutData.education.degree}</p>

          <p className="text-zinc-400">{aboutData.education.branch}</p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <span className="rounded-full bg-orange-500/10 px-5 py-2 text-sm font-medium text-orange-400">
              CGPA {aboutData.education.cgpa}
            </span>

            <span className="rounded-full bg-white/5 px-5 py-2 text-sm text-zinc-300">
              {aboutData.education.duration}
            </span>
          </div>
        </div>
      </motion.section>

      {/* Career Objective */}

      <motion.section
        variants={itemVariants}
        className="glass mx-auto mt-20 max-w-5xl rounded-[32px] border border-white/10 p-10"
      >
        <div className="flex flex-col items-center text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-orange-500/10 text-orange-500">
            <Target size={28} />
          </div>

          <h3 className="mt-6 text-2xl font-bold">Career Objective</h3>

          <p className="mt-6 max-w-3xl leading-9 text-zinc-400">
            {aboutData.objective}
          </p>
        </div>
      </motion.section>

      {/* Expertise */}

      <motion.div variants={itemVariants} className="mt-24">
        <AboutCards />
      </motion.div>

      {/* Timeline */}

      <motion.div variants={itemVariants} className="mt-24">
        <AboutTimeline />
      </motion.div>

      {/* Strengths */}

      <motion.div variants={itemVariants} className="mt-24">
        <AboutHighlights />
      </motion.div>

      {/* CTA */}

      <motion.div variants={itemVariants} className="mt-28">
        <AboutCTA />
      </motion.div>
    </div>
  );
}
