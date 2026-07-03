"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Logo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.6,
      }}
    >
      <Link
        href="#home"
        aria-label="Go to Home section"
      className="group flex items-center gap-3 shrink-0"
      >
        {/* Logo */}
        <motion.div
          whileHover={{
            rotate: 360,
            scale: 1.08,
          }}
          transition={{
            duration: 0.6,
          }}
          className="
          relative
          flex
         h-10 w-10
sm:h-11 sm:w-11
lg:h-12 lg:w-12
          items-center
          justify-center
          rounded-xl

          bg-gradient-to-br
          from-orange-500
          via-orange-600
          to-orange-700

          font-bold

          text-lg


          text-white

          shadow-lg

          shadow-orange-500/30
          "
        >
          SP

          <span
            className="
            absolute

            inset-0

            rounded-xl

            bg-orange-500/30

            blur-xl

            opacity-0

            transition

            duration-300

            group-hover:opacity-100
            "
          />
        </motion.div>

        {/* Text */}
        <div className="hidden sm:block">
          <motion.h2
            whileHover={{
              x: 3,
            }}
            className="
            heading

      text-lg
lg:text-xl

            font-bold

            text-gradient
            "
          >
            S h a r a d    P a l
          </motion.h2>

          <p
            className="
          hidden sm:block text-[11px]

            tracking-widest

            uppercase

            text-zinc-400
            "
          >
            Full Stack AI Developer
          </p>
        </div>
      </Link>
    </motion.div>
  );
}