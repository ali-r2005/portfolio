import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { Card } from "@/components/ui/card"
import { getAllPostSlugs, getPostData } from "@/lib/posts"
import { Markdown } from "@/components/markdown"

export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }))
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  let post
  try {
    post = getPostData(slug)
  } catch {
    notFound()
  }

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

      <div className="relative mb-6 h-64 w-full overflow-hidden rounded-lg">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="mb-6 border-b border-border pb-4">
        <h1 className="text-lg font-semibold text-foreground">{post.title}</h1>
        <p className="text-sm text-muted-foreground">{post.date}</p>
      </div>

      <Card className="border-border bg-card p-6">
        <div className="prose prose-invert prose-sm max-w-none">
          <Markdown content={post.content} />
        </div>
      </Card>
    </div>
  )
}
