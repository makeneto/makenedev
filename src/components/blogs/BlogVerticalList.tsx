import { ExternalLink } from "lucide-react"
import { blogs } from "../../data/blogs"
import ShowcaseHeader from "../showcase-section/ShowcaseHeader"
import { Link } from "react-router-dom"

export default function BlogVerticalList() {
  const blogsList = blogs.slice(0, 5)

  return (
    <section className="mt-28 sm:mt-70">
      <ShowcaseHeader title="Posts" viewAll="/blog" />

      <ul className="verticalBlogs">
        {blogsList.map((blog) => (
          <Link key={blog.link} to={blog.link}>
            <div>
              <p>{blog.date}</p>
              <h3>{blog.title}</h3>
            </div>

            <ExternalLink />
          </Link>
        ))}
      </ul>
    </section>
  )
}
