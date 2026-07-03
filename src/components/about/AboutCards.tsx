"use client";

import { motion } from "framer-motion";

import { aboutCards } from "@/constants/about";

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

export default function AboutCards() {
  return (
    <section className="mt-24">

      {/* Heading */}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{
          once: true,
        }}
        className="mx-auto max-w-3xl text-center"
      >
        <h2 className="heading text-3xl md:text-4xl">
          What I Build
        </h2>

        <p className="subheading mt-5 leading-8">
          My expertise spans modern web development, scalable backend systems,
          artificial intelligence, and efficient problem solving.
        </p>
      </motion.div>

      {/* Cards */}

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{
          once: true,
          amount: 0.2,
        }}
        className="mt-16 grid gap-8 md:grid-cols-2"
      >
        {aboutCards.map((card) => {
          const Icon = card.icon;

          return (
            <motion.div
              key={card.title}
              variants={cardVariants}
              whileHover={{
                y: -10,
              }}
              transition={{
                duration: 0.25,
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
              {/* Background Glow */}

              <div
                className="
                  absolute
                  -right-20
                  -top-20
                  h-52
                  w-52
                  rounded-full
                  bg-orange-500/10
                  opacity-0
                  blur-3xl
                  transition-all
                  duration-500
                  group-hover:opacity-100
                "
              />

              {/* Icon */}

              <motion.div
                whileHover={{
                  rotate: 8,
                  scale: 1.08,
                }}
                className="
                  relative
                  z-10

                  flex
                  h-20
                  w-20

                  items-center
                  justify-center

                  rounded-3xl

                  bg-orange-500/10

                  text-orange-500
                "
              >
                <Icon size={34} />
              </motion.div>

              {/* Title */}

              <h3 className="relative z-10 mt-8 text-2xl font-semibold">
                {card.title}
              </h3>

              {/* Divider */}

              <div className="relative z-10 mt-5 h-[2px] w-16 rounded-full bg-orange-500" />

              {/* Description */}

              <p
                className="
                  relative
                  z-10

                  mt-6

                  leading-8

                  text-zinc-400
                "
              >
                {card.description}
              </p>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}