import { AdjacentItems } from "@/interfaces/post"
import { getAdjacentItems } from "../wisp/get-adjacent-items"
import { getPosts } from "@/features/blog/wisp-blog"

export function getAdjacentPosts(slug: string): Promise<AdjacentItems> {
  return getAdjacentItems(slug, getPosts)
}
