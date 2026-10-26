import { cache } from "react"
import { buildWispClient } from "@wisp-cms/client"

export function createWispResource(blogId: string) {
  const client = buildWispClient({ blogId })

  async function getPosts() {
    try {
      const result = await client.getPosts({ limit: "all" })
      return result.posts ?? []
    } catch {
      return []
    }
  }

  async function getPost(slug: string) {
    try {
      const result = await client.getPost(slug)
      return result.post
    } catch {
      return null
    }
  }

  const getPostBySlug = cache(async (slug: string) => getPost(slug))

  async function getTags() {
    try {
      const result = await client.getTags(1, "all")
      return result.tags ?? []
    } catch {
      return []
    }
  }

  async function getHomeData() {
    const [posts, tags] = await Promise.all([getPosts(), getTags()])
    return { posts, tags }
  }

  return { client, getPosts, getPost, getPostBySlug, getTags, getHomeData }
}
