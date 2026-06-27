import { Link } from "react-router-dom"
import { ArrowUpRight } from "lucide-react"

import { blogs } from "../../data/blogs"
import { usePagination } from "../../hooks/usePagination"
import type { Blog } from "../../interfaces/blog"

interface BlogsGridProps {
  items?: Blog[]
}

export default function BlogsGrid({ items }: BlogsGridProps) {
  const itemsPerPage = 4

  const pagination = usePagination<Blog>({
    items: blogs,
    itemsPerPage,
  })

  const visibleItems = items ?? pagination.visibleItems

  return (
    <ul className="blog-list">
      {visibleItems.map((blog) => (
        <li key={`${blog.link}-${blog.title}`} className="blog-list__item">
          <Link to={blog.link} className="blog-card">
            <div className="blog-card__media">
              <img
                src={blog.cover}
                alt={blog.title}
                className="blog-card__cover"
              />
              <div className="blog-card__overlay">
                <div className="grid">
                  <span className="blog-card__author blog-card__author--overlay">
                    {blog.author}
                  </span>
                  <span className="blog-card__date">{blog.date}</span>
                </div>

                <span className="blog-card__category">{blog.category}</span>
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
