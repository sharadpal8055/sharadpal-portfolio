"use client";

import { motion } from "framer-motion";
//import { TypeAnimation } from "react-type-animation";
import { MapPin, Sparkles } from "lucide-react";

import { heroData } from "@/constants/hero";

import HeroButtons from "./HeroButtons";
import HeroSocials from "./HeroSocials";
import HeroStats from "./HeroStats";

/* -------------------------------------------------------------------------- */
/*                             Motion Variants                                */
/* -------------------------------------------------------------------------- */

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },

  show: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.6,
      
    },
  },
};

export default function HeroContent() {
  return (
    <div className="max-w-3xl">
      {/* ------------------------------------------------------------------ */}
      {/* Availability Badge */}
      {/* ------------------------------------------------------------------ */}
      <motion.div variants={itemVariants} className="mb-8">
        <div className="glass inline-flex flex-wrap items-center gap-3 rounded-full border border-orange-500/20 px-5 py-2">
          <span className="relative flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />

            <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500" />
          </span>

          <Sparkles size={16} className="text-orange-500" />

          <span className="text-sm font-medium">{heroData.availability}</span>
        </div>
      </motion.div>
      {/* ------------------------------------------------------------------ */}
      {/* Greeting */}
      {/* ------------------------------------------------------------------ */}

      <motion.p
        variants={itemVariants}
        className="mb-4 text-lg font-medium text-orange-400"
      >
        {heroData.greeting}
      </motion.p>
      {/* ------------------------------------------------------------------ */}
      {/* Name */}
      {/* ------------------------------------------------------------------ */}
      <motion.h1
        id="hero-heading"
        variants={itemVariants}
        className="heading text-[clamp(3rem,7vw,6rem)] leading-none tracking-tight"
      >
        {heroData.name}
      </motion.h1>
      {/* ------------------------------------------------------------------ */}
      {/* Animated Roles */}
      {/* ------------------------------------------------------------------ */}
      <motion.div
        variants={itemVariants}
        className="text-gradient mt-5 min-h-[56px] text-[clamp(1.4rem,3vw,2.2rem)] font-semibold"
      >
        <span>{heroData.roles[0]}</span>
      </motion.div>
      {/* ------------------------------------------------------------------ */}
      {/* Description */}
      {/* ------------------------------------------------------------------ */}
      <motion.p
        variants={itemVariants}
        className="subheading mt-8 max-w-xl leading-8 2xl:max-w-2xl"
      >
        {heroData.description}
      </motion.p>
      {/* ------------------------------------------------------------------ */}
      {/* CTA Buttons */}
      {/* ------------------------------------------------------------------ */}
      <motion.div variants={itemVariants}>
        <HeroButtons />
      </motion.div>
      {/* ------------------------------------------------------------------ */}
      {/* Location */}
      {/* ------------------------------------------------------------------ */}
      <motion.div
        variants={itemVariants}
        className="mt-8 flex flex-wrap items-center gap-3 text-sm text-zinc-400"
      >
        <MapPin size={18} className="text-orange-500" />

        <span>{heroData.location}</span>
      </motion.div>
      {/* ------------------------------------------------------------------ */}
      {/* Social Links */}
      {/* ------------------------------------------------------------------ */}
      <motion.div variants={itemVariants}>
        <HeroSocials />
      </motion.div>
      {/* ------------------------------------------------------------------ */}
      {/* Stats */}
      {/* ------------------------------------------------------------------ */}
      <motion.div variants={itemVariants}>
        <HeroStats />
      </motion.div>
    </div>
  );
}
