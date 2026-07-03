"use client";

import { motion } from "framer-motion";

import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";
import ScrollIndicator from "./ScrollIndicator";

/* -------------------------------------------------------------------------- */
/*                             Animation Variants                             */
/* -------------------------------------------------------------------------- */

const containerVariants = {
  hidden: {},

  show: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.2,
    },
  },
};

const leftVariants = {
  hidden: {
    opacity: 0,
    x: -40,
  },

  show: {
    opacity: 1,
    x: 0,

    transition: {
      duration: 0.8,
    },
  },
};

const rightVariants = {
  hidden: {
    opacity: 0,
    scale: 0.92,
    x: 40,
  },

  show: {
    opacity: 1,
    scale: 1,
    x: 0,

    transition: {
      duration: 0.9,
      delay: 0.2,
    },
  },
};

/* -------------------------------------------------------------------------- */
/*                                   Hero                                     */
/* -------------------------------------------------------------------------- */

export default function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative isolate flex min-h-screen items-center overflow-hidden pt-28 sm:pt-32 md:pt-36 xl:pt-40"
    >
      {/* ------------------------------------------------------------------ */}
      {/* Background */}
      {/* ------------------------------------------------------------------ */}

      <HeroBackground />

      {/* ------------------------------------------------------------------ */}
      {/* Content */}
      {/* ------------------------------------------------------------------ */}

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="container-width relative z-20 grid grid-cols-1 items-center gap-16 py-12 lg:gap-20 lg:py-20 xl:grid-cols-[1.15fr_.85fr] xl:gap-24"
      >
        {/* Left */}

        <motion.div variants={leftVariants}>
          <HeroContent />
        </motion.div>

        {/* Right */}

        <motion.div
          variants={rightVariants}
          className="flex justify-center xl:justify-end"
        >
          <HeroImage />
        </motion.div>
      </motion.div>

      {/* ------------------------------------------------------------------ */}
      {/* Scroll Indicator */}
      {/* ------------------------------------------------------------------ */}

      {/* <ScrollIndicator /> */}
    </section>
  );
}
