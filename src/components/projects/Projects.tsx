"use client";

import { motion } from "framer-motion";

import ProjectsHeader from "./ProjectsHeader";
import ProjectStats from "./ProjectStats";
import FeaturedProjects from "./FeaturedProject";
import ProjectsGrid from "./ProjectsGrid";
import ProjectsCTA from "./ProjectsCTA";

/* -------------------------------------------------------------------------- */
/*                              Motion Variants                               */
/* -------------------------------------------------------------------------- */

const containerVariants = {
  hidden: {},

  show: {
    transition: {
      staggerChildren: 0.16,
      delayChildren: 0.15,
    },
  },
};


/* -------------------------------------------------------------------------- */
/*                                Projects                                    */
/* -------------------------------------------------------------------------- */


export default function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="
        section-padding

        relative

        overflow-hidden
      "
    >
      {/* ------------------------------------------------------------------ */}
      {/* Background Layer                                                     */}
      {/* ------------------------------------------------------------------ */}


      <div className="grid-bg absolute inset-0 opacity-30" />


      <div className="noise" />


      <div
        className="
          absolute

          left-0

          top-20

          h-[500px]

          w-[500px]

          rounded-full

          bg-orange-500/10

          blur-[150px]
        "
      />


      <div
        className="
          absolute

          bottom-20

          right-0

          h-[450px]

          w-[450px]

          rounded-full

          bg-orange-400/10

          blur-[150px]
        "
      />



      {/* ------------------------------------------------------------------ */}
      {/* Content                                                              */}
      {/* ------------------------------------------------------------------ */}


      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{
          once: true,
          amount: 0.12,
        }}
        className="
          container-width

          relative

          z-10
        "
      >

        {/* Header */}

        <ProjectsHeader />


        {/* Statistics */}

        <ProjectStats />


        {/* Featured Projects */}

        <FeaturedProjects />


        {/* Other Projects */}

        <ProjectsGrid />


        {/* CTA */}

        <ProjectsCTA />


      </motion.div>

    </section>
  );
}