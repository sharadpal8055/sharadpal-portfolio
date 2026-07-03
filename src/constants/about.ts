import {
  Brain,
  BrainCircuit,
  BriefcaseBusiness,
  Code2,
  Cpu,
  GitBranch,
  GraduationCap,
  Lightbulb,
  Rocket,
  ShieldCheck,
  Users,
  Zap,
} from "lucide-react";

/* -------------------------------------------------------------------------- */
/*                                 ABOUT DATA                                 */
/* -------------------------------------------------------------------------- */

export const aboutData = {
  badge: "About Me",

  heading: "Building Software That Solves Real Problems.",

  intro:
    "I'm Sharad Pal, a Computer Science undergraduate at the Indian Institute of Information Technology Senapati, Manipur, passionate about building scalable software and AI-powered applications that create meaningful impact.",

  description:
    "Rather than simply learning technologies, I enjoy understanding how systems work under the hood. From designing responsive user interfaces to developing secure backend architectures and integrating modern AI models, I focus on creating applications that are clean, efficient, and production-ready.",

  philosophy:
    "I believe great software is a combination of thoughtful engineering, exceptional user experience, and continuous learning. Every project I build is an opportunity to improve my technical depth and solve increasingly complex problems.",

  objective:
    "Currently seeking Software Engineering, Full Stack Development, and AI internships where I can collaborate with experienced engineers, contribute to impactful products, and continue growing as a developer.",

  education: {
    college:
      "Indian Institute of Information Technology Senapati, Manipur",

    degree: "Bachelor of Technology",

    branch: "Computer Science & Engineering",

    cgpa: "8.67 / 10",

    duration: "2024 – 2028",
  },

  resume: "/resume.pdf",
};

/* -------------------------------------------------------------------------- */
/*                              EXPERTISE CARDS                               */
/* -------------------------------------------------------------------------- */

export const aboutCards = [
  {
    title: "Full Stack Engineering",

    description:
      "Designing scalable web applications with React, Next.js, Node.js, Express, MongoDB and modern development practices.",

    icon: Code2,
  },

  {
    title: "Artificial Intelligence",

    description:
      "Building intelligent applications using LLMs, Gemini APIs, Retrieval-Augmented Generation and AI workflows.",

    icon: BrainCircuit,
  },

  {
    title: "Backend Systems",

    description:
      "Developing secure REST APIs, authentication, databases and scalable server-side architectures.",

    icon: Cpu,
  },

  {
    title: "Problem Solving",

    description:
      "Applying strong DSA fundamentals and analytical thinking to develop efficient, optimized software solutions.",

    icon: Rocket,
  },
];

/* -------------------------------------------------------------------------- */
/*                                  TIMELINE                                  */
/* -------------------------------------------------------------------------- */

export const aboutTimeline = [
  {
    id: 1,

    year: "2024",

    title: "Started My Computer Science Journey",

    description:
      "Began pursuing B.Tech in Computer Science at IIIT Senapati while building a strong foundation in programming, algorithms, and software engineering principles.",

    icon: GraduationCap,
  },

  {
    id: 2,

    year: "2024",

    title: "Explored Full Stack Development",

    description:
      "Learned modern frontend and backend technologies, developed responsive MERN applications, and gained practical experience with REST APIs and authentication.",

    icon: Code2,
  },

  {
    id: 3,

    year: "2025",

    title: "Building AI Products & Hackathons",

    description:
      "Started developing AI-powered applications, participated in hackathons, explored LLM integrations, and improved collaborative software development skills.",

    icon: BrainCircuit,
  },

  {
    id: 4,

    year: "Now",

    title: "Preparing for Industry",

    description:
      "Focused on building production-ready projects, strengthening DSA and system design fundamentals, and preparing for Software Engineering internships.",

    icon: BriefcaseBusiness,
  },
];

/* -------------------------------------------------------------------------- */
/*                               CORE STRENGTHS                               */
/* -------------------------------------------------------------------------- */

export const aboutHighlights = {
  technical: [
    {
      title: "Problem Solving",

      icon: Brain,
    },

    {
      title: "Full Stack Development",

      icon: Code2,
    },

    {
      title: "Artificial Intelligence",

      icon: BrainCircuit,
    },

    {
      title: "Open Source",

      icon: GitBranch,
    },

    {
      title: "System Design",

      icon: Cpu,
    },

    {
      title: "Fast Learner",

      icon: Zap,
    },
  ],

  professional: [
    {
      title: "Leadership",

      icon: Rocket,
    },

    {
      title: "Communication",

      icon: Users,
    },

    {
      title: "Critical Thinking",

      icon: Lightbulb,
    },

    {
      title: "Adaptability",

      icon: ShieldCheck,
    },
  ],
};