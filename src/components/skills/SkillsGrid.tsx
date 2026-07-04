"use client";

import { motion } from "framer-motion";

import { skillCategories } from "@/constants/skills";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },

  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function SkillsGrid() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{
        once: true,
        amount: 0.15,
      }}
      className="mt-24 grid gap-8 lg:grid-cols-2"
    >
      {skillCategories.map((category) => {
        const CategoryIcon = category.icon;

        return (
          <motion.div
            key={category.id}
            variants={cardVariants}
            whileHover={{
              y: -8,
            }}
            className="
              group
              glass
              relative
              overflow-hidden
              rounded-[30px]
              border
              border-white/10
              p-8
              transition-all
              duration-300
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
                blur-[90px]
                opacity-0
                transition-opacity
                duration-500
                group-hover:opacity-100
              "
            />

            {/* Header */}

            <div className="relative flex items-start gap-5">
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
                <CategoryIcon size={30} />
              </div>

              <div className="flex-1">
                <h3 className="text-2xl font-bold">
                  {category.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-zinc-400">
                  {category.description}
                </p>
              </div>
            </div>

            {/* Experience */}

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full bg-orange-500/10 px-4 py-2 text-sm font-medium text-orange-400">
                {category.experience}
              </span>

              <span className="rounded-full bg-white/5 px-4 py-2 text-sm text-zinc-300">
                {category.projects}
              </span>
            </div>

            {/* Technologies */}

            <div className="mt-8 grid grid-cols-2 gap-4">
              {category.technologies.map((tech) => {
                const TechIcon = tech.icon;

                return (
                  <motion.div
                    key={tech.name}
                    whileHover={{
                      scale: 1.05,
                    }}
                    whileTap={{
                      scale: 0.98,
                    }}
                    className="
                      flex
                      items-center
                      gap-3
                      rounded-2xl
                      border
                      border-white/10
                      bg-white/5
                      px-4
                      py-3
                      transition-all
                      duration-300
                      hover:border-orange-500/40
                      hover:bg-orange-500/5
                    "
                  >
                    <TechIcon
                      className={`${tech.color} text-xl shrink-0`}
                    />

                    <span className="text-sm font-medium text-zinc-200">
                      {tech.name}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
}