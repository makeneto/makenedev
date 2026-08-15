import { createWispResource } from "@/features/wisp/createWispResource"

export const BOOK_ID = process.env.NEXT_PUBLIC_BOOK_ID || ""

const bookClient = createWispResource(BOOK_ID)

export const getBooks = bookClient.getPosts
export const getBook = bookClient.getPost
export const getBookBySlug = bookClient.getPostBySlug
export const getBookTags = bookClient.getTags
export const getBooksHomeData = bookClient.getHomeData

export default bookClient.client
export { bookClient }
