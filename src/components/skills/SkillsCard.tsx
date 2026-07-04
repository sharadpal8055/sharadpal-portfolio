"use client";

import { motion } from "framer-motion";

import SkillPill from "./SkillPill";

type Technology = {
  name: string;
  icon: React.ElementType;
  color: string;
};

type SkillsCardProps = {
  title: string;
  description: string;
  icon: React.ElementType;
  experience: string;
  projects: string;
  technologies: Technology[];
};

export default function SkillsCard({
  title,
  description,
  icon: Icon,
  experience,
  projects,
  technologies,
}: SkillsCardProps) {
  return (
    <motion.article
      whileHover={{
        y: -8,
      }}
      transition={{
        duration: 0.3,
      }}
      className="
        group
        glass
        relative
        overflow-hidden
        rounded-[32px]
        border
        border-white/10
        p-8
        transition-all
        duration-500
        hover:border-orange-500/40
        hover:shadow-2xl
        hover:shadow-orange-500/10
      "
    >
      {/* Glow */}

      <div
        className="
          absolute
          -right-20
          -top-20
          h-56
          w-56
          rounded-full
          bg-orange-500/10
          blur-[120px]
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-100
        "
      />

      {/* Header */}

      <div className="relative z-10 flex items-start justify-between">
        <div
          className="
            flex
            h-16
            w-16
            items-center
            justify-center
            rounded-2xl
            bg-orange-500/10
            text-orange-500
          "
        >
          <Icon size={32} />
        </div>

        <div className="text-right">
          <span
            className="
              rounded-full
              bg-orange-500/10
              px-3
              py-1
              text-xs
              font-semibold
              text-orange-400
            "
          >
            {experience}
          </span>

          <p className="mt-3 text-sm text-zinc-500">
            {projects}
          </p>
        </div>
      </div>

      {/* Title */}

      <h3 className="mt-8 text-2xl font-bold">
        {title}
      </h3>

      {/* Description */}

      <p className="mt-4 leading-7 text-zinc-400">
        {description}
      </p>

      {/* Divider */}

      <div className="my-8 h-px bg-white/10" />

      {/* Technologies */}

      <div className="flex flex-wrap gap-3">
        {technologies.map((tech) => (
          <SkillPill
            key={tech.name}
            icon={tech.icon}
            name={tech.name}
            color={tech.color}
          />
        ))}
      </div>
    </motion.article>
  );
}