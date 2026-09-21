import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { getSortedPostsData } from "@/lib/posts"
import { BASE_URL } from "@/lib/constants"

import { JsonLd } from "@/components/json-ld"

export const metadata: Metadata = {
  title: "Blog",
  description: "Articles, tutorials, and technical thoughts on full-stack development, business automation, and software engineering by Ali Rami.",
  alternates: {
    canonical: `${BASE_URL}/blog`,
  },
  openGraph: {
    title: "Blog | Ali Rami",
    description: "Articles, tutorials, and technical thoughts on full-stack development, business automation, and software engineering by Ali Rami.",
    url: `${BASE_URL}/blog`,
  },
}

export default function BlogPage() {
  const posts = getSortedPostsData()

  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Ali Rami's Blog",
    "description": "Articles, tutorials, and technical thoughts on full-stack development, business automation, and software engineering.",
    "url": `${BASE_URL}/blog`,
    "blogPost": posts.map((post) => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.excerpt,
      "datePublished": post.date,
      "url": `${BASE_URL}/blog/${post.slug}`,
      "image": post.coverImage.startsWith("http") ? post.coverImage : `${BASE_URL}${post.coverImage}`
    }))
  }

  return (
    <div className="mx-auto max-w-6xl p-4 sm:p-6 md:p-8">
      <JsonLd data={jsonLdData} />
      <div className="mb-8 border-b border-border pb-8">
        <h1 className="text-3xl font-semibold text-foreground md:text-4xl">Blog</h1>
        <p className="mt-2 text-base text-muted-foreground">Articles and thoughts</p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <Card className="overflow-hidden border-border bg-card pt-0 transition-colors hover:bg-muted/50">
              <div className="relative h-56 -mx-(--card-spacing) w-auto">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader className="pb-3 pt-6">
                <div className="flex items-start justify-between gap-4">
                  <CardTitle className="text-lg text-foreground">{post.title}</CardTitle>
                  <span className="shrink-0 text-sm text-muted-foreground">{post.date}</span>
                </div>
              </CardHeader>
              <CardContent className="pb-6">
                <p className="text-base leading-relaxed text-text-secondary">{post.excerpt}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
