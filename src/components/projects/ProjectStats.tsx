"use client";

import CountUp from "react-countup";
import { motion } from "framer-motion";

import { projectStats } from "@/constants/projects";

/* -------------------------------------------------------------------------- */
/*                              Motion Variants                               */
/* -------------------------------------------------------------------------- */

const containerVariants = {
  hidden: {},

  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
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
/*                              Project Stats                                 */
/* -------------------------------------------------------------------------- */


export default function ProjectStats() {
  return (
    <motion.div

      variants={containerVariants}

      initial="hidden"

      whileInView="show"

      viewport={{
        once: true,
        amount: 0.2,
      }}

      className="
        mt-24

        grid

        gap-6

        sm:grid-cols-2

        xl:grid-cols-4
      "
    >

      {projectStats.map((stat) => {

        const Icon = stat.icon;


        const number = Number(
          String(stat.value).replace(/[^0-9]/g, "")
        );


        const suffix =
          String(stat.value).replace(/[0-9]/g, "");



        return (

          <motion.div

            key={stat.id}

            variants={cardVariants}


            whileHover={{
              y: -10,
              scale: 1.03,
            }}


            transition={{
              type: "spring",
              stiffness: 260,
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


            {/* Glow */}


            <div
              className="
                absolute

                -right-20

                -top-20

                h-48

                w-48

                rounded-full

                bg-orange-500/10

                opacity-0

                blur-[100px]

                transition-all

                duration-500

                group-hover:opacity-100
              "
            />



            {/* Icon */}


            <div
              className="
                relative

                mb-7

                flex

                h-16

                w-16

                items-center

                justify-center

                rounded-2xl

                bg-orange-500/10

                text-orange-500

                transition-all

                duration-300

                group-hover:scale-110

                group-hover:rotate-6
              "
            >

              <Icon size={30} />

            </div>



            {/* Number */}


            <h3
              className="
                heading

                text-5xl
              "
            >

              <CountUp

                end={number}

                duration={2}

                enableScrollSpy

              />

              {suffix}

            </h3>



            {/* Label */}


            <p
              className="
                mt-4

                text-sm

                tracking-wide

                text-zinc-400
              "
            >

              {stat.label}

            </p>



            {/* Accent Line */}


            <div
              className="
                mt-8

                h-[2px]

                w-full

                rounded-full

                bg-gradient-to-r

                from-orange-500/70

                via-orange-300/30

                to-transparent
              "
            />


          </motion.div>

        );

      })}

    </motion.div>
  );
}