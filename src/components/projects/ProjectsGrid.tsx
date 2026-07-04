"use client";

import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

import { projects } from "@/constants/projects";

import ProjectCard from "./ProjectCard";


/* -------------------------------------------------------------------------- */
/*                              Categories                                    */
/* -------------------------------------------------------------------------- */


const categories = [
  "All",
  "Full Stack",
  "AI",
  "Frontend",
  "Backend",
];


/* -------------------------------------------------------------------------- */
/*                              Animations                                    */
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
/*                              Projects Grid                                 */
/* -------------------------------------------------------------------------- */


export default function ProjectsGrid() {


  const [activeCategory, setActiveCategory] =
    useState("All");



  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter(
          (project) =>
            project.category === activeCategory
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

        className="
          mx-auto

          max-w-4xl

          text-center
        "
      >


        <h3
          className="
            heading

            text-[clamp(2.4rem,5vw,4rem)]
          "
        >

          Explore More Projects

        </h3>


        <p
          className="
            subheading

            mx-auto

            mt-5

            max-w-3xl

            leading-8
          "
        >

          A collection of applications focused on performance,
          scalability, clean architecture, and practical engineering.

        </p>


      </motion.div>




      {/* ------------------------------------------------------------ */}
      {/* Filters */}
      {/* ------------------------------------------------------------ */}


      <div
        className="
          mt-14

          flex

          flex-wrap

          justify-center

          gap-4
        "
      >


        {categories.map((category) => (

          <button

            key={category}

            onClick={() =>
              setActiveCategory(category)
            }


            className={`
              rounded-full

              border

              px-6

              py-3

              text-sm

              font-semibold

              transition-all

              duration-300


              ${
                activeCategory === category
                  ? 
                  "border-orange-500 bg-orange-500 text-white shadow-lg shadow-orange-500/20"
                  :
                  "border-white/10 bg-white/5 text-zinc-400 hover:border-orange-500/40 hover:text-orange-400"
              }
            `}
          >

            {category}

          </button>

        ))}


      </div>




      {/* ------------------------------------------------------------ */}
      {/* Grid */}
      {/* ------------------------------------------------------------ */}


      <motion.div

        variants={containerVariants}

        initial="hidden"

        whileInView="show"

        viewport={{
          once: true,
          amount: 0.1,
        }}


        className="
          mt-20

          grid

          gap-10

          xl:grid-cols-3

          lg:grid-cols-2
        "
      >


        <AnimatePresence mode="popLayout">


          {filteredProjects.map((project) => (


            <motion.div

              key={project.id}

              variants={itemVariants}

              layout

              initial={{
                opacity: 0,
                scale: 0.95,
              }}

              animate={{
                opacity: 1,
                scale: 1,
              }}

              exit={{
                opacity: 0,
                scale: 0.95,
              }}


            >

              <ProjectCard project={project} />


            </motion.div>


          ))}


        </AnimatePresence>


      </motion.div>



    </section>

  );
}