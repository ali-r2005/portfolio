import fs from "fs"
import path from "path"
import matter from "gray-matter"

export interface PostData {
  slug: string
  title: string
  date: string
  excerpt: string
  coverImage: string
  content: string
}

const postsDirectory = path.join(process.cwd(), "posts")

export function getSortedPostsData(): Omit<PostData, "content">[] {
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, "")
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, "utf8")
    const matterResult = matter(fileContents)

    return {
      slug,
      title: matterResult.data.title as string,
      date: matterResult.data.date as string,
      excerpt: matterResult.data.excerpt as string,
      coverImage: matterResult.data.coverImage as string,
    }
  })

  return allPostsData.sort((a, b) => {
    if (a.date < b.date) return 1
    if (a.date > b.date) return -1
    return 0
  })
}

export function getPostData(slug: string): PostData {
  const fullPath = path.join(postsDirectory, `${slug}.md`)
  const fileContents = fs.readFileSync(fullPath, "utf8")
  const matterResult = matter(fileContents)

  return {
    slug,
    title: matterResult.data.title as string,
    date: matterResult.data.date as string,
    excerpt: matterResult.data.excerpt as string,
    coverImage: matterResult.data.coverImage as string,
    content: matterResult.content,
  }
}

export function getAllPostSlugs(): string[] {
  const fileNames = fs.readdirSync(postsDirectory)
  return fileNames.map((fileName) => fileName.replace(/\.md$/, ""))
}
