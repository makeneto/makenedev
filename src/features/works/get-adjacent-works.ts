import { getPosts } from "./wisp-works"
import { getAdjacentItems } from "@/features/wisp/get-adjacent-items"
import { AdjacentItems } from "@/interfaces/post"

export function getAdjacentWorks(slug: string): Promise<AdjacentItems> {
  return getAdjacentItems(slug, getPosts)
}
