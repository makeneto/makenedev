import { buildWispClient } from "@wisp-cms/client"

export const GEARS_ID = process.env.NEXT_PUBLIC_GEARS_ID || ""

const gearClient = buildWispClient({ blogId: GEARS_ID })

export async function getGears() {
  try {
    const result = await gearClient.getPosts({ limit: "all" })
    return result.posts ?? []
  } catch {
    return []
  }
}

export async function getGear(slug: string) {
  try {
    const result = await gearClient.getPost(slug)
    return result.post
  } catch {
    return null
  }
}

export async function getGearTags() {
  try {
    const result = await gearClient.getTags(1, "all")
    return result.tags ?? []
  } catch {
    return []
  }
}

export async function getGearsHomeData() {
  const [posts, tags] = await Promise.all([getGears(), getGearTags()])
  return { posts, tags }
}

export const revalidate = 300

export default gearClient
export { gearClient }
