"use client";

import CountUp from "react-countup";
import { motion } from "framer-motion";

import { heroStats } from "@/constants/hero";

export default function HeroStats() {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.12,
            delayChildren: 1,
          },
        },
      }}
      className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4"
    >
      {heroStats.map((item) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={item.id}
            variants={{
              hidden: {
                opacity: 0,
                y: 30,
              },
              show: {
                opacity: 1,
                y: 0,
              },
            }}
            whileHover={{
              y: -8,
              scale: 1.03,
            }}
            transition={{
              type: "spring",
              stiffness: 260,
            }}
            className="glass group relative overflow-hidden rounded-3xl border border-white/10 p-6 transition-all duration-300 hover:border-orange-500/40 hover:shadow-xl hover:shadow-orange-500/20"
          >
            {/* Glow */}

            <div className="absolute top-0 right-0 h-20 w-20 rounded-full bg-orange-500/10 blur-3xl" />

            <Icon size={28} className="mb-5 text-orange-500" />

            <h3 className="heading text-4xl font-bold">
              <CountUp end={item.value} duration={2} enableScrollSpy />

              {item.suffix}
            </h3>

            <p className="mt-2 text-sm text-zinc-400">{item.label}</p>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
