export interface Experience {
  company: string
  role: string
  period: string
  description: string
}

export const experience: Experience[] = [
  {
    company: "TechCorp",
    role: "Senior Software Engineer",
    period: "Jan 2024 — Present",
    description: "Leading the platform team building next-gen developer tools. Architecting distributed systems handling 10M+ requests daily.",
  },
  {
    company: "StartupXYZ",
    role: "Full Stack Developer",
    period: "Mar 2022 — Dec 2023",
    description: "Built the core product from MVP to production. Shipped real-time collaboration features and payment infrastructure.",
  },
  {
    company: "Agency.io",
    role: "Frontend Developer",
    period: "Jun 2020 — Feb 2022",
    description: "Developed responsive web applications for Fortune 500 clients. Migrated legacy jQuery apps to React with TypeScript.",
  },
]
