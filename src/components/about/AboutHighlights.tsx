"use client";

import { motion } from "framer-motion";
import { aboutHighlights } from "@/constants/about";

const containerVariants = {
  hidden: {},

  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.95,
  },

  show: {
    opacity: 1,
    y: 0,
    scale: 1,

    transition: {
      duration: 0.4,
    },
  },
};

function CategoryCard({
  title,
  description,
  items,
}: {
  title: string;
  description: string;
  items: typeof aboutHighlights.technical;
}) {
  return (
    <motion.div
      variants={itemVariants}
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
          -right-24
          -top-24
          h-56
          w-56
          rounded-full
          bg-orange-500/10
          opacity-0
          blur-3xl
          transition-all
          duration-500
          group-hover:opacity-100
        "
      />

      <div className="relative z-10">
        <h3 className="text-2xl font-semibold">
          {title}
        </h3>

        <p className="mt-3 leading-7 text-zinc-400">
          {description}
        </p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
          }}
          className="mt-8 flex flex-wrap gap-4"
        >
          {items.map((item) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                variants={itemVariants}
                whileHover={{
                  scale: 1.06,
                  y: -4,
                }}
                whileTap={{
                  scale: 0.96,
                }}
                className="
                  flex
                  items-center
                  gap-3

                  rounded-full

                  border
                  border-white/10

                  bg-white/5

                  px-5
                  py-3

                  transition-all
                  duration-300

                  hover:border-orange-500/40
                  hover:bg-orange-500/10
                "
              >
                <div
                  className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-full
                    bg-orange-500/10
                  "
                >
                  <Icon
                    size={18}
                    className="text-orange-500"
                  />
                </div>

                <span className="font-medium text-zinc-200">
                  {item.title}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function AboutHighlights() {
  return (
    <section className="mt-28">

      {/* Heading */}

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
          Core Strengths
        </h2>

        <p className="subheading mt-5 leading-8">
          Beyond technical skills, I value continuous learning,
          collaboration, and writing software that creates real-world impact.
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
        className="mt-16 grid gap-8 lg:grid-cols-2"
      >
        <CategoryCard
          title="Technical Expertise"
          description="Technologies and engineering skills I use to design, build and deploy scalable applications."
          items={aboutHighlights.technical}
        />
        <CategoryCard
          title="Core Fundamentals"
          description="Solid understanding of essential CS principles including algorithms, databases, operating systems, networking, and software design fundamentals."
          items={aboutHighlights.coreCS}
        />

        <CategoryCard
          title="Professional Qualities"
          description="Personal attributes that help me collaborate effectively, learn quickly and contribute to high-performing teams."
          items={aboutHighlights.professional}
        />
      </motion.div>
    </section>
  );
}