import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { getSortedPostsData } from "@/lib/posts"
import { AdSlider } from "@/components/ad-slider"

export default function HomePage() {
  const recentPosts = getSortedPostsData().slice(0, 3)

  return (
    <div className="w-full">
      {/* Banner Section */}
      <div className="relative h-64 w-full overflow-hidden bg-muted">
        <Image
          src="/380cd3195922117.66168b374f719.gif"
          alt="Profile Banner"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="mx-auto flex w-[80%] items-start gap-0">
        {/* Left Sidebar — Recent Posts */}
        <aside className="hidden w-72 shrink-0 pt-8 lg:block">
          <div className="sticky top-8 flex flex-col gap-4">
            <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              <span className="h-4 w-4 rounded-full bg-primary" />
              Recent Posts
            </div>
            {recentPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <Card className="overflow-hidden border-border bg-card p-0 transition-colors hover:bg-muted/50">
                  <div className="relative h-28 w-full">
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="line-clamp-2 text-sm font-medium text-foreground">{post.title}</h3>
                    <p className="mt-1 text-xs text-muted-foreground">{post.date}</p>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </aside>

        {/* Main Content */}
        <div className="mx-auto min-w-0 max-w-6xl flex-1 p-8">
          {/* Profile Section */}
          <div className="relative -mt-20 mb-12 flex flex-col gap-6">
            {/* Profile Picture */}
            <div className="relative">
              <div className="relative h-40 w-40 overflow-hidden rounded-2xl border-4 border-background shadow-lg">
                <Image
                  src="/1.gif"
                  alt="Profile Picture"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Profile Info */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <h1 className="text-4xl font-semibold text-foreground">Ali Rami</h1>
                <Badge variant="secondary" className="bg-muted text-xs text-muted-foreground">he/him</Badge>
              </div>
              <p className="text-base text-muted-foreground">Software Developer</p>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-success" />
                <span className="text-sm text-muted-foreground">Online</span>
              </div>
            </div>
          </div>

          {/* About Me Section */}
          <div className="mb-8 border-b border-border pb-8">
            <div className="mb-6 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              <span className="h-4 w-4 rounded-full bg-primary" />
              About Me
            </div>
            <Card className="border-border bg-card p-8">
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
          </div>

        </div>

        {/* Right Sidebar — Ads */}
        <aside className="hidden w-72 shrink-0 pt-8 xl:block">
          <div className="sticky top-8 flex flex-col gap-4">
            <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              <span className="h-4 w-4 rounded-full bg-primary" />
              Ads
            </div>
            <AdSlider />
            <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              <span className="h-4 w-4 rounded-full bg-primary" />
              Quick Links
            </div>
            <div className="grid grid-cols-2 gap-3">
              <a
                href="https://github.com/dev"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-lg border border-border bg-card p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#5865f2]/50 hover:shadow-[0_0_20px_-5px_#5865f2]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#5865f2]/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative flex flex-col items-center gap-2">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#5865f2]/10 transition-all duration-300 group-hover:bg-[#5865f2]/20 group-hover:shadow-[0_0_12px_-2px_#5865f2]">
                    <svg className="h-4 w-4 text-[#5865f2]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                  </div>
                  <div className="text-center">
                    <p className="text-[12px] font-semibold text-foreground">GitHub</p>
                    <p className="text-[11px] text-muted-foreground">@dev</p>
                  </div>
                </div>
              </a>
              <a
                href="https://linkedin.com/in/dev"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-lg border border-border bg-card p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#0a66c2]/50 hover:shadow-[0_0_20px_-5px_#0a66c2]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#0a66c2]/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative flex flex-col items-center gap-2">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0a66c2]/10 transition-all duration-300 group-hover:bg-[#0a66c2]/20 group-hover:shadow-[0_0_12px_-2px_#0a66c2]">
                    <svg className="h-4 w-4 text-[#0a66c2]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </div>
                  <div className="text-center">
                    <p className="text-[12px] font-semibold text-foreground">LinkedIn</p>
                    <p className="text-[11px] text-muted-foreground">/in/dev</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}
