import {
  BriefcaseBusiness,
 
  Mail,
  MapPin,
  MessageCircle,
  Rocket,
  Send,
  Sparkles,
  UserRound,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";


/* -------------------------------------------------------------------------- */
/*                              Section Content                               */
/* -------------------------------------------------------------------------- */


export const contactSection = {
  badge: "Get In Touch",

  heading:
    "Let's Build Something Valuable Together",

  description:
    "I'm always open to discussing software engineering opportunities, internships, collaborations, and innovative ideas. Feel free to reach out and start a conversation.",
};



/* -------------------------------------------------------------------------- */
/*                               Contact Info                                 */
/* -------------------------------------------------------------------------- */


export const contactInfo = [
  {
    id: 1,

    title: "Email",

    value: "your-email@gmail.com",

    href: "mailto:your-email@gmail.com",

    icon: Mail,
  },


  {
    id: 2,

    title: "LinkedIn",

    value: "Connect Professionally",

    href:
      "https://linkedin.com/in/your-profile",

    icon: FaLinkedin,
  },


  {
    id: 3,

    title: "GitHub",

    value: "Explore My Code",

    href:
      "https://github.com/sharadpal8055",

    icon: FaGithub,
  },


  {
    id: 4,

    title: "Location",

    value: "India",

    href: "#",

    icon: MapPin,
  },
];



/* -------------------------------------------------------------------------- */
/*                               Availability                                 */
/* -------------------------------------------------------------------------- */


export const availability = [
  {
    id: 1,

    title:
      "Software Engineering Internships",

    icon:
      BriefcaseBusiness,
  },


  {
    id: 2,

    title:
      "Full Stack Development",

    icon:
      Rocket,
  },


  {
    id: 3,

    title:
      "AI Powered Projects",

    icon:
      Sparkles,
  },


  {
    id: 4,

    title:
      "Technical Collaboration",

    icon:
      UserRound,
  },
];



/* -------------------------------------------------------------------------- */
/*                               Social Links                                 */
/* -------------------------------------------------------------------------- */


export const contactSocials = [
  {
    id: 1,

    name:
      "GitHub",

    href:
      "https://github.com/sharadpal8055",

    icon:
      FaGithub,
  },


  {
    id: 2,

    name:
      "LinkedIn",

    href:
      "https://linkedin.com/in/your-profile",

    icon:
      FaLinkedin,
  },


  {
    id: 3,

    name:
      "Email",

    href:
      "mailto:your-email@gmail.com",

    icon:
      Mail,
  },
];



/* -------------------------------------------------------------------------- */
/*                                Form Fields                                 */
/* -------------------------------------------------------------------------- */


export const contactForm = {
  fields: [
    {
      id: "name",

      label:
        "Your Name",

      placeholder:
        "Enter your name",

      type:
        "text",
    },


    {
      id:
        "email",

      label:
        "Email Address",

      placeholder:
        "Enter your email",

      type:
        "email",
    },


    {
      id:
        "subject",

      label:
        "Subject",

      placeholder:
        "Project / Opportunity",

      type:
        "text",
    },
  ],


  message: {
    id:
      "message",

    label:
      "Message",

    placeholder:
      "Tell me about your idea or opportunity...",
  },


  button:
    "Send Message",

  icon:
    Send,
};



/* -------------------------------------------------------------------------- */
/*                                   CTA                                      */
/* -------------------------------------------------------------------------- */


export const contactCTA = {
  status:
    "Currently Available",


  title:
    "Open To Software Engineering Opportunities",


  description:
    "Looking forward to joining teams where I can contribute to impactful products, solve challenging problems, and continue growing as an engineer.",


  primary:
    "Download Resume",


  secondary:
    "Start Conversation",
};