import { CalendarDays, Clock3 } from "lucide-react"

import { formatLongDate } from "@/utils/format-date"
import { BlogArticle, readingTime } from "@/services/wisp"
import MakeneProfileLink from "./makene-profile-link"

export default function BlogHeader({ post }: { post: BlogArticle }) {
  const { publishedAt, createdAt, content } = post
  const date = publishedAt || createdAt

  return (
    <header className="grid gap-5 sm:gap-5">
      <MakeneProfileLink />

      <div className="post-intro">
        <h1>{post.title}</h1>

        <div className="flex items-center gap-3 text-sm mt-2">
          <span className="weak-text flex items-center gap-2">
            <CalendarDays size={14} /> {date ? formatLongDate(date) : "No data"}
          </span>

          <div className="w-px h-4 bg-zinc-800" />

          <span className="weak-text flex items-center gap-2">
            <Clock3 size={14} strokeWidth={1.8} />
            <p>{readingTime(content)}</p>
          </span>
        </div>

        <p className="sm:text-[1.04rem] xl:text-[1.05rem] mt-12">
          {post.description}
        </p>
      </div>
    </header>
  )
}
