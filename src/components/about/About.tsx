"use client";

import { motion } from "framer-motion";

import AboutContent from "./AboutContent";
import AboutImage from "./AboutImage";

const containerVariants = {
  hidden: {},

  show: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.15,
    },
  },
};

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative overflow-hidden section-padding"
    >
      {/* Background */}

      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="noise absolute inset-0" />

      <div className="absolute -left-48 top-20 h-[500px] w-[500px] rounded-full bg-orange-500/10 blur-[140px]" />

      <div className="absolute right-0 bottom-0 h-[400px] w-[400px] rounded-full bg-orange-400/10 blur-[140px]" />

      {/* Content */}

      <motion.div
        variants={containerVariants}
        initial="show"
        whileInView="show"
        viewport={{
          once: true,
          amount: 0.15,
          margin: "-100px 0px",
        }}
        className="container-width relative z-10 flex flex-col items-center"
      >
        {/* Profile Image */}
{/* 
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          viewport={{
            once: true,
          }}
          className="mb-20"
        >
          <AboutImage />
        </motion.div> */}

        {/* About Content */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.15,
          }}
          viewport={{
            once: true,
          }}
          className="w-full"
        >
          <AboutContent />
        </motion.div>
      </motion.div>
    </section>
  );
}