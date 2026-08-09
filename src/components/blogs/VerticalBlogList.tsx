import { FileText } from "lucide-react"
import Link from "next/link"
import { getHomeData } from "@/services/wisp"
import { formatDate } from "@/utils/formatDate"

export default async function VerticalBlogList({
  isHome = false,
}: {
  isHome?: boolean
}) {
  const { posts } = await getHomeData()
  const recent = isHome ? posts.slice(1, 7) : posts.slice(1)

  return (
    <ul className="verticalBlogs">
      {recent.map((blog, index) => (
        <Link
          key={`${index}-${blog.title}`}
          href={`/blog/${blog.slug}`}
          className="verticalBlogs__item"
          aria-label={`Read more about ${blog.title}`}
        >
          <FileText strokeWidth={1} />

          <article>
            <h2 className="line-clamp-2">{blog.title}</h2>
            <p>{formatDate(blog.publishedAt || blog.createdAt)}</p>
          </article>
        </Link>
      ))}
    </ul>
  )
}
