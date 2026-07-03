"use client";

import { motion } from "framer-motion";
import { aboutTimeline } from "@/constants/about";

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
    x: -40,
  },

  show: {
    opacity: 1,
    x: 0,

    transition: {
      duration: 0.6,
    },
  },
};

export default function AboutTimeline() {
  return (
    <section className="mt-28">

      {/* Section Heading */}

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
        <h2 className="heading text-3xl md:text-4xl">
          My Journey
        </h2>

        <p className="subheading mt-5 leading-8">
          Every project, challenge, and milestone has contributed to my
          growth as a software engineer.
        </p>
      </motion.div>

      {/* Timeline */}

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{
          once: true,
          amount: 0.2,
        }}
        className="relative mx-auto mt-20 max-w-5xl"
      >
        {/* Vertical Line */}

        <div
          className="
            absolute

            left-6
            top-0
            bottom-0

            w-[3px]

            rounded-full

            bg-gradient-to-b

            from-orange-500

            via-orange-400

            to-transparent
          "
        />

        {aboutTimeline.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="relative mb-14 flex gap-8 last:mb-0"
            >
              {/* Timeline Icon */}

              <motion.div
                whileHover={{
                  scale: 1.12,
                  rotate: 8,
                }}
                className="
                  relative
                  z-10

                  flex

                  h-14
                  w-14

                  shrink-0

                  items-center
                  justify-center

                  rounded-full

                  border

                  border-orange-500/30

                  bg-[#0f0f0f]

                  text-orange-500

                  shadow-lg

                  shadow-orange-500/20
                "
              >
                <Icon size={24} />
              </motion.div>

              {/* Card */}

              <motion.div
                whileHover={{
                  y: -6,
                }}
                transition={{
                  duration: 0.25,
                }}
                className="
                  group

                  glass

                  relative

                  flex-1

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

                    -right-24
                    -top-24

                    h-60
                    w-60

                    rounded-full

                    bg-orange-500/10

                    opacity-0

                    blur-3xl

                    transition-all

                    duration-500

                    group-hover:opacity-100
                  "
                />

                {/* Number */}

                <span
                  className="
                    absolute

                    right-8
                    top-8

                    text-5xl

                    font-bold

                    text-white/5
                  "
                >
                  0{index + 1}
                </span>

                {/* Year */}

                <span
                  className="
                    inline-flex

                    items-center

                    rounded-full

                    border

                    border-orange-500/20

                    bg-orange-500/10

                    px-4

                    py-2

                    text-sm

                    font-semibold

                    text-orange-400
                  "
                >
                  {item.year ?? "Present"}
                </span>

                {/* Title */}

                <h3
                  className="
                    mt-6

                    text-2xl

                    font-semibold

                    text-white
                  "
                >
                  {item.title}
                </h3>

                {/* Divider */}

                <div className="mt-5 h-[2px] w-20 rounded-full bg-orange-500" />

                {/* Description */}

                <p
                  className="
                    mt-6

                    leading-8

                    text-zinc-400
                  "
                >
                  {item.description}
                </p>
              </motion.div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}