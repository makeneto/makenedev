import { getExperiencePosts } from "./wispExperiences"
import { getAdjacentItems } from "@/features/wisp/getAdjacentItems"
import { AdjacentItems } from "@/interfaces/post"

export function getAdjacentExperiences(slug: string): Promise<AdjacentItems> {
  return getAdjacentItems(slug, getExperiencePosts)
}
