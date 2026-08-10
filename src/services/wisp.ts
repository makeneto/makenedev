import {
  buildWispClient,
  type GetPostResult,
  type GetPostsResult,
} from "@wisp-cms/client"

export const BLOG_ID = process.env.NEXT_PUBLIC_BLOG_ID || ""

export type BlogPost = NonNullable<GetPostsResult["posts"]>[number]
export type BlogArticle = NonNullable<GetPostResult["post"]>

const wisp = buildWispClient({ blogId: BLOG_ID })

export async function getPosts() {
  try {
    const result = await wisp.getPosts({ limit: "all" })
    return result.posts ?? []
  } catch {
    return []
  }
}

export async function getPost(slug: string) {
  try {
    const result = await wisp.getPost(slug)
    return result.post
  } catch {
    return null
  }
}

export async function getTags() {
  try {
    const result = await wisp.getTags(1, "all")
    return result.tags ?? []
  } catch {
    return []
  }
}

export function readingTime(content?: string | null) {
  const words =
    content
      ?.replace(/<[^>]*>/g, " ")
      .trim()
      .split(/\s+/)
      .filter(Boolean).length ?? 0
  return `${Math.max(1, Math.ceil(words / 200))} min`
}

export function excerpt(post: BlogPost | BlogArticle) {
  if (post.description) return post.description

  const content = "content" in post ? post.content : null

  return (
    content
      ?.replace(/<[^>]*>/g, " ")
      .replace(/\s+/g, " ")
      .trim()
      .slice(0, 150) + "…"
  )
}

export function coverImage(image?: string | null) {
  return (
    image ||
    "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1600&q=85"
  )
}

export async function getHomeData() {
  const [posts, tags] = await Promise.all([getPosts(), getTags()])
  return { posts, tags }
}

export const revalidate = 300

export default wisp
export { wisp }
