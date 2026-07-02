import { Link } from "react-router-dom"
import { blogs } from "../../data/blogs"

export default function LastBlog() {
  const lastBlog = blogs[0]
  const { link, category, date, title, description, author, cover } = lastBlog

  return (
    <section className="blog-lastBlog">
      <Link to={link} className="blog-lastBlog-card">
        <div>
          <span>{category}</span>
          <h1>{title}</h1>
          <p>{description}</p>
          <div className="flex items-center justify-between">
            <span>By {author}</span>
            <span>{date}</span>
          </div>
        </div>
        <img src={cover} alt={title + `Cover`} />
      </Link>
    </section>
  )
}
