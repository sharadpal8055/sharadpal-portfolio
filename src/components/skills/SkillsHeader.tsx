"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

import { skillsSection } from "@/constants/skills";

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
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

export default function SkillsHeader() {
  return (
    <div className="mx-auto max-w-5xl text-center">

      {/* Badge */}

      <motion.div
        variants={itemVariants}
        className="flex justify-center"
      >
        <span
          className="
            glass

            inline-flex

            items-center

            gap-3

            rounded-full

            border

            border-orange-500/20

            px-5

            py-2

            text-sm

            font-semibold

            text-orange-400
          "
        >
          <Sparkles
            size={16}
            className="text-orange-500"
          />

          {skillsSection.badge}
        </span>
      </motion.div>

      {/* Heading */}

      <motion.h2
        id="skills-heading"
        variants={itemVariants}
        className="
          heading

          mx-auto

          mt-8

          max-w-5xl

          text-center

          text-[clamp(2.8rem,6vw,5rem)]
        "
      >
        {skillsSection.heading}
      </motion.h2>

      {/* Description */}

      <motion.p
        variants={itemVariants}
        className="
          subheading

          mx-auto

          mt-8

          max-w-4xl

          leading-9
        "
      >
        {skillsSection.description}
      </motion.p>

      {/* Decorative Divider */}

      <motion.div
        variants={itemVariants}
        className="mt-14 flex justify-center"
      >
        <div
          className="
            relative

            h-[2px]

            w-48

            overflow-hidden

            rounded-full

            bg-white/10
          "
        >
          <motion.div
            animate={{
              x: ["-100%", "100%"],
            }}
            transition={{
              repeat: Infinity,
              duration: 3,
              ease: "linear",
            }}
            className="
              absolute

              inset-y-0

              w-24

              bg-gradient-to-r

              from-transparent

              via-orange-500

              to-transparent
            "
          />
        </div>
      </motion.div>
    </div>
  );
}