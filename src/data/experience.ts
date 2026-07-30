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
    company: "Full-Stack Developer Intern — Tendencia Events & Travel",
    role: "Senior Software Engineer",
    period: "Jan 2024 — Present",
    description:
      "Leading the platform team building next-gen developer tools. Architecting distributed systems handling 10M+ requests daily.",
    responsibilities: [
      "Architected and maintained microservices handling 10M+ daily requests across 3 data centers",
      "Led a 5-person engineering team through quarterly planning, code reviews, and production deployments",
      "Designed event-driven architecture using Kafka for real-time data processing and analytics",
      "Established monitoring and alerting pipelines reducing mean time to detection by 60%",
    ],
    achievements: [
      "Reduced API latency by 40% through query optimization and caching strategy overhaul",
      "Drove adoption of TypeScript across the codebase, cutting production bugs by 35%",
      "Received internal innovation award for designing a self-healing deployment pipeline",
    ],
    toolsUsed: ["TypeScript", "Go", "Kubernetes", "Kafka", "PostgreSQL", "Redis", "Terraform", "Datadog"],
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
