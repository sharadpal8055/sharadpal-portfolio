"use client";

import { motion } from "framer-motion";

import { socialLinks } from "@/constants/socials";
import { cn } from "@/lib/utils";

interface SocialLinksProps {
  direction?: "row" | "column";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
}

export default function SocialLinks({
  direction = "row",
  size = "md",
  className,
  onClick,
}: SocialLinksProps) {
  const iconSize = {
    sm: 18,
    md: 20,
    lg: 24,
  };

  return (
    <div
      className={cn(
        "flex gap-4",
        direction === "column" ? "flex-col" : "flex-row",
        className
      )}
    >
      {socialLinks.map((item) => {
        const Icon = item.icon;

        return (
          <motion.a
            key={item.id}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.label}
            onClick={onClick}
            whileHover={{
              scale: 1.12,
              y: -4,
            }}
            whileTap={{
              scale: 0.92,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 18,
            }}
            className="
              glass

              flex
              h-12
              w-12

              items-center
              justify-center

              rounded-full

              border
              border-white/10

              text-zinc-300

              transition-all
              duration-300

              hover:border-orange-500
              hover:bg-orange-500/10
              hover:text-orange-500
              hover:shadow-lg
              hover:shadow-orange-500/30

              focus:outline-none
              focus:ring-2
              focus:ring-orange-500
              focus:ring-offset-2
              focus:ring-offset-black
            "
          >
            <Icon size={iconSize[size]} />
          </motion.a>
        );
      })}
    </div>
  );
}