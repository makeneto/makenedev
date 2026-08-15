import { createWispResource } from "@/features/wisp/createWispResource"

export const GEARS_ID = process.env.NEXT_PUBLIC_GEARS_ID || ""

const gearClient = createWispResource(GEARS_ID)

export const getGears = gearClient.getPosts
export const getGear = gearClient.getPost
export const getGearBySlug = gearClient.getPostBySlug
export const getGearTags = gearClient.getTags
export const getGearsHomeData = gearClient.getHomeData

export default gearClient.client
export { gearClient }
