export interface Project {
  title: string
  slug: string
  description: string
  tech: string[]
  image: string | null
  github: string
  live: string | null
  overview?: string
  features?: string[]
  architecture?: string
}

export const projects: Project[] = [
  {
    title: "ProposalOS",
    slug: "proposal-os",
    description:
      "A template-driven proposal generation platform that renders dynamic HTML proposals for travel and event agencies, replacing traditional PowerPoint-based workflows.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "HTML", "CSS"],
    image: "/Proposal-os.png",
    github: "",
    live: null,

    overview:
      "ProposalOS is a web application designed to simplify commercial proposal creation. Instead of generating PowerPoint files, it renders reusable HTML templates that can be customized dynamically and exported for clients. The project was created after identifying the limitations of manipulating PPTX files programmatically.",

    features: [
      "Reusable proposal templates",
      "Dynamic content rendering",
      "Component-based layouts",
      "Responsive proposal previews",
      "HTML template system",
      "Scalable architecture for future AI integration",
    ],

    architecture:
      "Frontend built with Next.js renders reusable HTML templates. Dynamic proposal data is injected into components before rendering, allowing proposals to be customized without modifying the underlying layout.",
  },
  {
    title: "Sales Automation Platform",
    slug: "sales-automation-platform",
    description:
      "Designed an end-to-end sales automation architecture using n8n to automate lead acquisition, qualification, follow-up, notifications, and proposal generation.",

    tech: ["n8n", "REST API", "Webhooks", "AI", "CRM"],

    image: "/diagram.jpg",

    github: "",

    live: null,

    overview:
      "Designed a workflow-based automation platform that manages the entire customer journey from lead acquisition to quotation generation. The architecture integrates multiple lead sources, CRM synchronization, automated scoring, follow-up campaigns, and KPI tracking.",

    features: [
      "Multi-channel lead capture",
      "Automatic lead scoring",
      "CRM synchronization",
      "WhatsApp & Email follow-up",
      "Hot lead notifications",
      "Quotation generation workflow",
      "Sales KPI dashboard",
    ],

    architecture:
      "Five interconnected n8n workflows process incoming leads, calculate lead scores, automate communications, notify sales teams, and trigger proposal generation while updating the CRM.",
  },
  {
    title: "SlideForge",
    slug: "slideforge",

    description:
      "A FastAPI service for generating commercial PowerPoint proposals dynamically using PPTX templates.",

    tech: ["FastAPI", "Python", "python-pptx"],

    image: "/projects/slideforge.png",

    github: "",

    live: null,

    overview:
      "SlideForge was developed to automate proposal generation by editing PowerPoint templates programmatically. During development, limitations in PPTX manipulation led to a complete redesign of the proposal generation architecture.",

    features: [
      "Dynamic PPTX generation",
      "Template manipulation",
      "Automated proposal creation",
      "Backend API",
    ],

    architecture:
      "FastAPI receives proposal data and modifies PowerPoint templates before exporting finished presentations.",
  },
];
