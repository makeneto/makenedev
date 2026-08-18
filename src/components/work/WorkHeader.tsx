import Link from "next/link"
import { RiArrowRightSLine } from "@remixicon/react"
import { CalendarDays, ExternalLink } from "lucide-react"

import { BlogArticle } from "@/services/wisp"
import { formatLongDate } from "@/utils/formatDate"

export default function WorkHeader({ post }: { post: BlogArticle }) {
  const { publishedAt, createdAt, tags } = post
  const date = publishedAt || createdAt

  const projectLink = tags[0]?.name
  const liveDemoLink = projectLink ? `https://${projectLink}` : "#"

  return (
    <header className="grid gap-5 sm:gap-5">
      <span className="flex items-center gap-1">
        <Link href="/work">Work</Link> <RiArrowRightSLine size={16} />
        <h1 className="line weak-text line-clamp-1">{post.title}</h1>
      </span>

      <div className="post-intro">
        <h1>{post.title}</h1>

        <div className="flex items-center gap-3 text-sm">
          <Link
            href={liveDemoLink}
            target="_blank"
            className="flex items-center gap-1.5 hover:underline"
          >
            <ExternalLink size={14} strokeWidth={1.8} />
            Live Demo
          </Link>

          <div className="w-px h-5 bg-zinc-200 dark:bg-zinc-800" />

          <span className="weak-text flex items-center gap-2">
            <CalendarDays size={14} /> {date ? formatLongDate(date) : "No data"}
          </span>
        </div>
      </div>
    </header>
  )
}
