import Link from "next/link"
import { experience } from "@/data/experience"

/*
 * Modeled on the Canva "What I can do for you" band (ink): title top 74px at
 * x=100 (width 467), items column at x=688 (width 500), first item top 101px,
 * item title 28px bold, copy 21.33px, ~46px between items.
 */
export function ExperienceSection() {
  return (
    <section id="experience" data-cine="experience" className="scroll-mt-24 bg-ink text-cream">
      <div className="cine-container grid gap-12 pb-[var(--cine-section-y)] pt-[min(5.4026vw,73.8px)] max-md:pt-[var(--cine-section-y)] md:grid-cols-[min(43.045vw,588px)_1fr] md:gap-0">
        <div>
          <h2
            data-cine="experience-title"
            className="max-w-[min(34.159vw,466.6px)] min-w-[16rem] font-display text-display md:sticky md:top-28"
          >
            Where I&apos;ve worked
          </h2>
        </div>

        <div className="flex max-w-[min(36.64vw,500.5px)] min-w-0 flex-col gap-[clamp(2.5rem,3.404vw,46.5px)] max-md:max-w-none md:pt-[min(1.993vw,27.2px)]">
          {experience.map((exp, i) => (
            <article key={exp.company} data-cine={i === 0 ? "experience-item" : undefined}>
              <h3 data-cine={i === 0 ? "experience-item-title" : undefined} className="text-title font-bold">
                {exp.role}
              </h3>
              <p className="mt-2 text-caption">
                <span className="font-bold text-caramel">{exp.company}</span>
                <span aria-hidden> · </span>
                <span className="text-sage">{exp.period}</span>
              </p>
              <p data-cine={i === 0 ? "experience-item-copy" : undefined} className="mt-3 text-copy">
                {exp.description}
              </p>

              {exp.achievements && (
                <ul className="mt-4 space-y-2">
                  {exp.achievements.slice(0, 3).map((a) => (
                    <li key={a} className="flex gap-3 text-copy text-cream/80">
                      <span aria-hidden className="mt-[0.5em] h-1.5 w-1.5 shrink-0 rounded-full bg-caramel" />
                      {a}
                    </li>
                  ))}
                </ul>
              )}

              {exp.toolsUsed && (
                <p className="mt-4 text-caption text-sage">{exp.toolsUsed.join(" · ")}</p>
              )}

              {exp.relatedProjects && (
                <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
                  {exp.relatedProjects.map((p) => (
                    <Link
                      key={p.slug}
                      href={`/projects/${p.slug}`}
                      className="text-caption font-bold text-cream underline decoration-caramel underline-offset-4 hover:text-caramel"
                    >
                      {p.title}
                    </Link>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
