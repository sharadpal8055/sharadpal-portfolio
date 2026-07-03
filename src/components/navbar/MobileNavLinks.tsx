"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { navLinks } from "@/constants/navLinks";

interface MobileNavLinksProps {
  activeSection: string;
  onNavigate?: () => void;
}

const containerVariants = {
  hidden: {},

  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    x: 30,
  },

  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.35,
    },
  },
};

export default function MobileNavLinks({
  activeSection,
  onNavigate,
}: MobileNavLinksProps) {
  return (
    <motion.nav
      aria-label="Mobile Navigation"
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="mt-10 flex flex-col gap-2"
    >
      {navLinks.map((item) => {
        const Icon = item.icon;

        const active = activeSection === item.id;

        return (
          <motion.div key={item.id} variants={itemVariants}>
            <Link
              href={item.href}
              onClick={onNavigate}
              aria-current={active ? "page" : undefined}
              className={`group flex items-center gap-4 rounded-2xl px-5 py-4 transition-all duration-300 ${
                active
                  ? "bg-orange-500/10 text-orange-500"
                  : "text-zinc-300 hover:bg-white/5 hover:text-white"
              } `}
            >
              <Icon
                size={20}
                className={`transition-colors ${
                  active
                    ? "text-orange-500"
                    : "text-zinc-500 group-hover:text-orange-400"
                } `}
              />

              <span className="text-lg font-medium">{item.label}</span>
            </Link>
          </motion.div>
        );
      })}
    </motion.nav>
  );
}
