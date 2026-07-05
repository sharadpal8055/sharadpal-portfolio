"use client";

import { useState } from "react";

import { motion } from "framer-motion";

import { Send } from "lucide-react";

import toast from "react-hot-toast";

import { contactForm } from "@/constants/contact";


/* -------------------------------------------------------------------------- */
/*                              Motion Variants                               */
/* -------------------------------------------------------------------------- */


const formVariants = {
  hidden: {
    opacity: 0,
    x: 50,
  },

  show: {
    opacity: 1,
    x: 0,

    transition: {
      duration: 0.7,
      
    },
  },
};



/* -------------------------------------------------------------------------- */
/*                                Contact Form                                */
/* -------------------------------------------------------------------------- */


export default function ContactForm() {

  const [loading, setLoading] = useState(false);



  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {

    e.preventDefault();


    const form = e.currentTarget;


    const formData = new FormData(form);



    const data = {

      name:
        formData.get("name"),

      email:
        formData.get("email"),

      subject:
        formData.get("subject"),

      message:
        formData.get("message"),

    };



    try {


      setLoading(true);



      const response = await fetch(
        "/api/contact",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body:
            JSON.stringify(data),
        }
      );



      const result =
        await response.json();



      if (!response.ok) {

        throw new Error(
          result.message
        );

      }



      toast.success(
        "Message sent successfully 🚀"
      );



      form.reset();


    } catch (error) {


      toast.error(
        "Failed to send message"
      );


    } finally {


      setLoading(false);


    }

  }




  return (

    <motion.form

      variants={formVariants}

      initial="hidden"

      whileInView="show"

      viewport={{
        once: true,
        amount: 0.2,
      }}

      onSubmit={handleSubmit}

      className="
        glass

        relative

        overflow-hidden

        rounded-[36px]

        border

        border-white/10

        p-8

        md:p-10
      "
    >


      {/* Glow */}


      <div
        className="
          absolute

          -right-20

          -top-20

          h-72

          w-72

          rounded-full

          bg-orange-500/10

          blur-[120px]
        "
      />




      {/* Header */}


      <div className="relative">

        <h3 className="text-3xl font-bold">

          Send Message

        </h3>


        <p className="mt-3 text-zinc-400">

          Have an opportunity or idea? Send me a message.

        </p>


      </div>





      {/* Inputs */}


      <div
        className="
          relative

          mt-10

          grid

          gap-6
        "
      >


        {contactForm.fields.map(
          (field) => (

            <div key={field.id}>


              <label

                htmlFor={field.id}

                className="
                  mb-3

                  block

                  text-sm

                  font-medium

                  text-zinc-300
                "
              >

                {field.label}

              </label>



              <input

                id={field.id}

                name={field.id}

                type={field.type}

                required

                placeholder={
                  field.placeholder
                }

                className="
                  w-full

                  rounded-2xl

                  border

                  border-white/10

                  bg-white/5

                  px-5

                  py-4

                  outline-none

                  transition-all

                  duration-300

                  placeholder:text-zinc-600

                  focus:border-orange-500/50

                  focus:bg-orange-500/5
                "
              />


            </div>

          )
        )}




        {/* Message */}


        <div>


          <label

            htmlFor={
              contactForm.message.id
            }

            className="
              mb-3

              block

              text-sm

              font-medium

              text-zinc-300
            "
          >

            {contactForm.message.label}

          </label>




          <textarea

            id={
              contactForm.message.id
            }

            name={
              contactForm.message.id
            }

            required

            rows={6}

            placeholder={
              contactForm.message.placeholder
            }

            className="
              w-full

              resize-none

              rounded-2xl

              border

              border-white/10

              bg-white/5

              px-5

              py-4

              outline-none

              transition-all

              duration-300

              placeholder:text-zinc-600

              focus:border-orange-500/50

              focus:bg-orange-500/5
            "
          />


        </div>


      </div>





      {/* Button */}


      <motion.button

        whileHover={{
          scale:
            loading ? 1 : 1.04,
        }}

        whileTap={{
          scale: 0.95,
        }}

        disabled={loading}

        className="
          relative

          mt-10

          flex

          w-full

          items-center

          justify-center

          gap-3

          rounded-full

          bg-orange-500

          px-8

          py-4

          font-semibold

          text-white

          transition-all

          duration-300

          disabled:cursor-not-allowed

          disabled:opacity-60

          hover:shadow-xl

          hover:shadow-orange-500/20
        "
      >


        {
          loading
            ? "Sending..."
            : contactForm.button
        }


        <Send size={18} />


      </motion.button>


    </motion.form>

  );

}