"use client";

import { motion } from "framer-motion";

import ContactHeader from "./ContactHeader";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";
import ContactSocials from "./ContactSocials";
import ContactCTA from "./ContactCTA";


/* -------------------------------------------------------------------------- */
/*                              Motion Variants                               */
/* -------------------------------------------------------------------------- */


const containerVariants = {
  hidden: {},

  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.15,
    },
  },
};


/* -------------------------------------------------------------------------- */
/*                              Contact Section                               */
/* -------------------------------------------------------------------------- */


export default function Contact() {
  return (
    <section

      id="contact"

      aria-labelledby="contact-heading"

      className="
        section-padding

        relative

        overflow-hidden
      "
    >


      {/* ---------------------------------------------------------------- */}
      {/* Background */}
      {/* ---------------------------------------------------------------- */}


      <div
        className="
          grid-bg

          absolute

          inset-0

          opacity-30
        "
      />


      <div className="noise" />


      {/* Orange Glow Left */}


      <div
        className="
          absolute

          -left-40

          top-32

          h-[450px]

          w-[450px]

          rounded-full

          bg-orange-500/10

          blur-[140px]
        "
      />


      {/* Orange Glow Right */}


      <div
        className="
          absolute

          bottom-0

          right-0

          h-[420px]

          w-[420px]

          rounded-full

          bg-orange-400/10

          blur-[140px]
        "
      />



      {/* ---------------------------------------------------------------- */}
      {/* Content */}
      {/* ---------------------------------------------------------------- */}


      <motion.div

        variants={containerVariants}

        initial="hidden"

        whileInView="show"

        viewport={{
          once: true,
          amount: 0.15,
        }}

        className="
          container-width

          relative

          z-10
        "
      >


        {/* Header */}


        <ContactHeader />



        {/* Contact Body */}


        <div
          className="
            mt-24

            grid

            gap-12

            xl:grid-cols-[0.9fr_1.1fr]
          "
        >


          {/* Left */}


          <div
            className="
              space-y-10
            "
          >

            <ContactInfo />


            <ContactSocials />


          </div>



          {/* Right */}


          <ContactForm />


        </div>



        {/* CTA */}


        <ContactCTA />


      </motion.div>


    </section>
  );
}