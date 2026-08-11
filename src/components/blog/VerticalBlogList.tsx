import { getBlogHomeData } from "@/services/blog"
import BlogRow from "./BlogRow"

export default async function VerticalBlogList({
  isHome = false,
}: {
  isHome?: boolean
}) {
  const { posts } = await getBlogHomeData()
  const recent = isHome ? posts.slice(1, 7) : posts.slice(1)

  return (
    <ul className="verticalBlogs">
      {recent.map((post) => (
        <BlogRow key={post.slug} post={post} />
      ))}
    </ul>
  )
}
