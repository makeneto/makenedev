import { createWispResource } from "@/features/wisp/createWispResource"

export const BLOG_ID = process.env.NEXT_PUBLIC_BLOG_ID || ""

const blog = createWispResource(BLOG_ID)

export const getPosts = blog.getPosts
export const getPost = blog.getPost
export const getPostBySlug = blog.getPostBySlug
export const getTags = blog.getTags
export const getBlogHomeData = blog.getHomeData
export const revalidate = 300

export default blog.client
export { blog }
