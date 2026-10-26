import { createWispResource } from "@/features/wisp/create-wisp-resource"

export const EXPERIENCE_ID = process.env.NEXT_PUBLIC_EXPERIENCE_ID || ""

const experiences = createWispResource(EXPERIENCE_ID)

export type ExperiencePost = Awaited<
  ReturnType<typeof experiences.getHomeData>
>["posts"][number]

export const getExperiencePosts = experiences.getPosts
export const getExperiencePost = experiences.getPost
export const getExperiencePostBySlug = experiences.getPostBySlug
export const getExperienceTags = experiences.getTags
export const getExperienceHomeData = experiences.getHomeData

export default experiences.client
export { experiences }
