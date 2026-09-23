export interface Project {
  title: string
  slug: string
  lastModified: string
  description: string
  tech: string[]
  images: string[]
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
    lastModified: "2026-07-20",
    description:
      "A template-driven proposal generation platform that renders dynamic HTML proposals for travel and event agencies, replacing traditional PowerPoint-based workflows.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "HTML", "CSS"],
    images: [
      "/proposal/Proposal-os.png",
      "https://picsum.photos/seed/proposal-os-2/1200/675",
      "https://picsum.photos/seed/proposal-os-3/1200/675",
    ],
    github: "https://github.com/ali-r2005/ProposalOS",
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
    title: "Sales Automation Workflows",
    slug: "sales-automation-platform",
    lastModified: "2026-07-05",
    description:
      "A set of n8n automation workflows integrated with Frappe CRM and ERPNext via API to automate lead acquisition, scoring, and follow-up, paired with a custom CRM button that triggers ProposalOS for quotation generation.",

    tech: ["n8n", "Frappe CRM", "ERPNext", "REST API", "Webhooks", "CRM"],

    images: [
      "/sales-automation/lead-gateway.png",
      "/sales-automation/wf1.1.png",
      "/sales-automation/lead-scoring.png",
      "/sales-automation/lead-followup.png",
      "/sales-automation/lead-whatsapp.png",
      "/sales-automation/lead-form.png",
      "/sales-automation/lead-alert.png",
      "/sales-automation/frappe-crm.png"
    ],

    github: "",

    live: null,

    overview:
      "Built multiple n8n workflows to automate lead capture, scoring, and follow-up, connected to a Frappe CRM and ERPNext setup through their APIs. Leads are qualified automatically by the workflows and manually through calls or meetings, with data gathered from both feeding into the CRM. A custom button was added to Frappe CRM that generates a quotation through ProposalOS (a separate proposal generation app) using the collected lead data — this step is triggered manually from the CRM and is not part of the n8n workflows.",

    features: [
      "Multi-channel lead capture via n8n",
      "Automatic lead scoring",
      "Frappe CRM & ERPNext synchronization via API",
      "WhatsApp & Email follow-up automation",
      "Hot lead notifications",
      "Custom CRM button to generate quotations through ProposalOS",
    ],

    architecture:
      "n8n workflows handle lead intake, scoring, and communication, syncing data into Frappe CRM and ERPNext over their REST APIs. A custom button added to Frappe CRM calls the ProposalOS app directly with the gathered lead data to generate a quotation — this integration is separate from the n8n automation layer.",
  },
  {
    title: "SlideForge",
    slug: "slideforge",
    lastModified: "2026-06-18",

    description:
      "A FastAPI service for generating commercial PowerPoint proposals dynamically using PPTX templates.",

    tech: ["FastAPI", "Python", "python-pptx"],

    images: [
      "/projects/slideforge.png",
      "https://picsum.photos/seed/slideforge-2/1200/675",
      "https://picsum.photos/seed/slideforge-3/1200/675",
    ],

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
    lastModified: "2026-07-28",
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

    images: [
      "https://picsum.photos/seed/waitless-1/1200/675",
      "https://picsum.photos/seed/waitless-2/1200/675",
      "https://picsum.photos/seed/waitless-3/1200/675",
    ],

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
    lastModified: "2026-05-30",
    description:
      "A public WHOIS lookup service for .ma domain names, providing real-time access to Moroccan domain registration data synchronized with the official ANRT registry.",

    tech: ["Astro", "Tailwind CSS", "Cloudflare Workers"],

    images: [
      "https://picsum.photos/seed/mawhois-1/1200/675",
      "https://picsum.photos/seed/mawhois-2/1200/675",
      "https://picsum.photos/seed/mawhois-3/1200/675",
    ],

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
