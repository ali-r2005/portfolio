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
    title: "Synth",
    slug: "synth",
    description: "Real-time collaborative code editor with AI-powered pair programming, built on CRDTs. Supports 50+ languages with instant sync.",
    tech: ["TypeScript", "React", "Node.js", "CRDT", "WebSocket"],
    image: null,
    github: "https://github.com/user/synth",
    live: "https://synth.dev",
    overview:
      "Synth is a next-generation collaborative code editor that brings AI-powered pair programming to your browser. Built on Conflict-free Replicated Data Types (CRDTs), it enables real-time multi-user editing with zero conflicts.",
    features: [
      "Real-time multi-user collaboration with cursor awareness",
      "AI-powered code completions and refactoring suggestions",
      "Support for 50+ programming languages with syntax highlighting",
      "Built-in terminal and debugger integration",
      "VS Code extension compatibility",
    ],
    architecture:
      "The frontend is a React SPA that communicates via WebSocket to a Node.js backend cluster. Document state is managed with CRDTs (based on Yjs), enabling offline edits and seamless merge. The AI layer runs on a separate gRPC service with GPU-accelerated models.",
  },
  {
    title: "Pulse",
    slug: "pulse",
    description: "Open-source monitoring dashboard for distributed systems. Tracks metrics, logs, and traces with real-time alerting.",
    tech: ["Go", "React", "Prometheus", "Grafana", "Docker"],
    image: null,
    github: "https://github.com/user/pulse",
    live: null,
    overview:
      "Pulse is an open-source observability platform that unifies metrics, logs, and traces into a single dashboard. Built for teams running microservices, it provides real-time visibility and intelligent alerting.",
    features: [
      "Unified dashboard for metrics, logs, and traces",
      "Custom alerting rules with Slack, PagerDuty, and email integrations",
      "Service map visualization showing inter-service dependencies",
      "Historical data retention with configurable downsampling",
      "Multi-cluster support with single-pane-of-glass view",
    ],
    architecture:
      "The backend is written in Go, ingesting data via Prometheus metrics and OpenTelemetry traces. Data is stored in a timeseries database with a separate log index. The React frontend queries a GraphQL gateway that fans out to the storage backends.",
  },
  {
    title: "Echo",
    slug: "echo",
    description: "Privacy-first messaging platform with end-to-end encryption. Features ephemeral messages, voice channels, and file sharing.",
    tech: ["Rust", "WebAssembly", "React", "Signal Protocol"],
    image: null,
    github: "https://github.com/user/echo",
    live: "https://echo.chat",
    overview:
      "Echo is a privacy-first messaging platform that puts user security first. All messages are end-to-end encrypted using the Signal Protocol, and the entire client-side crypto runs in WebAssembly for performance.",
    features: [
      "End-to-end encryption using the Signal Protocol",
      "Ephemeral messages with self-destruct timers",
      "Voice channels with low-latency WebRTC streaming",
      "End-to-end encrypted file sharing up to 100MB",
      "Open-source and auditable by the community",
    ],
    architecture:
      "The Rust crypto engine is compiled to WebAssembly and runs entirely client-side. The server is a lightweight relay written in Rust using Actix, with no access to message content. Metadata is minimized and stored encrypted at rest.",
  },
  {
    title: "Nexus",
    slug: "nexus",
    description: "CLI tool for scaffolding microservices with built-in observability, health checks, and service discovery.",
    tech: ["Go", "gRPC", "Docker", "Kubernetes"],
    image: null,
    github: "https://github.com/user/nexus",
    live: null,
    overview:
      "Nexus is a CLI scaffolding tool that generates production-ready microservice templates with built-in observability, health checks, and service discovery. It follows best practices out of the box.",
    features: [
      "Project scaffolding with customizable templates",
      "Built-in health check endpoints and readiness probes",
      "Service discovery via Consul or Kubernetes DNS",
      "OpenTelemetry instrumentation auto-configured",
      "Docker Compose and Helm chart generation",
    ],
    architecture:
      "Nexus is a single Go binary that generates project structures from YAML configuration files. Templates support Go, TypeScript, and Rust runtimes. Generated services include gRPC endpoints, Prometheus metrics, and structured logging via slog.",
  },
  {
    title: "ProposalOS",
    slug: "proposal-os",
    description: "End-to-end proposal management platform for enterprise sales teams. Streamlines creation, approval workflows, and client collaboration.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Tailwind CSS", "Stripe"],
    image: null,
    github: "https://github.com/user/proposal-os",
    live: "https://proposalos.io",
    overview:
      "ProposalOS is an enterprise proposal management platform that digitises the entire proposal lifecycle — from template creation and approval workflows to client collaboration and e-signatures.",
    features: [
      "Drag-and-drop proposal builder with reusable templates",
      "Multi-stage approval workflows with role-based permissions",
      "Real-time client collaboration with comments and annotations",
      "E-signature integration via DocuSign and native signing",
      "Analytics dashboard tracking proposal win rates and cycle times",
    ],
    architecture:
      "Built with Next.js and Prisma ORM on PostgreSQL. The document editor uses a custom block-based editor built on TipTap. File storage is handled via S3-compatible storage. Background jobs for PDF generation run on BullMQ with Redis.",
  },
  {
    title: "Sales Automation Platform",
    slug: "sales-automation-platform",
    description: "AI-driven sales automation platform that scores leads, automates follow-ups, and forecasts revenue with machine learning.",
    tech: ["Python", "FastAPI", "React", "PostgreSQL", "Redis", "Docker", "scikit-learn"],
    image: null,
    github: "https://github.com/user/sales-automation",
    live: null,
    overview:
      "An AI-powered sales automation platform that helps B2B teams prioritise leads, automate outreach sequences, and predict revenue with ML-driven forecasting.",
    features: [
      "Lead scoring using gradient-boosted decision trees",
      "Automated email and LinkedIn outreach sequences",
      "Revenue forecasting with time-series models",
      "CRM integrations (Salesforce, HubSpot, Pipedrive)",
      "Real-time sales activity feed and pipeline analytics",
    ],
    architecture:
      "FastAPI backend serving a React SPA. ML models are trained on historical CRM data using scikit-learn and served via a dedicated model-serving microservice. Celery workers handle async tasks like email dispatch and lead enrichment.",
  },
  {
    title: "SlideForge",
    slug: "slide-forge",
    description: "AI-powered presentation builder that generates slide decks from natural language prompts with custom branding.",
    tech: ["Next.js", "TypeScript", "OpenAI API", "Puppeteer", "Tailwind CSS", "PostgreSQL"],
    image: null,
    github: "https://github.com/user/slide-forge",
    live: "https://slideforge.app",
    overview:
      "SlideForge is an AI-powered presentation tool that generates complete slide decks from simple natural language prompts. Users can apply custom brand themes and export to PPTX or PDF.",
    features: [
      "Generate full slide decks from a single sentence prompt",
      "Custom brand themes (colors, fonts, logos)",
      "Export to PPTX, PDF, and Google Slides formats",
      "AI-powered image generation for slide visuals",
      "Team collaboration with shared template libraries",
    ],
    architecture:
      "Next.js frontend with serverless API routes for OpenAI prompt processing. Deck rendering runs on Puppeteer in headless Chrome for pixel-perfect output. Generated decks are stored in S3 and metadata in PostgreSQL.",
  },
  {
    title: "ERPNext Migration",
    slug: "erpnext-migration",
    description: "Large-scale data migration project moving 10+ years of legacy ERP data to ERPNext with zero downtime and data integrity validation.",
    tech: ["Python", "ERPNext", "MariaDB", "Docker", "Apache Airflow", "PostgreSQL"],
    image: null,
    github: "https://github.com/user/erpnext-migration",
    live: null,
    overview:
      "A large-scale data migration project that moved 10+ years of legacy ERP data from a proprietary system to ERPNext. The migration ran with zero downtime and included automated data integrity validation.",
    features: [
      "ETL pipelines migrating 500K+ records across 20+ entities",
      "Zero-downtime migration strategy with dual-write phase",
      "Automated data integrity checks and reconciliation reports",
      "Custom ERPNext modules for legacy-specific business logic",
      "Rollback capability with full audit trail",
    ],
    architecture:
      "Python ETL pipelines orchestrated with Apache Airflow. Data is extracted via ODBC from the legacy system, transformed with Pandas, and loaded into ERPNext's MariaDB via the Frappe ORM. A validation layer runs checksum comparisons and business rule assertions post-migration.",
  },
]
