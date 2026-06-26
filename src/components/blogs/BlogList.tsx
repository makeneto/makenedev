import { Link } from "react-router-dom"
import { blogs } from "../../data/blogs"
import { ArrowUpRight } from "lucide-react"

export default function BlogList() {
  return (
    <ul className="blog-list">
      {blogs.map((blog) => (
        <li key={`${blog.link}-${blog.title}`} className="blog-list__item">
          <Link to={blog.link} className="blog-card">
            <div className="blog-card__media">
              <img
                src={blog.cover}
                alt={blog.title}
                className="blog-card__cover"
              />
              <div className="blog-card__overlay">
                <span className="blog-card__category">{blog.category}</span>
                <span className="blog-card__date">{blog.date}</span>
                <span className="blog-card__author blog-card__author--overlay">
                  By {blog.author}
                </span>
              </div>
            </div>
            <div className="blog-card__content">
              <h3 className="blog-card__title">{blog.title}</h3>
              <p className="blog-card__description">{blog.description}</p>
              <div className="blog-card__footer">
                <span className="blog-card__link">
                  Read more <ArrowUpRight />
                </span>
              </div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  )
}
