export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  responsibilities?: string[];
  achievements?: string[];
  toolsUsed?: string[];
  relatedProjects?: { title: string; slug: string }[];
}

export const experience: Experience[] = [
  {
    company: "Tendencia Events & Travel",
    role: "Automation & Full-Stack Developer",
    period: "May 2026 — Present",
    description:
      "Full-stack software engineering internship focused on building internal automation tools, developing proposal generation systems, and evaluating ERP solutions to improve business operations for a travel and event management company.",
    responsibilities: [
      "Developed internal web applications.",
      "Designed automation workflows using n8n.",
      "Researched ERP solutions.",
      "Collaborated with stakeholders to gather requirements.",
      "Maintained and customized company websites.",
    ],
    achievements: [
      "Designed a complete lead automation architecture covering five business workflows.",
      "Built ProposalOS, replacing a PowerPoint-based proposal generation system with a scalable HTML template engine.",
      "Developed SlideForge to automate PowerPoint proposal creation.",
      "Proposed migrating from Perfex CRM to ERPNext after a technical evaluation.",
      "Reduced proposal generation complexity through a redesigned architecture.",
    ],
    toolsUsed: [
      "Next.js",
      "FastAPI",
      "Python",
      "React",
      "TypeScript",
      "n8n",
      "ERPNext",
      "Docker",
      "PostgreSQL",
      "Tailwind CSS",
      "Git",
      "wordpress",
    ],
    relatedProjects: [
      { title: "ProposalOS", slug: "proposal-os" },
      { title: "Sales Automation Platform", slug: "sales-automation-platform" },
    ],
  },
  {
    company: "Hostino",
    role: "Full-Stack & Mobile Developer",
    period: "Nov 2025 – Jan 2026",

    description:
      "Developed and deployed production-ready web and mobile applications, backend APIs, and automation workflows. Worked independently on end-to-end features while focusing on performance, SEO, security, and cloud deployment.",

    responsibilities: [
      "Developed production web applications using React and Astro.",
      "Designed and implemented secure REST APIs.",
      "Built automated workflows integrating WHMCS and Zoho Books.",
      "Developed a React dashboard for invoice management.",
      "Built a React Native email client connected to backend APIs.",
      "Optimized SEO and application performance.",
      "Deployed applications on Cloudflare Pages and Workers.",
      "Worked independently across the full development lifecycle.",
    ],

    achievements: [
      "Improved Lighthouse performance score from 70 to 95.",
      "Reduced initial page load time through lazy loading and bundle optimization.",
      "Created an Astro boilerplate that reduced project setup time by approximately 70%.",
      "Implemented Cloudflare security mechanisms including WAF rules and API protection.",
      "Delivered production-ready end-to-end features.",
    ],

    toolsUsed: [
      "React",
      "Astro",
      "TypeScript",
      "Cloudflare Workers",
      "Cloudflare Pages",
      "React Native",
      "Expo",
      "Docker",
      "Git",
      "Brevo",
      "WHMCS",
      "Zoho Books",
    ],

    relatedProjects: [
      {
        title: "Email Client",
        slug: "email-client",
      },
    ],
  },

  {
    company: "Centric Marketing",
    role: "Full-Stack Developer",
    period: "Jul 2025 – Oct 2025",

    description:
      "Contributed to the development of a large-scale email marketing platform built on a microservices architecture, focusing on scalable backend services, real-time updates, and asynchronous communication.",

    responsibilities: [
      "Developed campaign management interfaces.",
      "Implemented scalable REST APIs with NestJS.",
      "Worked with PostgreSQL and Prisma ORM.",
      "Integrated RabbitMQ for asynchronous communication.",
      "Developed backend services using Go (Gin).",
      "Implemented real-time updates using Server-Sent Events.",
      "Optimized frontend performance and state management.",
    ],

    achievements: [
      "Contributed to a production microservices architecture.",
      "Implemented real-time campaign updates.",
      "Improved application performance using lazy loading.",
      "Participated in designing asynchronous service communication.",
    ],

    toolsUsed: [
      "Next.js",
      "NestJS",
      "Go",
      "Gin",
      "RabbitMQ",
      "PostgreSQL",
      "Prisma",
      "TypeScript",
      "SSE",
      "Zustand",
    ],

    relatedProjects: [
      {
        title: "Email Marketing Platform",
        slug: "email-marketing-platform",
      },
    ],
  },

  {
    company: "Datatika",
    role: "AI Chart Generator Intern",
    period: "May 2025",

    description:
      "Participated in building an AI-powered chart generation application capable of generating SQL queries and business KPIs using Large Language Models.",

    responsibilities: [
      "Developed frontend features using Next.js.",
      "Integrated OpenAI APIs.",
      "Integrated LangChain.",
      "Built APIs for chart creation and persistence.",
      "Worked with Chart.js visualization.",
    ],

    achievements: [
      "Integrated AI-assisted KPI generation.",
      "Implemented automatic SQL query generation.",
      "Delivered dynamic chart management features.",
    ],

    toolsUsed: ["Next.js", "TypeScript", "OpenAI", "LangChain", "Chart.js"],
  },

  {
    company: "System Base",
    role: "Frontend Developer Intern",
    period: "Aug 2024 – Sep 2024",

    description:
      "Contributed to the improvement of an employment portal by implementing reusable frontend components and integrating backend APIs.",

    responsibilities: [
      "Developed reusable UI components.",
      "Implemented CRUD operations.",
      "Integrated REST APIs.",
      "Improved questionnaire management features.",
    ],

    achievements: [
      "Enhanced maintainability through reusable components.",
      "Delivered new profile management features.",
      "Improved user experience of the recruitment portal.",
    ],

    toolsUsed: ["SvelteKit", "Tailwind CSS", "JavaScript", "REST API"],
  },
];
