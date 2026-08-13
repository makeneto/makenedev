import { createWispResource } from "@/features/wisp/createWispResource"

export const WORKS_ID = process.env.NEXT_PUBLIC_WORKS_ID || ""

const works = createWispResource(WORKS_ID)

export type WorkPost = Awaited<
  ReturnType<typeof works.getHomeData>
>["posts"][number]

export const getPosts = works.getPosts
export const getPost = works.getPost
export const getPostBySlug = works.getPostBySlug
export const getTags = works.getTags
export const getWorkHomeData = works.getHomeData
export const revalidate = 300

export default works.client
export { works }
