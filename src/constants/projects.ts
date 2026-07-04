import {
  BrainCircuit,
  CalendarCheck,
  Code2,
  Globe,
  Layers,
  Lock,
  Sparkles,
} from "lucide-react";

import {
  SiFirebase,
  SiMongodb,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiVercel,
  SiExpress,
  SiJavascript,
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
/*                                  Projects                                  */
/* -------------------------------------------------------------------------- */


export const projects = [
  {
    id: 1,

    title: "Clutch AI",

    category: "AI Productivity Platform",

    featured: true,

    status: "Production Ready",

    image: "/projects/clutch-ai.png",

    description:
      "An AI productivity companion that analyzes tasks, predicts deadline risks, generates execution plans, and helps users improve productivity.",


    highlights: [
      "Gemini AI integration",
      "Risk prediction engine",
      "AI generated planning",
      "Firebase authentication",
    ],


    technologies: [
      "React",
      "Firebase",
      "Gemini API",
      "Tailwind CSS",
    ],


    github:
      "https://github.com/sharadpal8055",

    live:"#",
  },


  {
    id: 2,

    title: "Zenthrixa",

    category:"Full Stack E-Commerce",

    featured:true,

    status:"Live",

    image:"/projects/zenthrixa.png",

    description:
      "A scalable MERN e-commerce platform with storefront, admin dashboard, authentication, payments, orders and secure APIs.",


    highlights:[

      "Admin dashboard",

      "JWT authentication",

      "Payment workflow",

      "Order management",

    ],


    technologies:[

      "MongoDB",

      "Express",

      "React",

      "Node.js",

      "Vercel",

    ],


    github:
      "https://github.com/sharadpal8055/Zenthrixa",


    live:
      "https://zenthrixa-frontend.vercel.app/",
  },


  {
    id:3,

    title:"AI Resume Analyzer",

    category:"AI Application",

    featured:false,

    status:"Completed",

    image:"/projects/resume-ai.png",

    description:
      "AI powered resume analysis platform that evaluates resumes, generates insights and recommends improvements.",


    highlights:[

      "Resume parsing",

      "AI suggestions",

      "Score generation",

    ],


    technologies:[

      "React",

      "Node.js",

      "AI API",

    ],


    github:
      "https://github.com/sharadpal8055",


    live:"#",
  },


  {
    id:4,

    title:"StayBook",

    category:"Booking Platform",

    featured:false,

    status:"Completed",

    image:"/projects/staybook.png",


    description:
      "A full stack booking application inspired by Airbnb featuring listings, authentication and reservation workflows.",


    highlights:[

      "User authentication",

      "Booking system",

      "Database models",

    ],


    technologies:[

      "MongoDB",

      "Express",

      "React",

      "Node.js",

    ],


    github:
      "https://github.com/sharadpal8055",


    live:"#",
  },


  {
    id:5,

    title:"Secure Backend Systems",

    category:"Backend Engineering",

    featured:false,

    status:"Completed",

    image:"/projects/backend.png",


    description:
      "Backend focused projects implementing secure authentication, authorization, REST APIs and scalable architecture.",


    highlights:[

      "JWT security",

      "REST API design",

      "Database optimization",

    ],


    technologies:[

      "Node.js",

      "Express",

      "MongoDB",

      "JWT",

    ],


    github:
      "https://github.com/sharadpal8055",


    live:"#",
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