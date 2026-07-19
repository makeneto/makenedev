import { ArrowUpRight } from "lucide-react"
import Link from "next/link"
import type { Blog } from "../../interfaces/blog"

export default function BlogCard({ blog }: { blog: Blog }) {
  const { link, cover, title, author, date, category, description } = blog

  return (
    <Link
      href={link}
      className="blog-card"
      aria-label="Read more about this blog post"
    >
      <div className="blog-card__media">
        <img src={cover} alt={title} className="blog-card__cover" />
        <div className="blog-card__overlay">
          <div className="grid">
            <span className="blog-card__author blog-card__author--overlay">
              {author}
            </span>
            <span className="blog-card__date">{date}</span>
          </div>

          <span className="blog-card__category">{category}</span>
        </div>
      </div>

      <div className="blog-card__content">
        <h3 className="blog-card__title">{title}</h3>
        <p className="blog-card__description">{description}</p>
        <div className="blog-card__footer">
          <span className="blog-card__link">
            Read more <ArrowUpRight />
          </span>
        </div>
      </div>
    </Link>
  )
}
