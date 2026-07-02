import type { Blog } from "../../interfaces/blog"
import BlogsGrid from "./BlogsGrid"
import LastBlog from "./LastBlog"

interface BlogListProps {
  blogs: Blog[]
  showLastBlog: boolean
}

export default function BlogList({ blogs, showLastBlog }: BlogListProps) {
  return (
    <section className="blog-list-section">
      {showLastBlog && <LastBlog />}
      <BlogsGrid blogs={blogs} />
    </section>
  )
}
