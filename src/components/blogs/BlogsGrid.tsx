import { blogs } from "../../data/blogs"
import BlogCard from "./BlogCard"

export default function BlogsGrid() {
  return (
    <ul className="blog-list">
      {blogs.slice(1).map((blog) => (
        <li key={`${blog.link}-${blog.title}`} className="blog-list__item">
          <BlogCard blog={blog} />
        </li>
      ))}
    </ul>
  )
}
