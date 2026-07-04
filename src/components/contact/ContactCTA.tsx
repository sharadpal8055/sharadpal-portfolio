"use client";

import Link from "next/link";

import { motion } from "framer-motion";

import { ArrowRight, Download, Sparkles } from "lucide-react";

import { contactCTA } from "@/constants/contact";

/* -------------------------------------------------------------------------- */
/*                              Motion Variants                               */
/* -------------------------------------------------------------------------- */

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },

  show: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

/* -------------------------------------------------------------------------- */
/*                                Contact CTA                                 */
/* -------------------------------------------------------------------------- */

export default function ContactCTA() {
  return (
    <motion.div
      variants={itemVariants}

      initial="hidden"

      whileInView="show"

      viewport={{
        once: true,
        amount: 0.25,
      }}

      className="relative mt-32 overflow-hidden rounded-[40px] border border-orange-500/20 bg-gradient-to-br from-orange-500/10 via-white/[0.03] to-transparent p-10 text-center md:p-16"
    >
      {/* ---------------------------------------------------------------- */}
      {/* Background Glow */}
      {/* ---------------------------------------------------------------- */}

      <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-orange-500/20 blur-[120px]" />

      <div className="absolute -right-20 -bottom-20 h-72 w-72 rounded-full bg-orange-400/10 blur-[120px]" />

      {/* ---------------------------------------------------------------- */}
      {/* Availability Badge */}
      {/* ---------------------------------------------------------------- */}

      <div className="relative mx-auto inline-flex items-center gap-3 rounded-full border border-green-500/20 bg-green-500/10 px-6 py-3">
        <span className="h-3 w-3 animate-pulse rounded-full bg-green-400" />

        <span className="text-sm font-semibold text-green-400">
          {contactCTA.status}
        </span>
      </div>

      {/* ---------------------------------------------------------------- */}
      {/* Floating Icon */}
      {/* ---------------------------------------------------------------- */}

      <motion.div
        animate={{
          y: [0, -10, 0],
        }}

        transition={{
          duration: 3,
          repeat: Infinity,
        }}

        className="relative mx-auto mt-10 flex h-20 w-20 items-center justify-center rounded-full bg-orange-500/10 text-orange-500"
      >
        <Sparkles size={36} />
      </motion.div>

      {/* ---------------------------------------------------------------- */}
      {/* Text */}
      {/* ---------------------------------------------------------------- */}

      <h3 className="heading relative mx-auto mt-8 max-w-3xl text-[clamp(2.2rem,5vw,4rem)]">
        {contactCTA.title}
      </h3>

      <p className="subheading relative mx-auto mt-6 max-w-3xl leading-9">
        {contactCTA.description}
      </p>

      {/* ---------------------------------------------------------------- */}
      {/* Actions */}
      {/* ---------------------------------------------------------------- */}

      <div className="relative mt-10 flex flex-wrap justify-center gap-5">
        {/* Resume Button */}

        <Link
          href="/resume.pdf"

          className="group flex items-center gap-3 rounded-full bg-orange-500 px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/20"
        >
          <Download size={18} />

          {contactCTA.primary}
        </Link>

        {/* Contact Button */}

        <Link
          href="mailto:your-email@gmail.com"

          className="group flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-8 py-4 font-semibold text-zinc-300 transition-all duration-300 hover:border-orange-500/40 hover:bg-orange-500/10 hover:text-orange-300"
        >
          {contactCTA.secondary}

          <ArrowRight
            size={18}

            className="transition-transform group-hover:translate-x-1"
          />
        </Link>
      </div>
    </motion.div>
  );
}
