import { ExternalLink } from "lucide-react"
import { blogs } from "../../data/blogs"
import ShowcaseHeader from "../showcase-section/ShowcaseHeader"
import { Link } from "react-router-dom"

export default function VerticalBlogList() {
  const blogsList = blogs.slice(0, 5)

  return (
    <section className="mt-52 sm:mt-66">
      <ShowcaseHeader
        title="Last Posts"
        linkSection="/blog"
        textLink="View all"
      />

      <ul className="verticalBlogs">
        {blogsList.map((blog) => (
          <Link key={blog.link} to={blog.link}>
            <article>
              <p>{blog.date}</p>

              <div>
                <h3 className="line-clamp-2">{blog.title}</h3>
                <span className="line-clamp-2 md:line-clamp-1">
                  {blog.description}
                </span>
              </div>
            </article>

            <ExternalLink />
          </Link>
        ))}
      </ul>
    </section>
  )
}
