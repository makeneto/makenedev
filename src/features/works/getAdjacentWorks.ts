import { getPosts } from "./wispWorks"
import { getAdjacentItems } from "@/features/wisp/getAdjacentItems"
import { AdjacentItems } from "@/interfaces/post"

export function getAdjacentWorks(slug: string): Promise<AdjacentItems> {
  return getAdjacentItems(slug, getPosts)
}
