"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BriefcaseBusiness,
  Sparkles,
  FolderGit2,
} from "lucide-react";

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

export default function ExperienceCTA() {
  return (
    <motion.section
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{
        once: true,
        amount: 0.3,
      }}
      className="
        relative
        mt-32
        overflow-hidden
        rounded-[36px]
        border
        border-orange-500/20
        bg-gradient-to-br
        from-orange-500/10
        via-[#101010]
        to-[#080808]
        p-8
        md:p-14
      "
    >
      {/* Background Glow */}

      <div className="absolute -top-32 -left-24 h-72 w-72 rounded-full bg-orange-500/10 blur-[130px]" />

      <div className="absolute -bottom-32 -right-24 h-72 w-72 rounded-full bg-orange-400/10 blur-[130px]" />

      {/* Availability */}

      <div className="glass inline-flex items-center gap-3 rounded-full border border-orange-500/20 px-5 py-2">
        <Sparkles
          size={16}
          className="text-orange-500"
        />

        <span className="text-sm font-medium">
          Open to Software Engineering Internships
        </span>
      </div>

      {/* Heading */}

      <h2 className="heading mt-8 max-w-4xl text-[clamp(2.3rem,5vw,4rem)]">
        Ready for the Next Opportunity.
      </h2>

      {/* Description */}

      <p className="subheading mt-6 max-w-3xl leading-8">
        I'm looking forward to joining an engineering team where I can
        contribute to meaningful products, solve challenging problems,
        collaborate with talented developers, and continue growing as a
        software engineer.
      </p>

      {/* Feature Pills */}

      <div className="mt-10 flex flex-wrap gap-3">
        {[
          "Fast Learner",
          "Team Player",
          "Problem Solver",
          "Production Ready Code",
          "AI Enthusiast",
          "Continuous Improvement",
        ].map((item) => (
          <span
            key={item}
            className="
              rounded-full
              border
              border-white/10
              bg-white/5
              px-4
              py-2
              text-sm
              text-zinc-300
            "
          >
            {item}
          </span>
        ))}
      </div>

      {/* Buttons */}

      <div className="mt-12 flex flex-col gap-4 sm:flex-row">
        {/* Projects */}

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
            className="
              inline-flex
              items-center
              justify-center
              gap-3
              rounded-full
              bg-orange-500
              px-8
              py-4
              font-semibold
              text-white
              transition-all
              duration-300
              hover:bg-orange-600
            "
          >
            <FolderGit2 size={18} />

            View Projects
          </Link>
        </motion.div>

        {/* Contact */}

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
            className="
              glass
              inline-flex
              items-center
              justify-center
              gap-3
              rounded-full
              px-8
              py-4
              font-semibold
              transition-all
              duration-300
              hover:border-orange-500
              hover:text-orange-400
            "
          >
            <BriefcaseBusiness size={18} />

            Let's Work Together

            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>

      {/* Bottom Line */}

      <div className="mt-14 h-px w-full bg-gradient-to-r from-orange-500 via-orange-300/40 to-transparent" />
    </motion.section>
  );
}