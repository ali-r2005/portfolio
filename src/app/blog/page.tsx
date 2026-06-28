import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { blogPosts } from "@/data/blog-posts"

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-3xl p-6">
      <div className="mb-6 border-b border-border pb-4">
        <h1 className="text-lg font-semibold text-foreground">Blog</h1>
        <p className="text-sm text-muted-foreground">Articles and thoughts</p>
      </div>

      <div className="space-y-4">
        {blogPosts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <Card className="border-border bg-card transition-colors hover:bg-muted/50">
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between">
                  <CardTitle className="text-base text-foreground">{post.title}</CardTitle>
                  <span className="shrink-0 text-xs text-muted-foreground">{post.date}</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed text-text-secondary">{post.excerpt}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
