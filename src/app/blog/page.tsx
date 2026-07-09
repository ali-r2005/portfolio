import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { getSortedPostsData } from "@/lib/posts"

export default function BlogPage() {
  const posts = getSortedPostsData()

  return (
    <div className="mx-auto max-w-6xl p-8">
      <div className="mb-8 border-b border-border pb-8">
        <h1 className="text-4xl font-semibold text-foreground">Blog</h1>
        <p className="mt-2 text-base text-muted-foreground">Articles and thoughts</p>
      </div>

      <div className="grid grid-cols-2 gap-8">
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
