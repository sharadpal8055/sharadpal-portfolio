"use client";

import { motion } from "framer-motion";

import { experienceTimeline } from "@/constants/experience";

const containerVariants = {
  hidden: {},

  show: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 60,
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

export default function ExperienceTimeline() {
  return (
    <section className="mt-32">
      {/* ---------------------------------------------------------------- */}
      {/* Heading */}
      {/* ---------------------------------------------------------------- */}

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
          Career Timeline
        </h2>

        <p className="subheading mt-5">
          Every milestone represents continuous learning,
          impactful engineering work, and steady professional
          growth.
        </p>
      </motion.div>

      {/* ---------------------------------------------------------------- */}
      {/* Timeline */}
      {/* ---------------------------------------------------------------- */}

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{
          once: true,
          amount: 0.15,
        }}
        className="
          relative

          mx-auto

          mt-20

          max-w-6xl
        "
      >
        {/* Center Line */}

        <div
          className="
            absolute

            left-1/2

            hidden

            h-full

            w-[2px]

            -translate-x-1/2

            bg-gradient-to-b

            from-orange-500

            via-orange-400/40

            to-transparent

            lg:block
          "
        />

        {/* Mobile Line */}

        <div
          className="
            absolute

            left-6

            top-0

            h-full

            w-[2px]

            bg-gradient-to-b

            from-orange-500

            via-orange-400/40

            to-transparent

            lg:hidden
          "
        />

        {experienceTimeline.map((item, index) => {
          const Icon = item.icon;

          const left = index % 2 === 0;

          return (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className={`
                relative

                mb-16

                flex

                w-full

                ${
                  left
                    ? "lg:justify-start"
                    : "lg:justify-end"
                }
              `}
            >
              {/* Timeline Node */}

              <div
                className="
                  absolute

                  left-6

                  top-10

                  z-20

                  flex

                  h-14

                  w-14

                  items-center

                  justify-center

                  rounded-full

                  border

                  border-orange-500/30

                  bg-[#0b0b0b]

                  text-orange-500

                  shadow-xl

                  shadow-orange-500/20

                  lg:left-1/2

                  lg:-translate-x-1/2
                "
              >
                <Icon size={24} />
              </div>

              {/* Card */}

              <motion.div
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                className={`
                  glass

                  ml-24

                  w-full

                  rounded-[30px]

                  border

                  border-white/10

                  p-8

                  transition-all

                  duration-300

                  hover:border-orange-500/40

                  hover:shadow-2xl

                  hover:shadow-orange-500/10

                  lg:ml-0

                  lg:w-[44%]
                `}
              >
                {/* Year + Type */}

                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-orange-500/10 px-4 py-1 text-sm font-semibold text-orange-400">
                    {item.year}
                  </span>

                  <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1 text-sm text-zinc-300">
                    {item.type}
                  </span>
                </div>

                {/* Role */}

                <h3 className="mt-6 text-2xl font-bold">
                  {item.role}
                </h3>

                {/* Company */}

                <p className="mt-2 font-medium text-orange-400">
                  {item.company}
                </p>

                {/* Description */}

                <p className="mt-6 leading-8 text-zinc-400">
                  {item.description}
                </p>

                {/* Achievements */}

                <div className="mt-8 flex flex-wrap gap-3">
                  {item.achievements.map((achievement) => (
                    <motion.span
                      key={achievement}
                      whileHover={{
                        scale: 1.06,
                      }}
                      className="
                        rounded-full

                        border

                        border-white/10

                        bg-white/5

                        px-4

                        py-2

                        text-sm

                        text-zinc-300

                        transition-all

                        duration-300

                        hover:border-orange-500/40

                        hover:bg-orange-500/10

                        hover:text-orange-300
                      "
                    >
                      {achievement}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}