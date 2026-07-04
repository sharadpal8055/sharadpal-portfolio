"use client";

import Link from "next/link";

import { motion } from "framer-motion";

import {
  availability,
  contactInfo,
} from "@/constants/contact";


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


const cardVariants = {
  hidden: {
    opacity: 0,
    y: 35,
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
/*                              Contact Info                                  */
/* -------------------------------------------------------------------------- */


export default function ContactInfo() {
  return (
    <motion.div

      variants={containerVariants}

      initial="hidden"

      whileInView="show"

      viewport={{
        once:true,
        amount:0.2,
      }}

      className="
        space-y-10
      "
    >


      {/* -------------------------------------------------------------- */}
      {/* Contact Cards */}
      {/* -------------------------------------------------------------- */}


      <div
        className="
          grid

          gap-5
        "
      >


        {contactInfo.map((item)=>{

          const Icon=item.icon;


          return (

            <motion.div

              key={item.id}

              variants={cardVariants}

            >

              <Link

                href={item.href}

                target={
                  item.href.startsWith("http")
                    ? "_blank"
                    : undefined
                }

                className="
                  glass

                  group

                  flex

                  items-center

                  gap-5

                  rounded-[26px]

                  border

                  border-white/10

                  p-6

                  transition-all

                  duration-300

                  hover:-translate-y-2

                  hover:border-orange-500/40

                  hover:shadow-xl

                  hover:shadow-orange-500/10
                "
              >


                {/* Icon */}


                <div
                  className="
                    flex

                    h-14

                    w-14

                    shrink-0

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

                  <Icon size={26}/>

                </div>



                {/* Text */}


                <div>

                  <h4
                    className="
                      font-semibold

                      text-lg
                    "
                  >

                    {item.title}

                  </h4>


                  <p
                    className="
                      mt-1

                      text-sm

                      text-zinc-400
                    "
                  >

                    {item.value}

                  </p>


                </div>


              </Link>

            </motion.div>

          );

        })}


      </div>




      {/* -------------------------------------------------------------- */}
      {/* Availability */}
      {/* -------------------------------------------------------------- */}


      <motion.div

        variants={cardVariants}

        className="
          glass

          rounded-[30px]

          border

          border-white/10

          p-8
        "
      >


        <h3
          className="
            text-2xl

            font-bold
          "
        >

          Available For

        </h3>



        <div
          className="
            mt-7

            grid

            gap-4
          "
        >

          {availability.map((item)=>{

            const Icon=item.icon;


            return (

              <motion.div

                key={item.id}

                whileHover={{
                  x:8,
                }}

                className="
                  flex

                  items-center

                  gap-4

                  rounded-2xl

                  border

                  border-white/10

                  bg-white/5

                  px-5

                  py-4

                  transition-all

                  duration-300

                  hover:border-orange-500/40

                  hover:bg-orange-500/10
                "
              >

                <Icon
                  size={22}

                  className="
                    text-orange-500
                  "
                />


                <span
                  className="
                    text-zinc-300
                  "
                >

                  {item.title}

                </span>


              </motion.div>

            );

          })}

        </div>


      </motion.div>


    </motion.div>
  );
}