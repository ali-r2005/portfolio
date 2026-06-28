import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"

export default function HomePage() {
  return (
    <div className="mx-auto max-w-3xl p-6">
      <div className="mb-6 flex items-center gap-3 border-b border-border pb-4">
        <div className="relative">
          <Avatar className="h-16 w-16">
            <AvatarImage src="/avatar.png" />
            <AvatarFallback className="bg-primary text-lg text-primary-foreground">D</AvatarFallback>
          </Avatar>
          <span className="absolute bottom-0 right-0 h-4 w-4 rounded-full border-2 border-background bg-success" />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-semibold text-foreground">Dev</h1>
            <Badge variant="secondary" className="bg-muted text-xs text-muted-foreground">he/him</Badge>
          </div>
          <p className="text-sm text-muted-foreground">Software Developer</p>
          <div className="mt-0.5 flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-success" />
            <span className="text-xs text-muted-foreground">Online</span>
          </div>
        </div>
      </div>

      <div className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        <span className="h-3 w-3 rounded-full bg-primary" />
        About Me
      </div>

      <Card className="mb-8 border-border bg-card p-4">
        <p className="leading-relaxed text-foreground">
          Hey! I&apos;m a software developer who loves building tools that make other developers&apos; lives easier.
          I specialize in full-stack web development with React, TypeScript, and Go, and I&apos;m passionate
          about distributed systems, real-time applications, and developer tooling.
        </p>
        <p className="mt-3 leading-relaxed text-text-secondary">
          When I&apos;m not coding, you&apos;ll find me contributing to open-source projects, writing about tech,
          or exploring new programming languages. I believe in clean code, good documentation, and
          building things that matter.
        </p>
      </Card>

      <div className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        <span className="h-3 w-3 rounded-full bg-primary" />
        Quick Links
      </div>

      <div className="grid grid-cols-2 gap-3">
        <Card className="border-border bg-card p-4 transition-colors hover:bg-muted">
          <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-primary/20">
            <svg className="h-4 w-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z" />
            </svg>
          </div>
          <h3 className="text-sm font-medium text-foreground">GitHub</h3>
          <p className="text-xs text-muted-foreground">@dev</p>
        </Card>
        <Card className="border-border bg-card p-4 transition-colors hover:bg-muted">
          <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-primary/20">
            <svg className="h-4 w-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </div>
          <h3 className="text-sm font-medium text-foreground">LinkedIn</h3>
          <p className="text-xs text-muted-foreground">/in/dev</p>
        </Card>
      </div>
    </div>
  )
}
