import type { Blog } from "../../interfaces/blog"
import BlogCard from "./BlogCard"

interface BlogsGridProps {
  blogs: Blog[]
}

export default function BlogsGrid({ blogs }: BlogsGridProps) {
  return (
    <ul className="blog-list">
      {blogs.map((blog) => (
        <li key={`${blog.link}-${blog.title}`} className="blog-list__item">
          <BlogCard blog={blog} />
        </li>
      ))}
    </ul>
  )
}
