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
            </Card>
          </div>
        ))}
      </div>
    </div>
  )
}
