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
  {
    title: "Waitless",
    slug: "waitless",
    description:
      "A full-stack queue management system with real-time queue tracking, role-based dashboards, and customer self-service, built with a Next.js frontend and a Laravel API backend.",

    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "React Query",
      "Zustand",
      "React Hook Form",
      "Zod",
      "Laravel Echo",
      "Pusher",
      "Laravel",
      "PHP",
      "MySQL",
      "JWT",
    ],

    image: null,

    github: "",

    live: null,

    overview:
      "Waitless is a queue management platform that lets businesses run live queues and lets customers track their position in real time. The frontend is a Next.js 16 App Router SPA with feature-based architecture (auth, QueueManagement, BusinessManagement, dashboard, Customer), while the backend is a Laravel 12 API handling business/queue CRUD, customer flow, role-based access, and real-time broadcasting via Laravel Reverb/Pusher.",

    features: [
      "Real-time queue position updates via WebSockets (Laravel Echo + Pusher)",
      "Role-based access for business owners, staff, and customers",
      "Queue CRUD with activate/pause/resume/call-next/complete-serving flows",
      "Customer self-service: join, cancel, and track queue position",
      "Staff and business management (add/remove staff, search users)",
      "Role-based KPI dashboards with charts (Recharts)",
      "JWT authentication with token refresh",
    ],

    architecture:
      "Next.js frontend (feature-based modules under src/features, TanStack Query for server state, Zustand for client state, Axios with JWT interceptors) communicates with a Laravel 12 API over REST. The API layer (Controllers → Services → Models) applies role middleware and persists to MySQL, then broadcasts queue/customer state changes (SendUpdate, StaffQueueUpdate, etc.) over private Pusher/Reverb channels that the frontend subscribes to for live updates.",
  },
  {
    title: "WHOIS Morocco (MaWhois)",
    slug: "mawhois",
    description:
      "A public WHOIS lookup service for .ma domain names, providing real-time access to Moroccan domain registration data synchronized with the official ANRT registry.",

    tech: ["Astro", "Tailwind CSS", "Cloudflare Workers"],

    image: null,

    github: "",

    live: "https://www.mawhois.com/",

    overview:
      "MaWhois is an online directory service based on the .ma registry database, giving businesses, domain registrants, and international companies transparent access to Moroccan domain registration data as required by ANRT (Morocco's telecommunications authority).",

    features: [
      "Domain availability checking for .ma domains",
      "Ownership verification (registrant name, contact details, company ID)",
      "Technical data lookup: DNS servers, creation/expiration dates, domain status",
      "Lifecycle tracking (active, suspended, expired, pending)",
      "Multi-extension support (.ma, .net.ma, .ac.ma, .co.ma, .press.ma, .org.ma, .gov.ma, and international TLDs)",
    ],

    architecture:
      "Built with Astro and Tailwind CSS, the site queries the official .ma registry (managed by ANRT) to serve real-time domain data, with WHMCS integration for domain management workflows. Deployed on Cloudflare, running on Cloudflare Workers.",
  },
];
