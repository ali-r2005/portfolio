import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { experience } from "@/data/experience"

export default function ExperiencePage() {
  return (
    <div className="mx-auto max-w-6xl p-8">
      <div className="mb-8 border-b border-border pb-8">
        <h1 className="text-4xl font-semibold text-foreground">Experience</h1>
        <p className="mt-2 text-base text-muted-foreground">Where I&apos;ve worked</p>
      </div>

      <div className="relative pl-8">
        <div className="absolute left-[15px] top-2 h-full w-[2px] bg-muted" />

        {experience.map((exp) => (
          <div key={exp.company} className="relative mb-8 last:mb-0">
            <div className="absolute -left-8 mt-2 flex h-4 w-4 items-center justify-center">
              <div className="h-4 w-4 rounded-full border-2 border-primary bg-card" />
            </div>

            <Card className="border-border bg-card p-6 transition-colors hover:bg-muted/50">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{exp.role}</h3>
                  <p className="mt-1 text-base text-primary">{exp.company}</p>
                </div>
                <span className="shrink-0 text-sm text-muted-foreground">{exp.period}</span>
              </div>
              <p className="mt-4 text-base leading-relaxed text-text-secondary">{exp.description}</p>

              {exp.responsibilities && (
                <div className="mt-6">
                  <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">Responsibilities</h4>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((r) => (
                      <li key={r} className="flex items-start gap-2 text-sm text-text-secondary">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {exp.achievements && (
                <div className="mt-6">
                  <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">Achievements</h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((a) => (
                      <li key={a} className="flex items-start gap-2 text-sm text-text-secondary">
                        <svg className="mt-0.5 h-4 w-4 shrink-0 text-success" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {exp.toolsUsed && (
                <div className="mt-6">
                  <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">Tools Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.toolsUsed.map((tool) => (
                      <Badge key={tool} variant="secondary" className="bg-sidebar text-xs text-muted-foreground">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {exp.relatedProjects && (
                <div className="mt-6">
                  <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">Related Projects</h4>
                  <div className="flex flex-wrap gap-x-6 gap-y-2">
                    {exp.relatedProjects.map((p) => (
                      <Link
                        key={p.slug}
                        href={`/projects/${p.slug}`}
                        className="group flex items-center gap-1 text-sm text-primary transition-colors hover:text-primary/80"
                      >
                        {p.title}
                        <span className="transition-transform group-hover:translate-x-0.5">→</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </Card>
          </div>
        ))}
      </div>
    </div>
  )
}
