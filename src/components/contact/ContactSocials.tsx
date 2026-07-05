"use client";

import Link from "next/link";

import { motion } from "framer-motion";

import { contactSocials } from "@/constants/contact";


/* -------------------------------------------------------------------------- */
/*                              Motion Variants                               */
/* -------------------------------------------------------------------------- */


const containerVariants = {
  hidden: {},

  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};


const itemVariants = {
  hidden: {
    opacity: 0,
    y: 25,
  },

  show: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};



/* -------------------------------------------------------------------------- */
/*                              Contact Socials                               */
/* -------------------------------------------------------------------------- */


export default function ContactSocials() {
  return (
    <motion.div

      variants={containerVariants}

      initial="hidden"

      whileInView="show"

      viewport={{
        once:true,
        amount:0.3,
      }}

      className="
        glass

        rounded-[30px]

        border

        border-white/10

        p-8
      "
    >


      {/* -------------------------------------------------------------- */}
      {/* Header */}
      {/* -------------------------------------------------------------- */}


      <div>

        <h3
          className="
            text-2xl

            font-bold
          "
        >

          Developer Profiles

        </h3>


        <p
          className="
            mt-3

            text-zinc-400
          "
        >

          Explore my work, contributions, and professional network.

        </p>

      </div>




      {/* -------------------------------------------------------------- */}
      {/* Social Buttons */}
      {/* -------------------------------------------------------------- */}


      <div
        className="
          mt-8

          flex

          flex-wrap

          gap-4
        "
      >

        {contactSocials.map((item)=>{

          const Icon = item.icon;


          return (

            <motion.div

              key={item.id}

              variants={itemVariants}

              whileHover={{
                y:-6,
                scale:1.05,
              }}

              whileTap={{
                scale:0.95,
              }}

            >

              <Link

                href={item.href}

                target="_blank"

                className="
                  group

                  flex

                  items-center

                  gap-3

                  rounded-full

                  border

                  border-white/10

                  bg-white/5

                  px-6

                  py-3

                  transition-all

                  duration-300

                  hover:border-orange-500/40

                  hover:bg-orange-500/10
                "
              >


                <Icon
                  size={20}

                  className="
                    text-orange-500

                    transition-transform

                    duration-300

                    group-hover:rotate-12

                    group-hover:scale-110
                  "
                />


                <span
                  className="
                    text-sm

                    font-medium

                    text-zinc-300

                    group-hover:text-orange-300
                  "
                >

                  {item.name}

                </span>


              </Link>

            </motion.div>

          );

        })}


      </div>




      {/* -------------------------------------------------------------- */}
      {/* Status */}
      {/* -------------------------------------------------------------- */}


      <div
        className="
          mt-8

          flex

          items-center

          gap-3

          rounded-2xl

          border

          border-green-500/20

          bg-green-500/10

          px-5

          py-4
        "
      >

        <span
          className="
            h-3

            w-3

            animate-pulse

            rounded-full

            bg-green-400
          "
        />


        <p
          className="
            text-sm

            text-green-400
          "
        >

          Active and open for collaboration

        </p>


      </div>


    </motion.div>
  );
}