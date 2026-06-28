import Link from "next/link"
import { notFound } from "next/navigation"
import { Card } from "@/components/ui/card"
import { blogPosts } from "@/data/blog-posts"

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    notFound()
  }

  const lines = post.content.split("\n")

  return (
    <div className="mx-auto max-w-3xl p-6">
      <Link
        href="/blog"
        className="mb-4 flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
        Back to blog
      </Link>

      <div className="mb-6 border-b border-border pb-4">
        <h1 className="text-lg font-semibold text-foreground">{post.title}</h1>
        <p className="text-sm text-muted-foreground">{post.date}</p>
      </div>

      <Card className="border-border bg-card p-6">
        <div className="prose prose-invert prose-sm max-w-none">
          {lines.map((line, i) => {
            if (line.startsWith("## ")) {
              return (
                <h2 key={i} className="mb-3 mt-6 text-base font-semibold text-foreground first:mt-0">
                  {line.slice(3)}
                </h2>
              )
            }
            if (line.trim() === "") {
              return <div key={i} className="h-3" />
            }
            return (
              <p key={i} className="mb-2 leading-relaxed text-text-secondary last:mb-0">
                {line}
              </p>
            )
          })}
        </div>
      </Card>
    </div>
  )
}
