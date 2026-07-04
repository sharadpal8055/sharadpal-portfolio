"use client";

import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";

import {
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

import { FaGithub } from "react-icons/fa";


/* -------------------------------------------------------------------------- */
/*                                   Types                                    */
/* -------------------------------------------------------------------------- */


type ProjectCardProps = {
  project: {
    title: string;

    description: string;

    image: string;

    category: string;

    status: string;

    featured?: boolean;

    github?: string;

    live?: string;

    technologies: string[];
  };
};



/* -------------------------------------------------------------------------- */
/*                              Project Card                                  */
/* -------------------------------------------------------------------------- */


export default function ProjectCard({
  project,
}: ProjectCardProps) {


  return (

    <motion.article

      whileHover={{
        y: -12,
      }}


      transition={{
        duration: 0.3,
      }}


      className="
        group

        glass

        relative

        overflow-hidden

        rounded-[34px]

        border

        border-white/10

        transition-all

        duration-300

        hover:border-orange-500/40

        hover:shadow-2xl

        hover:shadow-orange-500/10
      "
    >


      {/* ------------------------------------------------------------- */}
      {/* Background Glow */}
      {/* ------------------------------------------------------------- */}


      <div
        className="
          absolute

          -right-24

          -top-24

          h-64

          w-64

          rounded-full

          bg-orange-500/10

          opacity-0

          blur-[120px]

          transition-all

          duration-500

          group-hover:opacity-100
        "
      />



      {/* ------------------------------------------------------------- */}
      {/* Image */}
      {/* ------------------------------------------------------------- */}


      <div
        className="
          relative

          h-64

          overflow-hidden
        "
      >

        <Image

          src={project.image}

          alt={project.title}

          fill

          className="
            object-cover

            transition-transform

            duration-700

            group-hover:scale-110
          "
        />


        {/* Overlay */}


        <div
          className="
            absolute

            inset-0

            bg-gradient-to-t

            from-black/80

            via-black/20

            to-transparent
          "
        />



        {/* Featured Badge */}


        {project.featured && (

          <div
            className="
              absolute

              left-5

              top-5

              flex

              items-center

              gap-2

              rounded-full

              bg-orange-500

              px-4

              py-2

              text-sm

              font-semibold

              text-white
            "
          >

            <Sparkles size={15} />

            Featured

          </div>

        )}



        {/* Category */}


        <div
          className="
            absolute

            bottom-5

            left-5

            rounded-full

            border

            border-white/10

            bg-black/50

            px-4

            py-2

            text-sm

            backdrop-blur-xl
          "
        >

          {project.category}

        </div>


      </div>



      {/* ------------------------------------------------------------- */}
      {/* Content */}
      {/* ------------------------------------------------------------- */}


      <div className="relative p-8">


        {/* Status */}


        <span
          className="
            rounded-full

            bg-orange-500/10

            px-4

            py-1

            text-sm

            font-medium

            text-orange-400
          "
        >

          {project.status}

        </span>



        {/* Title */}


        <h3
          className="
            mt-6

            text-3xl

            font-bold
          "
        >

          {project.title}

        </h3>



        {/* Description */}


        <p
          className="
            mt-5

            leading-8

            text-zinc-400
          "
        >

          {project.description}

        </p>




        {/* Technologies */}


        <div
          className="
            mt-7

            flex

            flex-wrap

            gap-3
          "
        >

          {project.technologies.map((tech) => (

            <span

              key={tech}

              className="
                rounded-full

                border

                border-white/10

                bg-white/5

                px-4

                py-2

                text-sm

                text-zinc-300
              "
            >

              {tech}

            </span>

          ))}


        </div>




        {/* Buttons */}


        <div
          className="
            mt-8

            flex

            flex-wrap

            gap-4
          "
        >


          {project.live && (

            <Link

              href={project.live}

              target="_blank"


              className="
                flex

                items-center

                gap-2

                rounded-full

                bg-orange-500

                px-5

                py-3

                font-semibold

                text-white

                transition-all

                hover:bg-orange-600
              "
            >

              Live Demo

              <ArrowUpRight size={18} />

            </Link>

          )}




          {project.github && (

            <Link

              href={project.github}

              target="_blank"


              className="
                glass

                flex

                items-center

                gap-2

                rounded-full

                px-5

                py-3

                font-semibold

                transition-all

                hover:text-orange-400
              "
            >

              <FaGithub size={18} />

              Code

            </Link>

          )}



        </div>


      </div>


    </motion.article>

  );
}