"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, FolderGit2, Sparkles } from "lucide-react";

const variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },

  show: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.7,
    },
  },
};

export default function SkillsCTA() {
  return (
    <motion.section
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{
        once: true,
        amount: 0.3,
      }}
      className="relative mt-28 overflow-hidden rounded-[36px] border border-orange-500/20 bg-gradient-to-br from-orange-500/10 via-[#111111] to-[#080808] px-8 py-14 text-center md:px-14"
    >
      {/* Glow */}

      <div className="absolute -top-28 -right-24 h-72 w-72 rounded-full bg-orange-500/10 blur-[140px]" />

      <div className="absolute -bottom-28 -left-24 h-72 w-72 rounded-full bg-orange-400/10 blur-[140px]" />

      {/* Badge */}

      <div className="glass inline-flex items-center gap-3 rounded-full border border-orange-500/20 px-5 py-2">
        <Sparkles size={16} className="text-orange-500" />

        <span className="text-sm font-medium">
          Always Learning • Always Building
        </span>
      </div>

      {/* Heading */}

      <h2 className="heading mx-auto mt-8 max-w-4xl text-[clamp(2rem,4vw,3.5rem)]">
        Technologies Become Valuable
        <br />
        Only When They Solve Real Problems.
      </h2>

      {/* Description */}

      <p className="subheading mx-auto mt-6 max-w-3xl leading-8">
        Every project I build is an opportunity to apply modern technologies,
        improve software engineering practices, and create scalable, impactful
        digital solutions. My focus is not only on learning tools but also on
        delivering meaningful user experiences.
      </p>

      {/* Buttons */}

      <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">
        <motion.div
          whileHover={{
            scale: 1.04,
          }}
          whileTap={{
            scale: 0.97,
          }}
        >
          <Link
            href="#projects"
            className="inline-flex items-center gap-3 rounded-full bg-orange-500 px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-orange-600"
          >
            <FolderGit2 size={20} />
            View My Projects
            <ArrowRight size={18} />
          </Link>
        </motion.div>

        <motion.div
          whileHover={{
            scale: 1.04,
          }}
          whileTap={{
            scale: 0.97,
          }}
        >
          <Link
            href="#contact"
            className="glass inline-flex items-center gap-3 rounded-full border border-white/10 px-8 py-4 font-semibold transition-all duration-300 hover:border-orange-500 hover:text-orange-400"
          >
            Let&apos;s Connect
          </Link>
        </motion.div>
      </div>

      {/* Bottom Tags */}

      <div className="mt-12 flex flex-wrap justify-center gap-3">
        {[
          "React",
          "Next.js",
          "TypeScript",
          "Node.js",
          "Express.js",
          "MongoDB",
          "Python",
          "AI",
          "LLMs",
          "REST APIs",
          "Git",
        ].map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300 transition-all duration-300 hover:border-orange-500/40 hover:bg-orange-500/10 hover:text-orange-300"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.section>
  );
}
