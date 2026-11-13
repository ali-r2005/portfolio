import { skills } from "@/data/skills"
import { TechIcon } from "@/components/ui/tech-icon"

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
        <p data-cine="skills-lead" className="mt-[max(1.5rem,4.284vw)] text-lead">
          The tools I reach for to ship web apps, APIs and automations.
        </p>

        <div className="mt-[max(3rem,12.43vw)] grid gap-x-[min(5.94vw,81.2px)] gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((group, i) => (
            <div key={group.category} data-cine={i === 0 ? "skills-col" : undefined}>
              <h3 data-cine={i === 0 ? "skills-col-title" : undefined} className="text-title font-bold">
                {group.category}
              </h3>
              <ul className="mt-4 space-y-2">
                {group.items.map((skill) => (
                  <li key={skill} className="flex items-center gap-3 text-copy">
                    <TechIcon name={skill} className="size-[1em] shrink-0" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
