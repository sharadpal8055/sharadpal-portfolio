"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { navLinks } from "@/constants/navLinks";

interface NavLinksProps {
  activeSection?: string;
}

export default function NavLinks({
  activeSection = "home",
}: NavLinksProps) {
  return (
    <nav
      aria-label="Primary Navigation"
    className="
hidden
xl:flex

items-center

gap-1
2xl:gap-2
"
    >
      {navLinks.map((item) => {
        const isActive = activeSection === item.id;

        return (
          <motion.div
            key={item.id}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.96 }}
            className="relative"
          >
            <Link
              href={item.href}
              aria-current={isActive ? "page" : undefined}
              className={`
                group
                relative
                flex
                items-center
                gap-2
                rounded-full
                px-5
                py-2.5
                text-sm
                font-medium
                transition-all
                duration-300

                ${
                  isActive
                    ? "text-orange-500"
                    : "text-zinc-300 hover:text-white"
                }
              `}
            >
              {/* Icon */}
              <item.icon
                size={16}
                className={`
                  transition-colors
                  duration-300

                  ${
                    isActive
                      ? "text-orange-500"
                      : "text-zinc-400 group-hover:text-orange-500"
                  }
                `}
              />

              {/* Label */}
              <span>{item.label}</span>

              {/* Animated Underline */}
              {isActive && (
                <motion.span
                  layoutId="navbar-indicator"
                  className="
                    absolute
                    -bottom-1
                    left-4
                    right-4
                    h-[2px]
                    rounded-full
                    bg-orange-500
                  "
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 30,
                  }}
                />
              )}
            </Link>
          </motion.div>
        );
      })}
    </nav>
  );
}