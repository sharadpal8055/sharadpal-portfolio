"use client";

import Link from "next/link";

import { motion } from "framer-motion";

import { ArrowRight, Sparkles } from "lucide-react";

import {
  achievementsCTA,
  achievementValues,
} from "@/constants/achievements";


/* -------------------------------------------------------------------------- */
/*                              Motion Variants                               */
/* -------------------------------------------------------------------------- */


const itemVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },

  show: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};


/* -------------------------------------------------------------------------- */
/*                             Achievements CTA                               */
/* -------------------------------------------------------------------------- */


export default function AchievementsCTA() {
  return (
    <motion.div

      variants={itemVariants}

      initial="hidden"

      whileInView="show"

      viewport={{
        once: true,
        amount: 0.2,
      }}

      className="
        relative

        mt-32

        overflow-hidden

        rounded-[40px]

        border

        border-orange-500/20

        bg-gradient-to-br

        from-orange-500/10

        via-white/[0.03]

        to-transparent

        p-10

        text-center

        md:p-16
      "
    >


      {/* -------------------------------------------------------------- */}
      {/* Background Glows */}
      {/* -------------------------------------------------------------- */}


      <div
        className="
          absolute

          -top-20

          -left-20

          h-72

          w-72

          rounded-full

          bg-orange-500/20

          blur-[120px]
        "
      />


      <div
        className="
          absolute

          -right-20

          -bottom-20

          h-72

          w-72

          rounded-full

          bg-orange-400/10

          blur-[120px]
        "
      />



      {/* -------------------------------------------------------------- */}
      {/* Floating Icon */}
      {/* -------------------------------------------------------------- */}


      <motion.div

        animate={{

          y: [
            0,
            -8,
            0,
          ],

        }}


        transition={{

          duration: 3,

          repeat: Infinity,

        }}


        className="
          relative

          mx-auto

          flex

          h-20

          w-20

          items-center

          justify-center

          rounded-full

          bg-orange-500/10

          text-orange-500
        "
      >

        <Sparkles size={36} />


      </motion.div>




      {/* -------------------------------------------------------------- */}
      {/* Main Text */}
      {/* -------------------------------------------------------------- */}


      <h3
        className="
          heading

          relative

          mx-auto

          mt-8

          max-w-3xl

          text-[clamp(2.2rem,5vw,4rem)]
        "
      >

        {achievementsCTA.title}


      </h3>



      <p
        className="
          subheading

          relative

          mx-auto

          mt-6

          max-w-3xl

          leading-9
        "
      >

        {achievementsCTA.description}


      </p>





      {/* -------------------------------------------------------------- */}
      {/* Achievement Values */}
      {/* -------------------------------------------------------------- */}


      <div
        className="
          relative

          mx-auto

          mt-12

          grid

          max-w-5xl

          gap-5

          sm:grid-cols-2

          lg:grid-cols-4
        "
      >


        {achievementValues.map((item) => {


          const Icon = item.icon;


          return (

            <motion.div

              key={item.title}


              whileHover={{

                y: -8,

                scale: 1.05,

              }}


              transition={{

                duration: 0.3,

              }}


              className="
                group

                rounded-[28px]

                border

                border-white/10

                bg-white/[0.04]

                p-6

                backdrop-blur-xl

                transition-all

                duration-300

                hover:border-orange-500/40

                hover:bg-orange-500/10

                hover:shadow-xl

                hover:shadow-orange-500/10
              "
            >


              <div
                className="
                  mx-auto

                  flex

                  h-14

                  w-14

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

                <Icon size={26} />


              </div>



              <h4
                className="
                  mt-5

                  font-semibold

                  text-zinc-200
                "
              >

                {item.title}


              </h4>


            </motion.div>

          );

        })}


      </div>






      {/* -------------------------------------------------------------- */}
      {/* Buttons */}
      {/* -------------------------------------------------------------- */}


      <div
        className="
          relative

          mt-12

          flex

          flex-wrap

          justify-center

          gap-5
        "
      >



        {/* Resume */}


        <Link

          href="/resume.pdf"


          className="
            group

            flex

            items-center

            gap-3

            rounded-full

            bg-orange-500

            px-8

            py-4

            font-semibold

            text-white

            transition-all

            duration-300

            hover:scale-105

            hover:shadow-xl

            hover:shadow-orange-500/20
          "
        >


          {achievementsCTA.primary}



          <ArrowRight

            size={18}

            className="
              transition-transform

              group-hover:translate-x-1
            "
          />


        </Link>





        {/* Contact */}


        <Link

          href="#contact"


          className="
            rounded-full

            border

            border-white/10

            bg-white/5

            px-8

            py-4

            font-semibold

            text-zinc-300

            transition-all

            duration-300

            hover:border-orange-500/40

            hover:bg-orange-500/10

            hover:text-orange-300
          "
        >


          {achievementsCTA.secondary}


        </Link>


      </div>


    </motion.div>
  );
}