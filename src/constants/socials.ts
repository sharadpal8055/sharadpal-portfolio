import type { IconType } from "react-icons";

import {
  SiGithub,
  SiLeetcode,
  SiX,
} from "react-icons/si";

import { FaLinkedin } from "react-icons/fa6";

import { Mail } from "lucide-react";

export interface SocialLink {
  id: string;
  label: string;
  href: string;
  icon: IconType | typeof Mail;
}

export const socialLinks: SocialLink[] = [
  {
    id: "github",
    label: "GitHub",
    href: "https://github.com/sharadpal8055",
    icon: SiGithub,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sharadpal8055",
    icon: FaLinkedin,
  },
  {
    id: "leetcode",
    label: "LeetCode",
    href: "https://codolio.com/profile/sharadpal8055",
    icon: SiLeetcode,
  },
  {
    id: "email",
    label: "Email",
    href: "mailto:sharadpal230255@gmail.com",
    icon: Mail,
  },
 
];