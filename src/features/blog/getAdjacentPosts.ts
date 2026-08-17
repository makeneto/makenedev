import { AdjacentItems } from "@/interfaces/post"
import { getAdjacentItems } from "../wisp/getAdjacentItems"
import { getPosts } from "@/features/blog/wispBlog"

export function getAdjacentPosts(slug: string): Promise<AdjacentItems> {
  return getAdjacentItems(slug, getPosts)
}
