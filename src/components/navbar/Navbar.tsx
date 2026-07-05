"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import useScroll from "@/hooks/useScroll";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import ScrollProgress from "@/components/common/ScrollProgress";
import useActiveSection from "@/hooks/useActiveSection";
import MobileMenu from "./MobileMenu";
import ResumeButton from "@/components/common/ResumeButton";
export default function Navbar() {
  const isScrolled = useScroll();
  const activeSection = useActiveSection();
  
  return (
    <>
      <ScrollProgress />
      <motion.header
        initial={{
          opacity: 0,
          y: -40,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          isScrolled ? "nav-shadow border-orange-500/20" : ""
        } `}
      >
        <div className="container-width px-2 sm:px-4">
          <nav
            aria-label="Main Navigation"
            className="glass flex items-center justify-between gap-4 rounded-full border border-white/10 px-6 py-3"
          >
            {/* ---------------- Logo ---------------- */}

            <Logo />

            {/* ------------ Desktop Navigation ------------ */}

            <NavLinks activeSection={activeSection} />

            {/* ------------ Right Side ------------ */}

            <div className="flex items-center gap-3">
              {/* Desktop Resume */}
              <ResumeButton className="hidden xl:inline-flex" />

              {/* Tablet / Mobile Resume */}
              <ResumeButton compact className="xl:hidden" />

              {/* Mobile Menu */}
              <MobileMenu />
            </div>
          </nav>
        </div>
      </motion.header>
    </>
  );
}
