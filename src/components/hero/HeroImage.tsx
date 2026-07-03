"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import HeroImageFrame from "./HeroImageFrame";
import TechBadge from "./TechBadge";

import { heroTechStack } from "@/constants/hero";

export default function HeroImage() {
  return (
    <motion.div
      animate={{
        y: [0, -12, 0],
        x: [0, 4, 0],
        rotate: [0, 5, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="relative mx-auto aspect-square w-[280px] sm:w-[340px] md:w-[380px] lg:w-[420px] xl:w-[500px]"
    >
      {/* Glow */}

      <div className="absolute inset-0 rounded-full bg-orange-500/20 blur-[100px]" />

      <HeroImageFrame />

      {/* Image */}

      <div className="relative h-full w-full overflow-hidden rounded-full border-4 border-orange-500/40 bg-black">
        <Image
          src="/images/profile.webp"
          alt="Sharad Pal"
          fill
          priority
          sizes="(max-width: 768px) 280px, (max-width: 1024px) 340px, (max-width: 1280px) 420px, 500px"
          className="object-cover"
        />
      </div>

      {/* Floating Badges */}

      {heroTechStack.map((tech) => (
        <TechBadge key={tech.id} {...tech} />
      ))}
    </motion.div>
  );
}
