export interface SkillGroup {
  category: string
  items: string[]
}

export const skills: SkillGroup[] = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS", "Redux"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Go", "Python", "Rust", "PostgreSQL", "Redis"],
  },
  {
    category: "DevOps & Tools",
    items: ["Docker", "Kubernetes", "AWS", "CI/CD", "Terraform", "Linux"],
  },
  {
    category: "Other",
    items: ["gRPC", "WebSocket", "GraphQL", "WebAssembly", "CRDT"],
  },
]
