import Link from "next/link"
import { blogs } from "../../data/blogs"

interface LastBlogProps {
  isHome?: boolean
  vertical?: boolean
}

export default function LastBlog({ isHome = false, vertical }: LastBlogProps) {
  const lastBlog = blogs[0]
  const { link, category, date, title, description, author, cover } = lastBlog

  return (
    <section className="blog-lastBlog">
      <Link
        href={link}
        aria-label="Read more about this blog post"
        className={`blog-lastBlog__card ${vertical ? "blog-lastBlog__card--vertical" : "blog-lastBlog__card--horizontal"} ${!isHome ? "sticky-blog" : ""}`}
      >
        <section>
          <div>
            <span>{category}</span>
            <h1>{title}</h1>
            <p>{description}</p>
          </div>

          <div className="flex items-center justify-between">
            <span>By {author}</span>
            <span>{date}</span>
          </div>
        </section>
        <img src={cover} alt={title + `Cover`} />
      </Link>
    </section>
  )
}
