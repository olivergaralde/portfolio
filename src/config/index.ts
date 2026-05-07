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
    { text: "LinkedIn", href: "https://github.com/immois/astro-zen" },
    { text: "OnlineJobsPh", href: "https://github.com/immois/astro-zen" },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://astro-zen.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "James Oliver Garalde",
    specialty: "Spreadsheet Solutions Specialist",
    summary:
      "Spreadsheet Specialist focused on streamlining business workflows through Excel and Google Sheets.",
    email: "garaldejamesoliver@gmail.com",
  },
  experience: [
    {
      company: "Grumpy Joe",
      position: "Operations Support Specialist",
      startDate: "2026",
      endDate: "Present",
      summary: [
        "Developed and maintained Google Sheets applications to streamline business operations, including automated trackers, dashboards, and data entry forms tailored to Grumpy Joe's workflows.",
        "Provided operational support by creating and managing digital files, documentation, and system tools to improve team efficiency and daily task management.",
        "Collaborated with staff to identify workflow gaps and delivered simple, practical solutions through spreadsheets, templates, and organized filing systems.",
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
      summary:
        "Oversaw property administration tasks such as record-keeping, rental documentation, and liaison between property owners and occupants.",
    },
  ],
  projects: [
    {
      name: "Spotifu Music",
      summary: "A music streaming app that emulates Spotify's core features.",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/spotifu.png",
    },
    {
      name: "Shopp App",
      summary: "An e-commerce platform that replicates Shopify's key features.",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/shopify-clon.png",
    },
    {
      name: "ClonTagram",
      summary: "A social network that replicates the features of Instagram",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/clone-ig.png",
    },
  ],
  about: {
    description: `
      Hi, I’m James Oliver Garalde, a Spreadsheet Solutions Specialist dedicated to helping businesses work smarter. By leveraging the full power of Excel and Google Sheets, I build custom tools that streamline workflows and visualize complex information.

      Over the years, I’ve honed my skills in building robust, user-friendly applications that not only meet the needs of users but also push the boundaries of what’s possible.
    `,
    image: "/james-big.jpg",
  },
};

// #5755ff
