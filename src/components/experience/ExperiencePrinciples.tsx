"use client";

import { motion } from "framer-motion";

import { experiencePrinciples } from "@/constants/experience";

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

export default function ExperiencePrinciples() {
  return (
    <section className="mt-32">
      {/* ------------------------------------------------------------ */}
      {/* Header */}
      {/* ------------------------------------------------------------ */}

      <motion.div
        initial={{
          opacity: 0,
          y: 30,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        className="mx-auto max-w-3xl text-center"
      >
        <h2 className="heading text-4xl">
          Engineering Principles
        </h2>

        <p className="subheading mt-5">
          The values that guide how I approach software
          engineering, collaboration, and continuous growth.
        </p>
      </motion.div>

      {/* ------------------------------------------------------------ */}
      {/* Cards */}
      {/* ------------------------------------------------------------ */}

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{
          once: true,
          amount: 0.15,
        }}
        className="
          mt-20

          grid

          gap-8

          md:grid-cols-2
        "
      >
        {experiencePrinciples.map((item) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.title}
              variants={cardVariants}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              transition={{
                type: "spring",
                stiffness: 260,
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

                  -right-16

                  -top-16

                  h-40

                  w-40

                  rounded-full

                  bg-orange-500/10

                  blur-[90px]

                  opacity-0

                  transition-all

                  duration-500

                  group-hover:opacity-100
                "
              />

              {/* Icon */}

              <div
                className="
                  mb-6

                  flex

                  h-16

                  w-16

                  items-center

                  justify-center

                  rounded-2xl

                  bg-orange-500/10

                  text-orange-500

                  transition-transform

                  duration-300

                  group-hover:scale-110

                  group-hover:rotate-6
                "
              >
                <Icon size={30} />
              </div>

              {/* Title */}

              <h3 className="text-2xl font-bold">
                {item.title}
              </h3>

              {/* Description */}

              <p className="mt-5 leading-8 text-zinc-400">
                {item.description}
              </p>

              {/* Bottom Accent */}

              <div
                className="
                  mt-8

                  h-[2px]

                  w-full

                  rounded-full

                  bg-gradient-to-r

                  from-orange-500

                  via-orange-300/40

                  to-transparent
                "
              />
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}