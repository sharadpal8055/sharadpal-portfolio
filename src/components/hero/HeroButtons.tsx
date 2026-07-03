"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

import Link from "next/link";

export default function HeroButtons() {
  const scrollToContact = () => {
    const section = document.getElementById("contact");

    if (!section) return;

    window.scrollTo({
      top: section.offsetTop - 90,
      behavior: "smooth",
    });
  };

  return (
    <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
      {/* Hire Me */}

      <motion.button
        whileHover={{
          scale: 1.04,
          y: -2,
        }}
        whileTap={{
          scale: 0.96,
        }}
        onClick={scrollToContact}
        className="group inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 px-8 py-4 font-semibold text-white shadow-lg shadow-orange-500/30 transition-all duration-300 hover:shadow-orange-500/50 focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-[#050505] focus:outline-none"
      >
        Hire Me
        <motion.div
          animate={{
            x: [0, 4, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.6,
          }}
        >
          <ArrowRight size={18} />
        </motion.div>
      </motion.button>

      {/* Resume */}

      <motion.div
        whileHover={{
          scale: 1.03,
        }}
        whileTap={{
          scale: 0.96,
        }}
      >
        <Link
          href="/resume.pdf"
          download
          className="glass inline-flex w-full items-center justify-center gap-3 rounded-full border border-white/10 px-8 py-4 font-medium transition-all duration-300 hover:border-orange-500 hover:text-orange-400 hover:shadow-lg hover:shadow-orange-500/20 focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-[#050505] focus:outline-none sm:w-auto"
        >
          <Download size={18} />
          Download Resume
        </Link>
      </motion.div>
    </div>
  );
}
