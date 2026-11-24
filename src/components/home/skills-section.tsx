import type { ComponentType } from "react"
import { skills } from "@/data/skills"
import {
  CodeBracketIcon,
  CodeBracketSquareIcon,
  GlobeAltIcon,
  PaintBrushIcon,
  WindowIcon,
  Square3Stack3DIcon,
  ServerIcon,
  ServerStackIcon,
  CommandLineIcon,
  BoltIcon,
  CpuChipIcon,
  CircleStackIcon,
  CubeIcon,
  Squares2X2Icon,
  CloudIcon,
  ArrowPathRoundedSquareIcon,
  WrenchScrewdriverIcon,
  ArrowsRightLeftIcon,
  SignalIcon,
  ShareIcon,
  Square2StackIcon,
} from "@heroicons/react/24/outline"

export const skillIcons: Record<string, ComponentType<{ className?: string }>> = {
  // Frontend
  "React": CodeBracketIcon,
  "Next.js": GlobeAltIcon,
  "TypeScript": CodeBracketSquareIcon,
  "Tailwind CSS": PaintBrushIcon,
  "HTML/CSS": WindowIcon,
  "Redux": Square3Stack3DIcon,

  // Backend
  "Node.js": ServerIcon,
  "Go": CommandLineIcon,
  "Python": BoltIcon,
  "Rust": CpuChipIcon,
  "PostgreSQL": CircleStackIcon,
  "Redis": ServerStackIcon,

  // DevOps & Tools
  "Docker": CubeIcon,
  "Kubernetes": Squares2X2Icon,
  "AWS": CloudIcon,
  "CI/CD": ArrowPathRoundedSquareIcon,
  "Terraform": WrenchScrewdriverIcon,
  "Linux": CommandLineIcon,

  // Other
  "gRPC": ArrowsRightLeftIcon,
  "WebSocket": SignalIcon,
  "GraphQL": ShareIcon,
  "WebAssembly": CpuChipIcon,
  "CRDT": Square2StackIcon,
}

/*
 * Modeled on the Canva "A few things I'm proud of" band (caramel): title top
 * 77px, lead top 242px (24px), columns top 443px with 28px bold titles,
 * 81px column gap.
 */
export function SkillsSection() {
  return (
    <section id="skills" data-cine="skills" className="scroll-mt-24 bg-caramel text-ink md:min-h-[var(--cine-band)]">
      <div className="cine-container pb-[var(--cine-section-y)] pt-[var(--cine-section-y)]">
        <h2 data-cine="skills-title" className="font-display text-display">
          What I work with
        </h2>
        <p data-cine="skills-lead" className="mt-[clamp(1.5rem,4.284vw,58.5px)] text-lead">
          The tools I reach for to ship web apps, APIs and automations.
        </p>

        <div className="mt-[clamp(3rem,12.43vw,169.8px)] grid gap-x-[min(5.94vw,81.2px)] gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((group, i) => (
            <div key={group.category} data-cine={i === 0 ? "skills-col" : undefined}>
              <h3 data-cine={i === 0 ? "skills-col-title" : undefined} className="text-title font-bold">
                {group.category}
              </h3>
              <ul className="mt-4 space-y-2">
                {group.items.map((skill) => {
                  const Icon = skillIcons[skill] || CodeBracketIcon
                  return (
                    <li key={skill} className="flex items-center gap-3 text-copy">
                      <Icon className="size-[1.15em] shrink-0" />
                      <span>{skill}</span>
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
