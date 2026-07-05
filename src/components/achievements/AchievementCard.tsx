"use client";
import { motion, type Variants } from "framer-motion";

/* -------------------------------------------------------------------------- */
/*                                  Types                                     */
/* -------------------------------------------------------------------------- */

const itemVariants: Variants = {
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

type AchievementCardProps = {
  achievement: {
    id: number;

    title: string;

    category: string;

    year: string;

    description: string;

    icon: React.ElementType;

    highlights: string[];
  };
};

/* -------------------------------------------------------------------------- */
/*                             Achievement Card                               */
/* -------------------------------------------------------------------------- */

export default function AchievementCard({ achievement }: AchievementCardProps) {
  const Icon = achievement.icon;

  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.02,
      }}

      transition={{
        duration: 0.3,
      }}

      className="group glass relative overflow-hidden rounded-[32px] border border-white/10 p-8 transition-all duration-300 hover:border-orange-500/40 hover:shadow-2xl hover:shadow-orange-500/10"
    >
      {/* ------------------------------------------------------------ */}
      {/* Glow */}
      {/* ------------------------------------------------------------ */}

      <div className="absolute -top-20 -right-20 h-56 w-56 rounded-full bg-orange-500/10 opacity-0 blur-[100px] transition-all duration-500 group-hover:opacity-100" />

      {/* ------------------------------------------------------------ */}
      {/* Header */}
      {/* ------------------------------------------------------------ */}

      <div className="relative flex items-start justify-between gap-5">
        {/* Icon */}

        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-500 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
          <Icon size={30} />
        </div>

        {/* Year */}

        <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1 text-sm text-zinc-300">
          {achievement.year}
        </span>
      </div>

      {/* ------------------------------------------------------------ */}
      {/* Category */}
      {/* ------------------------------------------------------------ */}

      <div className="relative mt-8">
        <span className="rounded-full bg-orange-500/10 px-4 py-2 text-sm font-semibold text-orange-400">
          {achievement.category}
        </span>
      </div>

      {/* ------------------------------------------------------------ */}
      {/* Content */}
      {/* ------------------------------------------------------------ */}

      <h3 className="relative mt-6 text-2xl font-bold">{achievement.title}</h3>

      <p className="relative mt-5 leading-8 text-zinc-400">
        {achievement.description}
      </p>

      {/* ------------------------------------------------------------ */}
      {/* Highlights */}
      {/* ------------------------------------------------------------ */}

      <div className="relative mt-8 flex flex-wrap gap-3">
        {achievement.highlights.map((item) => (
          <motion.span
            key={item}

            whileHover={{
              scale: 1.07,
            }}

            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300 transition-all duration-300 hover:border-orange-500/40 hover:bg-orange-500/10 hover:text-orange-300"
          >
            {item}
          </motion.span>
        ))}
      </div>

      {/* ------------------------------------------------------------ */}
      {/* Bottom Accent */}
      {/* ------------------------------------------------------------ */}

      <div className="relative mt-10 h-[2px] w-full rounded-full bg-gradient-to-r from-orange-500/70 via-orange-300/20 to-transparent" />
    </motion.div>
  );
}
