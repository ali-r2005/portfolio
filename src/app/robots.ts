import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/_next/static/"],
    },
    sitemap: "https://portfolio-tan-six-064qa7n1jx.vercel.app/sitemap.xml",
  }
}
