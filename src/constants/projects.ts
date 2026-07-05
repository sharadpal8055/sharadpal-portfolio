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

  heading: "Engineering Products That Solve Real Problems",

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
    value: "10+",
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
      "An AI-powered productivity companion that analyzes tasks, predicts deadline risks, creates intelligent execution plans, and helps users manage productivity using AI agents.",

    highlights: [
      "Gemini AI integration",
      "AI task analysis workflow",
      "Deadline risk prediction",
      "Smart productivity planning",
      "Firebase authentication",
    ],

    technologies: [
      "React",
      "Node.js",
      "Firebase",
      "Gemini API",
      "Tailwind CSS",
    ],

    github:
      "https://github.com/sharadpal8055/clutchai",

    live:
      "https://clutchai-frontend.vercel.app",
  },


  {
    id: 2,

    title: "Zenthrixa",

    category: "Scalable MERN E-Commerce Platform",

    featured: true,

    status: "In Development",

    image: "/projects/zenthrixa.png",

    description:
      "A scalable full-stack e-commerce platform with customer storefront, admin dashboard, authentication, product management, payments, and secure backend APIs.",

    highlights: [
      "Customer and admin dashboards",
      "JWT authentication system",
      "Product and order management",
      "Payment integration workflow",
      "Scalable REST API architecture",
    ],

    technologies: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "JWT",
    ],

    github:
      "https://github.com/sharadpal8055/Zenthrixa",

    live:
      "https://zenthrixa-frontend.vercel.app/",
  },


  {
    id: 3,

    title: "E-Learning Platform",

    category: "Full Stack Learning Management System",

    featured: true,

    status: "Production Ready",

    image: "/projects/elearning.png",

    description:
      "A scalable MERN learning platform featuring secure authentication, role-based authorization, course enrollment workflows, payments, and progress tracking.",

    highlights: [
      "Role-based access control",
      "Course enrollment system",
      "Lesson progress tracking",
      "Stripe payment integration",
      "MVC backend architecture",
    ],

    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB Atlas",
      "Stripe",
      "JWT",
      "Zod",
    ],

    github:
      "https://github.com/sharadpal8055/ElearningFrontend",

    live:
      "https://elearningfrontend-alpha.vercel.app",
  },


  {
    id: 4,

    title: "CodeNova",

    category: "Adaptive Object Recognition System",

    featured: true,

    status: "Hackathon Project",

    image: "/projects/codenova.png",

    description:
      "An AI-powered adaptive object recognition system capable of learning new objects dynamically without retraining traditional machine learning models.",

    highlights: [
      "YOLOv8 real-time detection",
      "DINOv2 semantic embeddings",
      "Quantum hybrid similarity engine",
      "Dynamic object learning pipeline",
      "Voice notification system",
    ],

    technologies: [
      "Python",
      "YOLOv8",
      "DINOv2",
      "OpenCV",
      "Streamlit",
      "PennyLane",
    ],

    github:
      "https://github.com/sharadpal8055/hello",

    live:
      "#",
  },


  {
    id: 5,

    title: "TaskManager",

    category: "Full Stack Productivity Application",

    featured: false,

    status: "Completed",

    image: "/projects/taskmanager.png",

    description:
      "A production-ready task management platform with authentication, CRUD workflows, filtering, priority management, and responsive dashboards.",

    highlights: [
      "JWT authentication",
      "CRUD task workflows",
      "Priority management",
      "Search and filtering",
      "Drag-and-drop interface",
    ],

    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Vercel",
      "Render",
    ],

    github:
      "https://github.com/sharadpal8055/Task-Manager-MERN-App",

    live:
      "https://taskmanagerfrontend-seven.vercel.app/signup",
  },


  {
    id: 6,

    title: "FloraVision",

    category: "Modern Frontend Application",

    featured: false,

    status: "Live",

    image: "/projects/floravision.png",

    description:
      "A modern plant store frontend application built with reusable components, responsive layouts, animations, and optimized UI performance.",

    highlights: [
      "Reusable React components",
      "Responsive UI system",
      "Modern animations",
      "Optimized frontend performance",
    ],

    technologies: [
      "React",
      "Tailwind CSS",
      "Vite",
      "Vercel",
    ],

    github:
      "https://github.com/sharadpal8055/flora",

    live:
      "https://flora-gold.vercel.app/",
  },


  {
    id: 7,

    title: "SafeSphere",

    category: "AI Disaster Risk Prediction Platform",

    featured: false,

    status: "AI/ML Project",

    image: "/projects/safesphere.png",

    description:
      "An AI-driven disaster risk prediction system using environmental datasets, machine learning workflows, and intelligent analysis pipelines.",

    highlights: [
      "Disaster risk classification",
      "Predictive ML models",
      "Data preprocessing",
      "Feature analysis",
      "Risk estimation workflow",
    ],

    technologies: [
      "Python",
      "Machine Learning",
      "Data Analysis",
      "Streamlit",
    ],

    github:
      "https://github.com/sharadpal8055/Safesphere",

    live:
      "#",
  },
];



export const projectsCTA = {
  title: "More Products Are Always Under Development",

  description:
    "I continuously build projects to explore engineering challenges, improve architecture decisions, and transform ideas into useful software.",

  primary: "View GitHub",

  secondary: "Contact Me",
};
