/**
 * ============================================================
 * Portfolio Navigation Configuration
 * ============================================================
 *
 * This file acts as the single source of truth for the navbar.
 *
 * Benefits:
 * ✅ Easily add/remove navigation items
 * ✅ Keeps Navbar component clean
 * ✅ Fully TypeScript typed
 * ✅ Reusable for Desktop + Mobile Navigation
 * ============================================================
 */

import {
  Award,
  BriefcaseBusiness,
  FolderGit2,
  Home,
  Mail,
  User,
  Wrench,
} from "lucide-react";

/* -------------------------------------------------------------------------- */
/*                                Type Definition                             */
/* -------------------------------------------------------------------------- */

export interface NavItem {
  /**
   * Unique identifier
   */
  id: string;

  /**
   * Text shown in navbar
   */
  label: string;

  /**
   * Section ID
   * Example:
   * #home
   * #about
   */
  href: string;

  /**
   * Navigation Icon
   */
  icon: React.ElementType;
}

/* -------------------------------------------------------------------------- */
/*                              Navigation Items                              */
/* -------------------------------------------------------------------------- */

export const navLinks: NavItem[] = [
  {
    id: "home",
    label: "Home",
    href: "#home",
    icon: Home,
  },

  {
    id: "about",
    label: "About",
    href: "#about",
    icon: User,
  },

  {
    id: "skills",
    label: "Skills",
    href: "#skills",
    icon: Wrench,
  },

  {
    id: "experience",
    label: "Experience",
    href: "#experience",
    icon: BriefcaseBusiness,
  },

  {
    id: "projects",
    label: "Projects",
    href: "#projects",
    icon: FolderGit2,
  },

  {
    id: "achievements",
    label: "Achievements",
    href: "#achievements",
    icon: Award,
  },

  {
    id: "contact",
    label: "Contact",
    href: "#contact",
    icon: Mail,
  },
];

/* -------------------------------------------------------------------------- */
/*                           Resume Download Button                           */
/* -------------------------------------------------------------------------- */

export const resumeLink = {
  label: "Resume",

  href: "/resume.pdf",
};
