import {
 FaGithub,
 FaLinkedin
} from "react-icons/fa";

import {
 Mail
} from "lucide-react";


/* -------------------------------------------------------------------------- */
/*                                  Branding                                  */
/* -------------------------------------------------------------------------- */


export const footerBrand = {

  name:
    "Sharad Pal",


  role:
    "Full Stack AI Developer",


  description:
    "Building scalable full-stack applications, AI-powered products, and modern digital experiences with clean engineering practices.",

};


/* -------------------------------------------------------------------------- */
/*                                Navigation                                  */
/* -------------------------------------------------------------------------- */


export const footerLinks = [

  {
    id:1,
    label:"Home",
    href:"#home",
  },


  {
    id:2,
    label:"About",
    href:"#about",
  },


  {
    id:3,
    label:"Skills",
    href:"#skills",
  },


  {
    id:4,
    label:"Experience",
    href:"#experience",
  },


  {
    id:5,
    label:"Projects",
    href:"#projects",
  },


  {
    id:6,
    label:"Achievements",
    href:"#achievements",
  },


  {
    id:7,
    label:"Contact",
    href:"#contact",
  },

];



/* -------------------------------------------------------------------------- */
/*                                  Socials                                   */
/* -------------------------------------------------------------------------- */


export const footerSocials = [

  {
    id:1,

    name:"GitHub",

    href:
      "https://github.com/sharadpal8055",

    icon:FaGithub,

  },


  {
    id:2,

    name:"LinkedIn",

    href:
      "https://linkedin.com/in/your-linkedin",

    icon:FaLinkedin,

  },


  {
    id:3,

    name:"Email",

    href:
      "mailto:sharadpal409@gmail.com",

    icon:Mail,

  },

];



/* -------------------------------------------------------------------------- */
/*                              Footer Bottom                                 */
/* -------------------------------------------------------------------------- */


export const footerBottom = {

  copyright:
    `© ${new Date().getFullYear()} Sharad Pal. All rights reserved.`,


  built:
    "Built with Next.js, TypeScript & Tailwind CSS",

};