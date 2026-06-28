import { Card } from "@/components/ui/card"
import { experience } from "@/data/experience"

export default function ExperiencePage() {
  return (
    <div className="mx-auto max-w-3xl p-6">
      <div className="mb-6 border-b border-border pb-4">
        <h1 className="text-lg font-semibold text-foreground">Experience</h1>
        <p className="text-sm text-muted-foreground">Where I&apos;ve worked</p>
      </div>

      <div className="relative pl-6">
        <div className="absolute left-[7px] top-2 h-full w-[2px] bg-muted" />

        {experience.map((exp) => (
          <div key={exp.company} className="relative mb-6 last:mb-0">
            <div className="absolute -left-6 mt-1.5 flex h-3.5 w-3.5 items-center justify-center">
              <div className="h-3.5 w-3.5 rounded-full border-2 border-primary bg-card" />
            </div>

            <Card className="border-border bg-card p-4 transition-colors hover:bg-muted/50">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-base font-semibold text-foreground">{exp.role}</h3>
                  <p className="text-sm text-primary">{exp.company}</p>
                </div>
                <span className="shrink-0 text-xs text-muted-foreground">{exp.period}</span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">{exp.description}</p>
            </Card>
          </div>
        ))}
      </div>
    </div>
  )
}
