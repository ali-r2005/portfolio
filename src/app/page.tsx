import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"

export default function HomePage() {
  return (
    <div className="mx-auto max-w-6xl p-8">
      <div className="mb-12 flex items-center gap-6 border-b border-border pb-8">
        <div className="relative">
          <Avatar className="h-24 w-24">
            <AvatarImage src="/avatar.png" />
            <AvatarFallback className="bg-primary text-2xl text-primary-foreground">D</AvatarFallback>
          </Avatar>
          <span className="absolute bottom-0 right-0 h-5 w-5 rounded-full border-2 border-background bg-success" />
        </div>
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-4xl font-semibold text-foreground">Dev</h1>
            <Badge variant="secondary" className="bg-muted text-xs text-muted-foreground">he/him</Badge>
          </div>
          <p className="mt-2 text-base text-muted-foreground">Software Developer</p>
          <div className="mt-2 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-success" />
            <span className="text-sm text-muted-foreground">Online</span>
          </div>
        </div>
      </div>

      <div className="mb-6 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
        <span className="h-4 w-4 rounded-full bg-primary" />
        About Me
      </div>

      <Card className="mb-16 border-border bg-card p-8">
        <p className="text-lg leading-relaxed text-foreground">
          Hey! I&apos;m a software developer who loves building tools that make other developers&apos; lives easier.
          I specialize in full-stack web development with React, TypeScript, and Go, and I&apos;m passionate
          about distributed systems, real-time applications, and developer tooling.
        </p>
        <p className="mt-6 text-lg leading-relaxed text-text-secondary">
          When I&apos;m not coding, you&apos;ll find me contributing to open-source projects, writing about tech,
          or exploring new programming languages. I believe in clean code, good documentation, and
          building things that matter.
        </p>
      </Card>

      <div className="mb-6 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
        <span className="h-4 w-4 rounded-full bg-primary" />
        Quick Links
      </div>

      <div className="grid grid-cols-2 gap-6">
        <Card className="border-border bg-card p-8 transition-colors hover:bg-muted">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/20">
            <svg className="h-6 w-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z" />
            </svg>
          </div>
          <h3 className="text-base font-medium text-foreground">GitHub</h3>
          <p className="mt-1 text-sm text-muted-foreground">@dev</p>
        </Card>
        <Card className="border-border bg-card p-8 transition-colors hover:bg-muted">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/20">
            <svg className="h-6 w-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </div>
          <h3 className="text-base font-medium text-foreground">LinkedIn</h3>
          <p className="mt-1 text-sm text-muted-foreground">/in/dev</p>
        </Card>
      </div>
    </div>
  )
}
