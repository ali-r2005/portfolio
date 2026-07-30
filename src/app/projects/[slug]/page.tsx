import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { projects } from "@/data/projects"

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) return {}
  return { title: `${project.title} — Projects`, description: project.description }
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) notFound()

  return (
    <div className="mx-auto max-w-6xl p-8">
      <Link
        href="/projects"
        className="mb-6 flex items-center gap-2 text-base text-muted-foreground transition-colors hover:text-foreground"
      >
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
        Back to projects
      </Link>

      {project.image && (
        <div className="relative mb-8 h-80 w-full overflow-hidden rounded-lg">
          <Image src={project.image} alt={project.title} fill className="object-cover" priority />
        </div>
      )}

      <div className="mb-8 border-b border-border pb-8">
        <h1 className="text-4xl font-semibold text-foreground">{project.title}</h1>
        <p className="mt-2 text-base text-text-secondary">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <Badge key={t} variant="secondary" className="bg-sidebar text-sm text-muted-foreground">
              {t}
            </Badge>
          ))}
        </div>
        <div className="mt-4 flex gap-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-primary hover:underline"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              Source
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-primary hover:underline"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
              Live
            </a>
          )}
        </div>
      </div>

      {project.overview && (
        <Card className="mb-6 border-border bg-card p-6">
          <h2 className="mb-3 text-base font-semibold uppercase tracking-wider text-muted-foreground">Overview</h2>
          <p className="text-base leading-relaxed text-text-secondary">{project.overview}</p>
        </Card>
      )}

      {project.features && (
        <Card className="mb-6 border-border bg-card p-6">
          <h2 className="mb-3 text-base font-semibold uppercase tracking-wider text-muted-foreground">Key Features</h2>
          <ul className="space-y-2">
            {project.features.map((f) => (
              <li key={f} className="flex items-start gap-2 text-base text-text-secondary">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                {f}
              </li>
            ))}
          </ul>
        </Card>
      )}

      {project.architecture && (
        <Card className="border-border bg-card p-6">
          <h2 className="mb-3 text-base font-semibold uppercase tracking-wider text-muted-foreground">Architecture</h2>
          <p className="text-base leading-relaxed text-text-secondary">{project.architecture}</p>
        </Card>
      )}
    </div>
  )
}
