import { GetPostResult, GetPostsResult } from "@wisp-cms/client"

export type BlogPost = NonNullable<GetPostsResult["posts"]>[number]
export type BlogArticle = NonNullable<GetPostResult["post"]>

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
