"use client";

import { motion } from "framer-motion";

import { certifications } from "@/constants/achievements";

/* -------------------------------------------------------------------------- */
/*                              Motion Variants                               */
/* -------------------------------------------------------------------------- */

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
      ease: "easeOut",
    },
  },
};

/* -------------------------------------------------------------------------- */
/*                              Certifications                                */
/* -------------------------------------------------------------------------- */

export default function Certifications() {
  return (
    <section className="mt-32">
      {/* -------------------------------------------------------------- */}
      {/* Header */}
      {/* -------------------------------------------------------------- */}

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

        transition={{
          duration: 0.6,
        }}

        className="mx-auto max-w-3xl text-center"
      >
        <h3 className="heading text-[clamp(2.2rem,5vw,4rem)]">
          Learning & Certifications
        </h3>

        <p className="subheading mx-auto mt-6 max-w-2xl leading-8">
          Continuous improvement through structured learning, practical
          implementation, and professional development.
        </p>
      </motion.div>

      {/* -------------------------------------------------------------- */}
      {/* Certification Cards */}
      {/* -------------------------------------------------------------- */}

      <motion.div
        variants={containerVariants}

        initial="hidden"

        whileInView="show"

        viewport={{
          once: true,
          amount: 0.2,
        }}

        className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        {certifications.map((item) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.id}

              variants={cardVariants}

              whileHover={{
                y: -10,
                scale: 1.04,
              }}

              transition={{
                duration: 0.3,
              }}

              className="glass group relative overflow-hidden rounded-[28px] border border-white/10 p-7 text-center transition-all duration-300 hover:border-orange-500/40 hover:shadow-xl hover:shadow-orange-500/10"
            >
              {/* Glow */}

              <div className="absolute -top-16 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-orange-500/10 opacity-0 blur-[80px] transition-all duration-500 group-hover:opacity-100" />

              {/* Icon */}

              <div className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-500 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                <Icon size={30} />
              </div>

              {/* Content */}

              <h4 className="relative mt-6 text-xl font-bold">{item.title}</h4>

              <p className="relative mt-3 text-sm text-zinc-400">
                {item.provider}
              </p>

              {/* Verified */}

              <div className="relative mx-auto mt-6 inline-flex rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-2 text-sm font-medium text-orange-400">
                Verified Learning
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
