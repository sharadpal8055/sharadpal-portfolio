"use client";

import { motion } from "framer-motion";

import { projects } from "@/constants/projects";

import ProjectCard from "./ProjectCard";


/* -------------------------------------------------------------------------- */
/*                              Motion Variants                               */
/* -------------------------------------------------------------------------- */


const containerVariants = {
  hidden: {},

  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};


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
/*                           Featured Projects                                */
/* -------------------------------------------------------------------------- */


export default function FeaturedProjects() {


  const featuredProjects = projects.filter(
    (project) => project.featured
  );


  return (

    <section className="mt-32">


      {/* ------------------------------------------------------------ */}
      {/* Header */}
      {/* ------------------------------------------------------------ */}


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
          duration: 0.7,
        }}


        className="
          mx-auto

          max-w-4xl

          text-center
        "
      >


        <span
          className="
            rounded-full

            border

            border-orange-500/20

            bg-orange-500/10

            px-5

            py-2

            text-sm

            font-semibold

            text-orange-400
          "
        >

          Featured Work

        </span>



        <h3
          className="
            heading

            mt-8

            text-[clamp(2.5rem,5vw,4rem)]
          "
        >

          Projects That Represent My Engineering Journey

        </h3>



        <p
          className="
            subheading

            mx-auto

            mt-6

            max-w-3xl

            leading-8
          "
        >

          Selected applications focused on architecture, usability,
          scalability, and solving practical problems.

        </p>


      </motion.div>



      {/* ------------------------------------------------------------ */}
      {/* Project Cards */}
      {/* ------------------------------------------------------------ */}



      <motion.div

        variants={containerVariants}

        initial="hidden"

        whileInView="show"

        viewport={{
          once: true,
          amount: 0.15,
        }}


        className="
          mt-20

          grid

          gap-10

          lg:grid-cols-2
        "
      >


        {featuredProjects.map((project) => (

          <motion.div

            key={project.id}

            variants={itemVariants}

          >

            <ProjectCard project={project} />

          </motion.div>

        ))}


      </motion.div>



    </section>

  );
}