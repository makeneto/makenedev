import { buildWispClient } from "@wisp-cms/client"

export const BOOK_ID = process.env.NEXT_PUBLIC_BOOK_ID || ""

const bookClient = buildWispClient({ blogId: BOOK_ID })

export async function getBooks() {
  try {
    const result = await bookClient.getPosts({ limit: "all" })
    return result.posts ?? []
  } catch {
    return []
  }
}

export async function getBook(slug: string) {
  try {
    const result = await bookClient.getPost(slug)
    return result.post
  } catch {
    return null
  }
}

export async function getBookTags() {
  try {
    const result = await bookClient.getTags(1, "all")
    return result.tags ?? []
  } catch {
    return []
  }
}

export async function getBooksHomeData() {
  const [posts, tags] = await Promise.all([getBooks(), getBookTags()])
  return { posts, tags }
}

export const revalidate = 300

export default bookClient
export { bookClient }
