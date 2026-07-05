"use client";

import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";

import {ArrowRight, ArrowUpRight, Sparkles } from "lucide-react";

import { FaGithub } from "react-icons/fa";

/* -------------------------------------------------------------------------- */
/*                              Motion Variants                               */
/* -------------------------------------------------------------------------- */

const variants = {
  hidden: {
    opacity: 0,
    y: 50,
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
/*                                Projects CTA                                */
/* -------------------------------------------------------------------------- */

export default function ProjectsCTA() {
  return (
    <motion.section
      variants={variants}

      initial="hidden"

      whileInView="show"

      viewport={{
        once: true,
        amount: 0.25,
      }}

      className="glass relative mt-32 overflow-hidden rounded-[40px] border border-orange-500/20 p-10 text-center md:p-16"
    >
      {/* ------------------------------------------------------------ */}
      {/* Background Effects */}
      {/* ------------------------------------------------------------ */}

      <div className="absolute -top-32 -left-32 h-72 w-72 rounded-full bg-orange-500/10 blur-[120px]" />

      <div className="absolute -right-32 -bottom-32 h-72 w-72 rounded-full bg-orange-400/10 blur-[120px]" />

      {/* ------------------------------------------------------------ */}
      {/* Badge */}
      {/* ------------------------------------------------------------ */}

      <div className="relative mx-auto inline-flex items-center gap-3 rounded-full border border-orange-500/20 bg-orange-500/10 px-6 py-3">
        <Sparkles size={18} className="text-orange-500" />

        <span className="text-sm font-semibold text-orange-400">
          More Projects Available
        </span>
      </div>

      {/* ------------------------------------------------------------ */}
      {/* Heading */}
      {/* ------------------------------------------------------------ */}

      <h2 className="heading mx-auto mt-8 max-w-4xl text-[clamp(2.5rem,5vw,4rem)]">
        Explore More Experiments, Builds & Engineering Work
      </h2>

      {/* ------------------------------------------------------------ */}
      {/* Description */}
      {/* ------------------------------------------------------------ */}

      <p className="subheading mx-auto mt-7 max-w-3xl leading-9">
        I continuously build applications, experiment with new technologies,
        improve existing systems, and document my engineering progress through
        real projects.
      </p>

      {/* ------------------------------------------------------------ */}
      {/* Buttons */}
      {/* ------------------------------------------------------------ */}

      <div className="mt-12 flex flex-col justify-center gap-5 sm:flex-row">
        {/* GitHub */}

        <motion.div
          whileHover={{
            scale: 1.05,
          }}

          whileTap={{
            scale: 0.96,
          }}
        >
          <Link
            href="https://github.com/sharadpal8055"

            target="_blank"

            className="inline-flex items-center justify-center gap-3 rounded-full bg-orange-500 px-8 py-4 font-semibold text-white transition-all hover:bg-orange-600"
          >
            <FaGithub size={20} />
            View GitHub
          </Link>
        </motion.div>

        {/* Contact */}

        <motion.div
          whileHover={{
            scale: 1.05,
          }}

          whileTap={{
            scale: 0.96,
          }}
        >
          <Link
            href="#contact"

            className="glass inline-flex items-center justify-center gap-3 rounded-full px-8 py-4 font-semibold transition-all hover:text-orange-400"
          >
            Discuss a Project
            <ArrowRight size={20} />
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}
