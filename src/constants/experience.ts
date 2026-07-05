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
    label: "Projects Developed",
    icon: Rocket,
  },

  {
    id: 3,
    value: " Top 3%",
    label: "Academic Rank",
    icon: Trophy,
  },

  {
    id: 4,
    value: "101",
    label: "Global Ai-Thon contest Rank",
    icon: Award,
  },
];

/* -------------------------------------------------------------------------- */
/*                              Experience Timeline                           */
/* -------------------------------------------------------------------------- */

export const experienceTimeline = [
  {
    id: 1,

    year: "2024 - Present",

    company:
      "Indian Institute of Information Technology Senapati, Manipur",

    role:
      "B.Tech Computer Science & Engineering Undergraduate",

    type:
      "Education",

    icon:
      GraduationCap,

    description:
      "Pursuing Computer Science Engineering with a focus on core computer science fundamentals, software engineering principles, and practical application development through academic learning and independent projects.",

    achievements: [
      "Ranked among Top 3% of the batch",
      "Strong foundation in DSA, OS, DBMS, CN, and OOP",
      "Solved 200+ data structures and algorithm problems",
      "Built multiple full-stack and AI-powered applications",
    ],
  },


  {
    id: 2,

    year:
      "Dec 2025 - Jan 2026",

    company:
      "Enginow",

    role:
      "Full Stack Developer Intern",

    type:
      "Internship",

    icon:
      Building2,

    description:
      "Contributing to full-stack application development by designing user-facing features, developing backend services, implementing secure application workflows, and improving overall product functionality.",

    achievements: [
      "Developed production-ready application features",
      "Built and optimized REST API workflows",
      "Implemented secure authentication systems",
      "Collaborated using professional development practices",
    ],
  },


  {
    id: 3,

    year:
      "Dec 2025 - Feb 2026",

    company:
      "Uptricks Services Pvt. Ltd.",

    role:
      "Frontend Developer Intern",

    type:
      "Internship",

    icon:
      Code2,

    description:
      "Working on modern frontend development by creating responsive interfaces, reusable components, and optimized user experiences following industry-standard development practices.",

    achievements: [
      "Created reusable UI component systems",
      "Improved responsiveness across devices",
      "Optimized frontend performance",
      "Enhanced application user experience",
    ],
  },


  {
    id: 4,

    year:
      "2025 - Present",

    company:
      "Projects, Hackathons & Open Source",

    role:
      "Full Stack & AI Developer",

    type:
      "Engineering Practice",

    icon:
      GitBranch,

    description:
      "Building real-world software products, experimenting with AI integrations, participating in development challenges, and continuously improving engineering skills beyond coursework.",

    achievements: [
      "Built production-ready full-stack projects",
      "Developed AI-powered applications",
      "ET AI Hackathon Semi-Finalist",
      "Achieved Global Rank 101 in coding challenge",
    ],
  },


  {
    id: 5,

    year:
      "Current Focus",

    company:
      "Software Engineering Preparation",

    role:
      "Aspiring Software Engineer",

    type:
      "Growth",

    icon:
      Sparkles,

    description:
      "Strengthening software engineering fundamentals, scalable system design concepts, problem-solving skills, and industry-level development practices for professional engineering roles.",

    achievements: [
      "Advanced DSA preparation",
      "System design fundamentals",
      "Backend architecture learning",
      "Building scalable software projects",
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
