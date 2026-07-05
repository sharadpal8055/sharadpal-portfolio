"use client";

import Link from "next/link";

import { motion } from "framer-motion";

import { ArrowUp, Code2, Heart } from "lucide-react";

import {
  footerBrand,
  footerLinks,
  footerSocials,
  footerBottom,
} from "@/constants/footer";

/* -------------------------------------------------------------------------- */
/*                              Motion Variants                               */
/* -------------------------------------------------------------------------- */

const containerVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },

  show: {
    opacity: 1,

    y: 0,

    transition: {
      duration: 0.7,
      
    },
  },
};

/* -------------------------------------------------------------------------- */
/*                                  Footer                                    */
/* -------------------------------------------------------------------------- */

export default function Footer() {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,

      behavior: "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden border-t border-white/10 py-16">
      {/* Background */}

      <div className="grid-bg absolute inset-0 opacity-20" />

      <div className="absolute top-0 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-orange-500/10 blur-[140px]" />

      <motion.div
        variants={containerVariants}

        initial="hidden"

        whileInView="show"

        viewport={{
          once: true,
        }}

        className="container-width relative z-10"
      >
        {/* Main Footer */}

        <div className="glass rounded-[40px] p-10 md:p-14">
          <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr]">
            {/* Brand */}

            <div>
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500 text-xl font-black text-white shadow-lg shadow-orange-500/30">
                  SP
                </div>

                <div>
                  <h2 className="text-2xl font-bold">{footerBrand.name}</h2>

                  <p className="text-sm tracking-widest text-zinc-400 uppercase">
                    {footerBrand.role}
                  </p>
                </div>
              </div>

              <p className="mt-6 max-w-md leading-8 text-zinc-400">
                {footerBrand.description}
              </p>
            </div>

            {/* Links */}

            <div>
              <h3 className="mb-6 font-semibold text-orange-400">Navigation</h3>

              <div className="grid gap-4">
                {footerLinks.map((link) => (
                  <Link
                    key={link.id}

                    href={link.href}

                    className="text-zinc-400 transition-colors hover:text-orange-400"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Social */}

            <div>
              <h3 className="mb-6 font-semibold text-orange-400">Connect</h3>

              <div className="flex gap-4">
                {footerSocials.map((social) => {
                  const Icon = social.icon;

                  return (
                    <Link
                      key={social.id}

                      href={social.href}

                      target="_blank"

                      className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all hover:border-orange-500/40 hover:bg-orange-500/10 hover:text-orange-400"
                    >
                      <Icon size={20} />
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Bottom */}

          <div className="mt-14 flex flex-col items-center justify-between gap-5 border-t border-white/10 pt-8 md:flex-row">
            <p className="text-sm text-zinc-500">{footerBottom.copyright}</p>

            <div className="flex items-center gap-2 text-sm text-zinc-500">
              <Code2 size={16} />

              {footerBottom.built}

              <Heart
                size={16}

                className="text-orange-500"
              />
            </div>

            {/* Scroll Top */}

            <button
              onClick={scrollTop}

              className="flex h-11 w-11 items-center justify-center rounded-full bg-orange-500 text-white transition-transform hover:-translate-y-1"
            >
              <ArrowUp size={20} />
            </button>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
