import { FileText } from "lucide-react"
import Link from "next/link"
import { blogs } from "@/data/blogs"

export default function VerticalBlogList({
  isHome = false,
}: {
  isHome?: boolean
}) {
  const blogsList = isHome ? blogs.slice(1, 7) : blogs.slice(1)

  return (
    <ul className="verticalBlogs">
      {blogsList.map((blog, index) => (
        <Link
          key={`${index}-${blog.title}`}
          href={blog.link}
          className="verticalBlogs__item"
          aria-label={`Read more about ${blog.title}`}
        >
          <FileText strokeWidth={1} />

          <article>
            <h2 className="line-clamp-2">{blog.title}</h2>
            <p>{blog.date}</p>
          </article>
        </Link>
      ))}
    </ul>
  )
}
