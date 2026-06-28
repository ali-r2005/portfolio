export interface Project {
  title: string
  description: string
  tech: string[]
  image: string | null
  github: string
  live: string | null
}

export const projects: Project[] = [
  {
    title: "Synth",
    description: "Real-time collaborative code editor with AI-powered pair programming, built on CRDTs. Supports 50+ languages with instant sync.",
    tech: ["TypeScript", "React", "Node.js", "CRDT", "WebSocket"],
    image: null,
    github: "https://github.com/user/synth",
    live: "https://synth.dev",
  },
  {
    title: "Pulse",
    description: "Open-source monitoring dashboard for distributed systems. Tracks metrics, logs, and traces with real-time alerting.",
    tech: ["Go", "React", "Prometheus", "Grafana", "Docker"],
    image: null,
    github: "https://github.com/user/pulse",
    live: null,
  },
  {
    title: "Echo",
    description: "Privacy-first messaging platform with end-to-end encryption. Features ephemeral messages, voice channels, and file sharing.",
    tech: ["Rust", "WebAssembly", "React", "Signal Protocol"],
    image: null,
    github: "https://github.com/user/echo",
    live: "https://echo.chat",
  },
  {
    title: "Nexus",
    description: "CLI tool for scaffolding microservices with built-in observability, health checks, and service discovery.",
    tech: ["Go", "gRPC", "Docker", "Kubernetes"],
    image: null,
    github: "https://github.com/user/nexus",
    live: null,
  },
]
