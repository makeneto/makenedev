import { buildWispClient } from "@wisp-cms/client"

export const BLOG_ID = process.env.NEXT_PUBLIC_BLOG_ID || ""

const blog = buildWispClient({ blogId: BLOG_ID })

export async function getPosts() {
  try {
    const result = await blog.getPosts({ limit: "all" })
    return result.posts ?? []
  } catch {
    return []
  }
}

export async function getPost(slug: string) {
  try {
    const result = await blog.getPost(slug)
    return result.post
  } catch {
    return null
  }
}

export async function getTags() {
  try {
    const result = await blog.getTags(1, "all")
    return result.tags ?? []
  } catch {
    return []
  }
}

export async function getBlogHomeData() {
  const [posts, tags] = await Promise.all([getPosts(), getTags()])
  return { posts, tags }
}

export const revalidate = 300

export default blog
export { blog }
