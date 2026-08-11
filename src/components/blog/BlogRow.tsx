import { FileText } from "lucide-react"
import Link from "next/link"

import { BlogPost } from "@/services/wisp"
import { formatDate } from "@/utils/formatDate"

export default function BlogRow({ post }: { post: BlogPost }) {
  const { slug, title, publishedAt, createdAt } = post

  return (
    <Link
      href={`/blog/${slug}`}
      className="verticalBlogs__item"
      aria-label={`Read more about ${title}`}
    >
      <FileText className="w-12 h-12" strokeWidth={1} />

      <article>
        <h2 className="line-clamp-2">{title}</h2>

        <p>{formatDate(publishedAt || createdAt)}</p>
      </article>
    </Link>
  )
}
