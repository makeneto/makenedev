import { getExperiencePosts } from "./wisp-experiences"
import { getAdjacentItems } from "@/features/wisp/get-adjacent-items"
import { AdjacentItems } from "@/interfaces/post"

export function getAdjacentExperiences(slug: string): Promise<AdjacentItems> {
  return getAdjacentItems(slug, getExperiencePosts)
}
