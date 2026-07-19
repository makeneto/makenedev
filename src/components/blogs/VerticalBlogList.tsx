import { ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { blogs } from "../../data/blogs"
import ShowcaseHeader from "../showcase-section/ShowcaseHeader"
import LastBlog from "./LastBlog"

export default function VerticalBlogList() {
  const blogsList = blogs.slice(1, 4)

  return (
    <section className="mt-52 sm:mt-66">
      <ShowcaseHeader
        title="Last Posts"
        linkSection="/blog"
        textLink="View all"
      />

      <LastBlog />

      <ul className="verticalBlogs">
        {blogsList.map((blog) => (
          <Link
            key={blog.link}
            href={blog.link}
            className="verticalBlogs__item"
            aria-label={`Read more about ${blog.title}`}
          >
            <article>
              <p>{blog.date}</p>

              <div>
                <h2 className="line-clamp-2">{blog.title}</h2>
                <span className="line-clamp-2 md:line-clamp-1">
                  {blog.description}
                </span>
              </div>
            </article>

            <ArrowUpRight />
          </Link>
        ))}
      </ul>
    </section>
  )
}
