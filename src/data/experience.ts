export interface Experience {
  company: string
  role: string
  period: string
  description: string
  responsibilities?: string[]
  achievements?: string[]
  toolsUsed?: string[]
  relatedProjects?: { title: string; slug: string }[]
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
      "Reduced proposal generation complexity through a redesigned architecture."
    ],
    toolsUsed: ["Next.js", "FastAPI", "Python", "React", "TypeScript", "n8n", "ERPNext", "Docker", "PostgreSQL", "Tailwind CSS","Git", "wordpress"],
    relatedProjects: [
      { title: "ProposalOS", slug: "proposal-os" },
      { title: "Sales Automation Platform", slug: "sales-automation-platform" },
    ],
  },
  {
    company: "StartupXYZ",
    role: "Full Stack Developer",
    period: "Mar 2022 — Dec 2023",
    description:
      "Built the core product from MVP to production. Shipped real-time collaboration features and payment infrastructure.",
    responsibilities: [
      "Developed the MVP and iterated to a production-ready platform with 5K+ active users",
      "Implemented real-time collaboration using WebSockets and CRDT-based conflict resolution",
      "Built Stripe payment integration handling subscriptions, invoicing, and refunds",
      "Managed CI/CD pipelines and AWS infrastructure, achieving 99.9% uptime",
    ],
    achievements: [
      "Grew user base from 0 to 5K in 6 months post-launch",
      "Reduced infrastructure costs by 50% through right-sizing and reserved instances",
      "Mentored 2 junior developers who were promoted within a year",
    ],
    toolsUsed: ["React", "Node.js", "TypeScript", "PostgreSQL", "WebSocket", "AWS", "Stripe", "Docker"],
    relatedProjects: [
      { title: "SlideForge", slug: "slide-forge" },
    ],
  },
  {
    company: "Agency.io",
    role: "Frontend Developer",
    period: "Jun 2020 — Feb 2022",
    description:
      "Developed responsive web applications for Fortune 500 clients. Migrated legacy jQuery apps to React with TypeScript.",
    responsibilities: [
      "Built responsive SPAs for 4 Fortune 500 clients using React and TypeScript",
      "Led migration of a legacy jQuery codebase (50K+ lines) to React with zero downtime",
      "Created a shared component library adopted by 3 cross-functional teams",
      "Collaborated with designers to implement pixel-perfect UI from Figma mockups",
    ],
    achievements: [
      "Completed the jQuery-to-React migration 2 months ahead of the estimated timeline",
      "Improved Lighthouse performance scores from 45 to 92 across client projects",
      "Presented an internal tech talk on React best practices to 30+ engineers",
    ],
    toolsUsed: ["React", "TypeScript", "Tailwind CSS", "Figma", "Storybook", "Jest", "Cypress", "GitHub Actions"],
    relatedProjects: [
      { title: "ERPNext Migration", slug: "erpnext-migration" },
    ],
  },
]
