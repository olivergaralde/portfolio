import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "James Oliver Garalde",
  author: "James Oliver Garalde",
  description:
    "Results-oriented IT Professional with 5 years of experience delivering high-quality work in distributed environments.",
  lang: "en",
  siteLogo: "/james-small.jpg",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://www.linkedin.com/in/james-oliver-garalde-56322b327/" },
    { text: "OnlineJobsPh", href: "https://v2.onlinejobs.ph/jobseekers/info/3501055" },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://astro-zen.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "James Oliver Garalde",
    specialty: [
      "Operations Support Specialist",
      "Data Entry Specialist",
      "Project Manager",
      "Administrative Assistant",
    ],
    summary:
      "A Virtual Assistant focused on supporting business efficiency and keeping day-to-day operations running smoothly.",
    email: "garaldejamesoliver@gmail.com",
  },
  experience: [
    {
      company: "Grumpy Joe",
      position: "Operations Support Specialist",
      startDate: "2026",
      endDate: "Present",
      summary: [
        "Provided operational support by creating and managing digital files, documentation, and system tools to improve team efficiency and daily task management.",
        "Collaborated with staff to identify workflow gaps and delivered simple, practical solutions through spreadsheets, templates, and organized filing systems.",
        "Developed and maintained Google Sheets applications to streamline business operations, including automated trackers, dashboards, and data entry forms tailored to Grumpy Joe's workflows.",
      ],
    },
    {
      company: "Grumpy Joe",
      position: "Information Technology Intern",
      startDate: "2026",
      endDate: "2026",
      summary: [
        "Assisted the IT department with technical support, troubleshooting hardware and software issues to ensure smooth day-to-day operations at Grumpy Joe.",
        "Supported IT infrastructure maintenance, including system monitoring, equipment setup, and providing on-site technical assistance to staff.",
      ],
    },
    {
      company: "Amaia Steps",
      position: "Property Manager",
      startDate: "2020",
      endDate: "2024",
      summary: [
        "Oversaw property administration tasks such as record-keeping, rental documentation, and liaison between property owners and occupants.",
      ]
    },
  ],
  projects: [
    {
      name: "Product Sold Tracker",
      summary: "An automated Google Sheets system for cleaning, storing, and analyzing monthly products sold across multiple branches.",
      linkPreview: "/",
      linkSource: "https://docs.google.com/spreadsheets/d/1C1TORO1Oqw_eNHurog6nQJfZ6eoAvO4Yj-R5pt5YJu8/edit?gid=885842640#gid=885842640",
      image: "/portfolio1.png",
    },
    {
      name: "Food Costing Application",
      summary: "A dynamic Google Sheets food costing system that automatically calculates dish costs, profit margins, and food cost percentages based on raw material prices.",
      linkPreview: "/",
      linkSource: "https://docs.google.com/spreadsheets/d/1tgyQ_lOwCVh9ypn4B0XRiI9PbN2C-JIoS_otXrLHWgA/edit?gid=1449847546#gid=1449847546",
      image: "/portfolio2.png",
    },
    {
      name: "Simple Product Price Masterlist",
      summary: "A dynamic Google Sheets price list with dropdown filters by location and category, displaying menu and delivery platform prices across all products.",
      linkPreview: "/",
      linkSource: "https://docs.google.com/spreadsheets/d/1kT81f1oMEqRmZOeRXQ3RjMOFOBfPdqGp_rRfyLCgqPo/edit?gid=0#gid=0",
      image: "/portfolio3.png",
    },

  ],
  about: {
    description: `
      Hi, I'm James Oliver Garalde, an Operations Virtual Assistant with hands-on experience in fast-paced operational environments. I thrive behind the scenes, keeping systems organized, processes consistent, and daily operations running without friction.

      Over the years, I have built a reputation for reliability, accuracy, and getting things done consistently.
    `,
    image: "/james-big.jpg",
  },
};

// #5755ff
