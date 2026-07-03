"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Download } from "lucide-react";

import { cn } from "@/lib/utils";

interface ResumeButtonProps {
  href?: string;
  mobile?: boolean;
  className?: string;
  onClick?: () => void;
}

export default function ResumeButton({
  href = "/resume.pdf",
  mobile = false,
  className,
  onClick,
}: ResumeButtonProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.96 }}
      className={cn(mobile && "w-full")}
    >
      <Link
        href={href}
        download
        onClick={onClick}
        aria-label="Download Resume"
        className={cn(
          `"shrink-0",
          inline-flex
          items-center
          justify-center
          gap-2

          rounded-full

          bg-orange-500

          px-5
          py-3

          font-medium
          text-white

          shadow-lg
          shadow-orange-500/30

          transition-all
          duration-300

          hover:bg-orange-600
          hover:shadow-orange-500/50

          focus:outline-none
          focus:ring-2
          focus:ring-orange-500
          focus:ring-offset-2
          focus:ring-offset-black
          compact
? "px-3 py-2 text-sm gap-1"
: "px-5 py-3 gap-2"
          `,
          mobile && "w-full rounded-2xl py-4 text-lg",
          className
        )}
      >
        <Download size={18} />

        <span>Download Resume</span>
      </Link>
    </motion.div>
  );
}