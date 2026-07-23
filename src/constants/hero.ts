import { BriefcaseBusiness, BrainCircuit, Code2, Trophy } from "lucide-react";

export interface HeroStat {
  id: string;
  value: number;
  suffix: string;
  label: string;
  icon: React.ElementType;
}
export const heroData = {
  greeting: " Hello, I'm",

  name: "Sharad Pal",

  roles: [
    "Full Stack Ai Developer",
    "AI Engineer",
    "MERN Stack Developer",
    "React Developer",
    "Open Source Contributor",
    "Competitive Programmer",
  ],

  description:
    "I build modern, scalable, and AI-powered web applications using React, Next.js, Node.js, TypeScript, MongoDB, and Generative AI. Passionate about creating products that solve real-world problems.",

  location: "India (Uttar Pradesh,Ayodhya)",

  availability: "Available for Internships & Full-Time Roles",

  email: "sharadpal230255@gmail.com",
};

export const heroStats: HeroStat[] = [
  {
    id: "projects",
    value: 12,
    suffix: "+",
    label: "Projects",
    icon: BriefcaseBusiness,
  },
  {
    id: "dsa",
    value: 250,
    suffix: "+",
    label: "DSA Problems",
    icon: Code2,
  },
  {
    id: "ai",
    value: 3,
    suffix: "+",
    label: "AI Projects",
    icon: BrainCircuit,
  },
  {
    id: "hackathons",
    value: 4,
    suffix: "+",
    label: "Hackathons",
    icon: Trophy,
  },
];

import type { IconType } from "react-icons";

import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiMongodb,
  SiExpress,
  SiNodedotjs,
  SiPython,
  SiCplusplus,
  SiHtml5,
  SiCss, // ✅ Changed from SiCss3
  SiTailwindcss,
  SiGit,
  SiGithub,
} from "react-icons/si";

export interface HeroTech {
  id: string;
  icon: IconType;
  color: string;
  position: string;
}

export const heroTechStack: HeroTech[] = [
  {
    id: "react",
    icon: SiReact,
    color: "text-cyan-400",
    position: "top-6 left-6",
  },
  {
    id: "next",
    icon: SiNextdotjs,
    color: "text-white",
    position: "top-12 right-0",
  },
  {
    id: "typescript",
    icon: SiTypescript,
    color: "text-blue-500",
    position: "left-0 top-1/2",
  },
  {
    id: "javascript",
    icon: SiJavascript,
    color: "text-yellow-400",
    position: "right-0 top-1/2",
  },
  {
    id: "mongodb",
    icon: SiMongodb,
    color: "text-green-500",
    position: "bottom-16 left-2",
  },
  {
    id: "express",
    icon: SiExpress,
    color: "text-white",
    position: "bottom-2 left-1/3",
  },
  {
    id: "node",
    icon: SiNodedotjs,
    color: "text-green-400",
    position: "bottom-8 right-16",
  },
  {
    id: "python",
    icon: SiPython,
    color: "text-yellow-500",
    position: "top-24 left-0",
  },
  {
    id: "cpp",
    icon: SiCplusplus,
    color: "text-blue-600",
    position: "bottom-32 right-2",
  },
  {
    id: "html",
    icon: SiHtml5,
    color: "text-orange-500",
    position: "top-32 right-10",
  },
  {
    id: "css",
    icon: SiCss, // ✅ Changed from SiCss3
    color: "text-sky-500",
    position: "bottom-40 left-8",
  },
  {
    id: "tailwind",
    icon: SiTailwindcss,
    color: "text-cyan-400",
    position: "top-44 right-20",
  },
  {
    id: "git",
    icon: SiGit,
    color: "text-orange-500",
    position: "bottom-24 left-20",
  },
  {
    id: "github",
    icon: SiGithub,
    color: "text-white",
    position: "top-20 right-24",
  },
];
