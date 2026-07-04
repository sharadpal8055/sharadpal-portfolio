import {
  BrainCircuit,
  CalendarCheck,
  Code2,
  Cpu,
  Database,
  Globe,
  Layers,
  Lock,
  ShoppingBag,
  Sparkles,
  Zap,
} from "lucide-react";

import {
  SiFirebase,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenai,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";


/* -------------------------------------------------------------------------- */
/*                            Section Information                             */
/* -------------------------------------------------------------------------- */


export const projectsSection = {
  badge: "Featured Work",

  heading:
    "Engineering Products That Solve Real Problems",

  description:
    "A collection of full-stack applications and AI-powered platforms focused on scalability, clean architecture, performance, and practical user experiences.",
};


/* -------------------------------------------------------------------------- */
/*                                  Stats                                     */
/* -------------------------------------------------------------------------- */


export const projectStats = [
  {
    id: 1,
    value: "15+",
    label: "Projects Built",
    icon: Code2,
  },

  {
    id: 2,
    value: "5+",
    label: "Production Deployments",
    icon: Globe,
  },

  {
    id: 3,
    value: "10+",
    label: "Integrated APIs",
    icon: Layers,
  },

  {
    id: 4,
    value: "3+",
    label: "AI Applications",
    icon: BrainCircuit,
  },
];


/* -------------------------------------------------------------------------- */
/*                              Featured Projects                             */
/* -------------------------------------------------------------------------- */


export const featuredProjects = [
  {
    id: 1,

    title: "Clutch AI",

    category:
      "AI Productivity Platform",

    image:
      "/projects/clutch-ai.png",

    description:
      "An intelligent productivity assistant that analyzes tasks, predicts deadline risks, creates AI-generated execution plans, and helps users manage workloads efficiently.",


    highlights: [
      "Gemini AI integration",
      "AI task analysis engine",
      "Risk prediction system",
      "Smart planning workflow",
    ],


    technologies: [
      {
        name: "React",
        icon: SiReact,
      },

      {
        name: "Firebase",
        icon: SiFirebase,
      },

      {
        name: "Gemini",
        icon: Sparkles,
      },

      {
        name: "Tailwind",
        icon: SiTailwindcss,
      },
    ],


    github:
      "https://github.com/sharadpal8055",

    live:
      "#",
  },


  {
    id: 2,

    title: "Zenthrixa",

    category:
      "Scalable E-Commerce Platform",

    image:
      "/projects/zenthrixa.png",

    description:
      "A complete MERN commerce ecosystem featuring customer storefront, admin dashboard, authentication, payments, order management, and secure backend APIs.",


    highlights: [
      "Admin management system",
      "Secure authentication",
      "Payment workflow",
      "Order lifecycle tracking",
    ],


    technologies: [
      {
        name: "MongoDB",
        icon: SiMongodb,
      },

      {
        name: "Node.js",
        icon: SiNodedotjs,
      },

      {
        name: "React",
        icon: SiReact,
      },

      {
        name: "Vercel",
        icon: SiVercel,
      },
    ],


    github:
      "https://github.com/sharadpal8055/Zenthrixa",

    live:
      "https://zenthrixa-frontend.vercel.app/",
  },
];



/* -------------------------------------------------------------------------- */
/*                               Other Projects                               */
/* -------------------------------------------------------------------------- */


export const projects = [
  {
    id:1,

    title:"AI Resume Analyzer",

    description:
      "AI-based resume evaluation platform that analyzes resumes, provides insights, and recommends improvements.",

    icon: BrainCircuit,

    tags:[
      "AI",
      "NLP",
      "Automation",
    ],
  },


  {
    id:2,

    title:"StayBook",

    description:
      "A booking platform inspired by Airbnb with listings, authentication, and reservation workflows.",

    icon: CalendarCheck,

    tags:[
      "Full Stack",
      "Authentication",
      "Database",
    ],
  },


  {
    id:3,

    title:"Secure Systems",

    description:
      "Backend-focused projects implementing authentication, authorization, API security, and scalable architecture.",

    icon: Lock,

    tags:[
      "Backend",
      "JWT",
      "APIs",
    ],
  },
];



/* -------------------------------------------------------------------------- */
/*                                   CTA                                      */
/* -------------------------------------------------------------------------- */


export const projectsCTA = {

  title:
    "More Products Are Always Under Development",

  description:
    "I continuously build projects to explore engineering challenges, improve architecture decisions, and transform ideas into useful software.",

  primary:
    "View GitHub",

  secondary:
    "Contact Me",
};