import { blogs } from "../../data/blogs"
import { ViewAllLink } from "../showcase-section/ViewAllLink"
import BlogsGrid from "./BlogsGrid"
import type { Blog } from "../../interfaces/blog"

export default function BlogList() {
  const firstBlogs: Blog[] = blogs.slice(0, 5)
  const hasMoreBlogs = blogs.length > 5

  return (
    <section className="blog-list-section">
      <BlogsGrid items={firstBlogs} />

      {hasMoreBlogs && <ViewAllLink to="/blogs" />}
    </section>
  )
}
