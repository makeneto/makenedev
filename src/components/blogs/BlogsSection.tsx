import BlogsGrid from "./BlogsGrid"
import LastBlog from "./LastBlog"

export default function BlogsSection() {
  return (
    <section className="blog-section">
      <LastBlog />
      <BlogsGrid />
    </section>
  )
}
