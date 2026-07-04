import {
  Award,
  BriefcaseBusiness,
  Building2,
  Code2,
 GitBranch,
  GraduationCap,
  Rocket,
  Sparkles,
  Trophy,
  Users,
} from "lucide-react";

/* -------------------------------------------------------------------------- */
/*                               Section Header                               */
/* -------------------------------------------------------------------------- */

export const experienceSection = {
  badge: "Professional Journey",

  heading: "Building Real-World Software Through Experience",

  description:
    "My journey has been shaped by internships, collaborative development, hackathons, and continuous learning. Every opportunity has strengthened my ability to design scalable software, solve practical engineering challenges, and deliver impactful digital products.",
};

/* -------------------------------------------------------------------------- */
/*                                  Statistics                                */
/* -------------------------------------------------------------------------- */

export const experienceStats = [
  {
    id: 1,
    value: "2+",
    label: "Internships",
    icon: BriefcaseBusiness,
  },

  {
    id: 2,
    value: "15+",
    label: "Projects Delivered",
    icon: Rocket,
  },

  {
    id: 3,
    value: "Top 3%",
    label: "Academic Rank",
    icon: Trophy,
  },

  {
    id: 4,
    value: "101",
    label: "Global Rank",
    icon: Award,
  },
];

/* -------------------------------------------------------------------------- */
/*                              Experience Timeline                           */
/* -------------------------------------------------------------------------- */

export const experienceTimeline = [
  {
    id: 1,

    year: "2024",

    company: "IIIT Senapati",

    role: "Computer Science Undergraduate",

    type: "Education",

    icon: GraduationCap,

    description:
      "Started my Computer Science journey with a strong focus on programming fundamentals, algorithms, software engineering, and problem solving while consistently maintaining academic excellence.",

    achievements: [
      "Ranked among Top 3% of the batch",
      "Built strong CS fundamentals",
      "Started competitive programming",
    ],
  },

  {
    id: 2,

    year: "Dec 2025",

    company: "Enginow",

    role: "Full Stack Developer Intern",

    type: "Remote Internship",

    icon: Building2,

    description:
      "Worked on production-grade MERN applications, engineered scalable backend services, developed secure REST APIs, implemented authentication, and collaborated on modern software delivery workflows.",

    achievements: [
      "Built scalable backend architecture",
      "Implemented JWT authentication",
      "Integrated Stripe payments",
      "Deployed using Vercel & Render",
    ],
  },

  {
    id: 3,

    year: "Dec 2025",

    company: "Uptricks Services Pvt. Ltd.",

    role: "Frontend Developer Intern",

    type: "Remote Internship",

    icon: Code2,

    description:
      "Designed modern responsive user interfaces, built reusable React components, optimized application performance, and collaborated on production-ready frontend systems.",

    achievements: [
      "Reusable UI components",
      "Responsive web applications",
      "Performance optimization",
      "Cross-browser compatibility",
    ],
  },

  {
    id: 4,

    year: "2026",

    company: "Hackathons & Open Source",

    role: "Competitive Developer",

    type: "Community",

    icon: GitBranch,

    description:
      "Expanded beyond coursework by participating in hackathons, contributing to open-source initiatives, and building AI-powered software solutions while collaborating with developers worldwide.",

    achievements: [
      "ET AI Hackathon Semi-Finalist",
      "Open Source Contributor",
      "Global Rank 101",
      "Production-ready AI projects",
    ],
  },

  {
    id: 5,

    year: "Present",

    company: "Career Growth",

    role: "Software Engineering Aspirant",

    type: "Current",

    icon: Sparkles,

    description:
      "Continuously improving system design knowledge, backend architecture, AI engineering, and scalable software development while preparing for software engineering internships at leading technology companies.",

    achievements: [
      "Advanced MERN projects",
      "AI integrations",
      "System Design learning",
      "Interview preparation",
    ],
  },
];

/* -------------------------------------------------------------------------- */
/*                          Engineering Principles                            */
/* -------------------------------------------------------------------------- */

export const experiencePrinciples = [
  {
    title: "Engineering First",
    description:
      "I focus on building scalable, maintainable, and production-ready software rather than simply completing projects.",
    icon: Rocket,
  },

  {
    title: "Team Collaboration",
    description:
      "Comfortable working in collaborative environments using Git workflows, code reviews, and agile development practices.",
    icon: Users,
  },

  {
    title: "Continuous Learning",
    description:
      "Technology evolves rapidly, and I enjoy exploring new frameworks, AI tools, cloud platforms, and software architecture.",
    icon: Sparkles,
  },

  {
    title: "Impact Driven",
    description:
      "I believe software should solve meaningful problems while delivering great user experiences and long-term business value.",
    icon: Award,
  },
];

/* -------------------------------------------------------------------------- */
/*                                    CTA                                     */
/* -------------------------------------------------------------------------- */

export const experienceCTA = {
  title: "Always Looking for the Next Challenge",

  description:
    "I'm excited to contribute to engineering teams where I can build scalable software, learn from experienced developers, and create products that make a real impact.",

  primaryButton: "View Projects",

  secondaryButton: "Let's Connect",
};