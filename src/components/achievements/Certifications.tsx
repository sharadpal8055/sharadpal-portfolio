"use client";

import { motion } from "framer-motion";

import { ExternalLink } from "lucide-react";

import { certifications } from "@/constants/achievements";


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

    y: 40,

  },


  show: {

    opacity: 1,

    y: 0,


    transition: {

      duration: 0.6,

      ease: [0.16, 1, 0.3, 1],

    },

  },

};


/* -------------------------------------------------------------------------- */
/*                              Certifications                                */
/* -------------------------------------------------------------------------- */


export default function Certifications() {

  return (

    <section className="mt-32">


      {/* Header */}


      <motion.div

        initial={{

          opacity: 0,

          y: 30,

        }}


        whileInView={{

          opacity: 1,

          y: 0,

        }}


        viewport={{

          once: true,

        }}


        transition={{

          duration: 0.6,

        }}


        className="mx-auto max-w-3xl text-center"

      >

        <h3 className="heading text-[clamp(2.2rem,5vw,4rem)]">

          Learning & Certifications

        </h3>


        <p className="subheading mx-auto mt-6 max-w-2xl leading-8">

          Verified achievements, technical workshops, and continuous
          learning milestones.

        </p>


      </motion.div>




      {/* Cards */}


      <motion.div

        variants={containerVariants}

        initial="hidden"

        whileInView="show"

        viewport={{

          once: true,

          amount: 0.2,

        }}


        className="
          mt-20

          grid

          gap-8

          md:grid-cols-2

          xl:grid-cols-3
        "

      >


        {certifications.map((item) => {


          const Icon = item.icon;


          return (

            <motion.div

              key={item.id}

              variants={cardVariants}


              whileHover={{

                y: -10,

                scale: 1.03,

              }}


              className="
                glass

                group

                relative

                flex

                flex-col

                overflow-hidden

                rounded-[30px]

                border

                border-white/10

                p-8

                transition-all

                duration-300

                hover:border-orange-500/40

                hover:shadow-xl

                hover:shadow-orange-500/10
              "

            >


              {/* Glow */}


              <div className="
                absolute

                -right-20

                -top-20

                h-52

                w-52

                rounded-full

                bg-orange-500/10

                opacity-0

                blur-[100px]

                transition-all

                duration-500

                group-hover:opacity-100
              " />



              {/* Icon + Year */}


              <div className="relative flex items-center justify-between">


                <div className="
                  flex

                  h-16

                  w-16

                  items-center

                  justify-center

                  rounded-2xl

                  bg-orange-500/10

                  text-orange-500
                ">

                  <Icon size={30}/>

                </div>



                <span className="
                  rounded-full

                  border

                  border-orange-500/20

                  px-4

                  py-1

                  text-sm

                  text-orange-400
                ">

                  {item.year}

                </span>


              </div>



              {/* Content */}


              <h4 className="
                relative

                mt-7

                text-xl

                font-bold
              ">

                {item.title}

              </h4>



              <p className="
                mt-2

                text-orange-400
              ">

                {item.provider}

              </p>



              <p className="
                mt-5

                flex-1

                leading-7

                text-zinc-400
              ">

                {item.description}

              </p>




              {/* Skills */}


              <div className="
                mt-6

                flex

                flex-wrap

                gap-2
              ">

                {item.highlights.map((skill)=> (

                  <span

                    key={skill}

                    className="
                      rounded-full

                      bg-white/5

                      px-3

                      py-1

                      text-xs

                      text-zinc-300
                    "

                  >

                    {skill}

                  </span>

                ))}


              </div>




              {/* Certificate Link */}


              <a

                href={item.credential}

                target="_blank"

                rel="noopener noreferrer"

                className="
                  mt-8

                  inline-flex

                  items-center

                  justify-center

                  gap-2

                  rounded-full

                  bg-orange-500

                  px-5

                  py-3

                  font-semibold

                  text-white

                  transition-all

                  hover:shadow-lg

                  hover:shadow-orange-500/20
                "

              >

                View Certificate


                <ExternalLink size={16}/>


              </a>



            </motion.div>

          );


        })}


      </motion.div>


    </section>

  );

}