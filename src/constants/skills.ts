import {
  BrainCircuit,
  Braces,
  Cloud,
  Cpu,
  Database,
  GitBranch,
  Globe,
  LayoutDashboard,
  MonitorSmartphone,
  Server,
  Sparkles,
  TerminalSquare,
  Workflow,
} from "lucide-react";
import { VscVscode } from "react-icons/vsc";
import {
  FaCss3Alt,
  FaDocker,
  FaHtml5,
  FaJava,
  FaJs,
  FaNodeJs,
  FaPython,
  FaReact,
} from "react-icons/fa";

import {
  SiCplusplus,
  SiFirebase,
  SiFramer,
  SiGit,
  SiGithub,
  SiJavascript,
  SiJsonwebtokens,
  SiLinux,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiPostman,
  SiPrisma,
  SiRender,
  SiSocketdotio,
  SiTailwindcss,
  SiTensorflow,
  SiTypescript,
  SiVercel,
  SiZod,
} from "react-icons/si";
import { SiC } from "react-icons/si";
/* -------------------------------------------------------------------------- */
/*                              Section Content                               */
/* -------------------------------------------------------------------------- */

export const skillsSection = {
  badge: "Technical Expertise",

  heading: "Crafting Modern Applications with Powerful Technologies",

  description:
    "I build scalable full-stack applications, intelligent AI solutions, and responsive user experiences using modern technologies. I continuously explore new tools while strengthening the fundamentals that power production-ready software.",
};

/* -------------------------------------------------------------------------- */
/*                                 Statistics                                 */
/* -------------------------------------------------------------------------- */

export const skillsStats = [
  {
    id: 1,
    value: 25,
    suffix: "+",
    label: "Technologies",
    icon: Cpu,
  },

  {
    id: 2,
    value: 15,
    suffix: "+",
    label: "Projects Built",
    icon: LayoutDashboard,
  },

  {
    id: 3,
    value: 4,
    suffix: "+",
    label: "Core Domains",
    icon: Globe,
  },

  {
    id: 4,
    value: 200,
    suffix: "+",
    label: "DSA Problems",
    icon: BrainCircuit,
  },
];

/* -------------------------------------------------------------------------- */
/*                              Skill Categories                              */
/* -------------------------------------------------------------------------- */

export const skillCategories = [
  {
    id: 1,
    title: "Frontend Development",
    description:
      "Building responsive, accessible and interactive user interfaces with modern frameworks.",

    icon: MonitorSmartphone,
    experience: "Advanced",
    projects: "12+",

    technologies: [
      {
        name: "React",
        icon: FaReact,
        color: "text-cyan-400",
      },
      {
        name: "Next.js",
        icon: SiNextdotjs,
        color: "text-white",
      },
      {
        name: "TypeScript",
        icon: SiTypescript,
        color: "text-blue-500",
      },
      {
        name: "JavaScript",
        icon: SiJavascript,
        color: "text-yellow-400",
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        color: "text-cyan-400",
      },
      {
        name: "Framer Motion",
        icon: SiFramer,
        color: "text-pink-500",
      },
      {
        name: "HTML5",
        icon: FaHtml5,
        color: "text-orange-500",
      },
      {
        name: "CSS3",
        icon: FaCss3Alt,
        color: "text-blue-500",
      },
    ],
  },

  {
    id: 2,
    title: "Backend Development",
    description:
      "Designing secure REST APIs, authentication systems and scalable server-side applications.",

    icon: Server,
    experience: "Advanced",
    projects: "10+",

    technologies: [
      {
        name: "Node.js",
        icon: FaNodeJs,
        color: "text-green-500",
      },
      {
        name: "Express.js",
        icon: Server,
        color: "text-orange-400",
      },
      {
        name: "REST APIs",
        icon: Workflow,
        color: "text-blue-400",
      },
      {
        name: "JWT",
        icon: SiJsonwebtokens,
        color: "text-pink-500",
      },
      {
        name: "Socket.io",
        icon: SiSocketdotio,
        color: "text-white",
      },
      {
        name: "Zod",
        icon: SiZod,
        color: "text-cyan-400",
      },
    ],
  },

  {
    id: 3,
    title: "Databases",
    description:
      "Managing relational and NoSQL databases with efficient schema design.",

    icon: Database,
    experience: "Intermediate",
    projects: "10+",

    technologies: [
      {
        name: "MongoDB",
        icon: SiMongodb,
        color: "text-green-500",
      },
      {
        name: "MySQL",
        icon: SiMysql,
        color: "text-blue-500",
      },
      {
        name: "Firebase",
        icon: SiFirebase,
        color: "text-yellow-500",
      },
      // {
      //   name: "Prisma",
      //   icon: SiPrisma,
      //   color: "text-cyan-400",
      // },
    ],
  },

  {
    id: 4,
    title: "Artificial Intelligence",
    description:
      "Developing AI-powered products using LLMs, APIs and modern machine learning tools.",

    icon: BrainCircuit,
    experience: "Intermediate",
    projects: "3+",

    technologies: [
      {
        name: "Python",
        icon: FaPython,
        color: "text-yellow-400",
      },
      {
        name: "Gemini API",
        icon: Sparkles,
        color: "text-orange-500",
      },
      // {
      //   name: "TensorFlow",
      //   icon: SiTensorflow,
      //   color: "text-orange-500",
      // },
      {
        name: "Prompt Engineering",
        icon: BrainCircuit,
        color: "text-purple-400",
      },
    ],
  },

  {
    id: 5,
    title: "Programming Languages",
    description:
      "Strong problem-solving skills backed by modern programming languages.",

    icon: Braces,
    experience: "Advanced",
    projects: "200+ DSA",

    technologies: [
      {
        name: "C",
        icon: SiC, // or TbLetterC
        color: "text-blue-400",
      },
      {
        name: "C++",
        icon: SiCplusplus,
        color: "text-blue-500",
      },
      {
        name: "JavaScript",
        icon: FaJs,
        color: "text-yellow-400",
      },
      {
        name: "TypeScript",
        icon: SiTypescript,
        color: "text-blue-500",
      },
      {
        name: "Python",
        icon: FaPython,
        color: "text-yellow-500",
      },
      // {
      //   name: "Java",
      //   icon: FaJava,
      //   color: "text-red-500",
      // },
    ],
  },

  {
    id: 6,
    title: "Developer Tools",
    description:
      "Daily tools for collaboration, deployment and professional software development.",

    icon: TerminalSquare,
    experience: "Daily Use",
    projects: "Every Project",

    technologies: [
      {
        name: "Git",
        icon: SiGit,
        color: "text-orange-500",
      },
      {
        name: "GitHub",
        icon: SiGithub,
        color: "text-white",
      },
      // {
      //   name: "Docker",
      //   icon: FaDocker,
      //   color: "text-blue-500",
      // },
      {
        name: "VS Code",
        icon: VscVscode,
        color: "text-blue-500",
      },
      {
        name: "Postman",
        icon: SiPostman,
        color: "text-orange-500",
      },
      // {
      //   name: "Linux",
      //   icon: SiLinux,
      //   color: "text-yellow-400",
      // },
      {
        name: "Vercel",
        icon: SiVercel,
        color: "text-white",
      },
      {
        name: "Render",
        icon: SiRender,
        color: "text-purple-400",
      },
    ],
  },
];

/* -------------------------------------------------------------------------- */
/*                           Currently Learning                               */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*                           Currently Learning                               */
/* -------------------------------------------------------------------------- */

export const currentlyLearning = [
  {
    title: "System Design",
    icon: Workflow,
  },
  {
    title: "AWS Cloud",
    icon: Cloud,
  },
  {
    title: "Machine Learning",
    icon: BrainCircuit,
  },
  {
    title: "Docker & Kubernetes",
    icon: FaDocker,
  },
  {
    title: "Microservices",
    icon: Server,
  },
  {
    title: "CI / CD",
    icon: GitBranch,
  },
  {
    title: "Advanced Next.js",
    icon: SiNextdotjs,
  },
];

/* -------------------------------------------------------------------------- */
/*                            What I Love Building                            */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*                            Passion Areas                                   */
/* -------------------------------------------------------------------------- */

export const passionAreas = [
  "Full Stack Applications",
  "Artificial Intelligence",
  "Developer Tools",
  "Modern Dashboards",
  "Scalable Backend Systems",
  "Authentication & Security",
  "REST API Development",
  "Real-Time Applications",
  "Open Source",
  "Performance Optimization",
];
