"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Sparkles,
  Mail,
  BriefcaseBusiness,
} from "lucide-react";

import { aboutData } from "@/constants/about";

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

const roles = [
  "Software Engineer",
  "Full Stack Developer",
  "AI Developer",
  "Backend Engineer",
];

export default function AboutCTA() {
  return (
    <motion.section
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{
        once: true,
        amount: 0.25,
      }}
      className="
        relative
        mt-28
        overflow-hidden
        rounded-[40px]
        border
        border-orange-500/20
        bg-gradient-to-br
        from-orange-500/10
        via-[#111111]
        to-[#070707]
        p-8
        md:p-14
      "
    >
      {/* Background Glow */}

      <div className="absolute -left-32 top-0 h-80 w-80 rounded-full bg-orange-500/10 blur-[140px]" />

      <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-orange-400/10 blur-[140px]" />

      {/* Availability */}

      <div className="glass inline-flex items-center gap-3 rounded-full border border-orange-500/20 px-5 py-2">
        <span className="relative flex h-3 w-3">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
          <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500" />
        </span>

        <Sparkles
          size={16}
          className="text-orange-500"
        />

        <span className="text-sm font-medium">
          Available for Internships & Full-Time Roles
        </span>
      </div>

      {/* Heading */}

      <h2 className="heading mt-8 max-w-4xl text-[clamp(2.2rem,5vw,4rem)]">
        Let&apos;s Build the Next Great Product Together.
      </h2>

      {/* Description */}

      <p className="subheading mt-6 max-w-3xl leading-8">
        I&apos;m passionate about creating scalable software, intelligent
        applications, and meaningful user experiences. Whether it's a
        Software Engineering internship, Full Stack role, or AI-driven
        product, I'm always excited to collaborate on challenging problems.
      </p>

      {/* Quick Stats */}

      <div className="mt-10 grid gap-5 md:grid-cols-3">

        <div className="glass rounded-2xl border border-white/10 p-5">
          <BriefcaseBusiness className="mb-4 text-orange-500" size={26} />

          <h3 className="text-3xl font-bold">Open</h3>

          <p className="mt-2 text-sm text-zinc-400">
            Internship Opportunities
          </p>
        </div>

        <div className="glass rounded-2xl border border-white/10 p-5">
          <Mail className="mb-4 text-orange-500" size={26} />

          <h3 className="text-3xl font-bold">24h</h3>

          <p className="mt-2 text-sm text-zinc-400">
            Average Response Time
          </p>
        </div>

        <div className="glass rounded-2xl border border-white/10 p-5">
          <Sparkles className="mb-4 text-orange-500" size={26} />

          <h3 className="text-3xl font-bold">100%</h3>

          <p className="mt-2 text-sm text-zinc-400">
            Commitment & Dedication
          </p>
        </div>

      </div>

      {/* Buttons */}

      <div className="mt-12 flex flex-col gap-4 sm:flex-row">

        <motion.div
          whileHover={{
            scale: 1.03,
          }}
          whileTap={{
            scale: 0.97,
          }}
        >
          <Link
            href={aboutData.resume}
            download
            className="
              inline-flex
              items-center
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
            <Download size={18} />
            Download Resume
          </Link>
        </motion.div>

        <motion.div
          whileHover={{
            scale: 1.03,
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
              gap-3
              rounded-full
              border
              border-white/10
              px-8
              py-4
              font-semibold
              transition-all
              duration-300
              hover:border-orange-500
              hover:text-orange-400
            "
          >
            Let's Connect
            <ArrowRight size={18} />
          </Link>
        </motion.div>

      </div>

      {/* Divider */}

      <div className="my-12 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Roles */}

      <div className="flex flex-wrap gap-4">
        {roles.map((role) => (
          <span
            key={role}
            className="
              rounded-full
              border
              border-white/10
              bg-white/5
              px-5
              py-3
              text-sm
              text-zinc-300
              transition-all
              duration-300
              hover:border-orange-500/40
              hover:bg-orange-500/10
            "
          >
            {role}
          </span>
        ))}
      </div>
    </motion.section>
  );
}