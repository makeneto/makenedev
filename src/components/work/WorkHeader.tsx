import Link from "next/link"
import { RiArrowRightSLine, RiGithubLine } from "@remixicon/react"
import { CalendarDays, Globe } from "lucide-react"

import { BlogArticle } from "@/services/wisp"
import { formatLongDate } from "@/utils/formatDate"
import { site } from "@/constants/site"
import { Button } from "../ui/button"

export default function WorkHeader({ post }: { post: BlogArticle }) {
  const { slug, publishedAt, createdAt, tags } = post
  const date = publishedAt || createdAt

  const projectLink = tags[0]?.name
  const liveDemoLink = projectLink
    ? `https://${projectLink}`
    : `${site.github}/${slug}`

  return (
    <header className="grid gap-5 sm:gap-5">
      <div className="flex items-centers justify-between">
        <span className="flex items-center gap-1">
          <Link href="/work">Work</Link> <RiArrowRightSLine size={16} />
          <h1 className="line weak-text line-clamp-1">{post.title}</h1>
        </span>

        <span className="weak-text text-sm flex items-center gap-2">
          <CalendarDays size={14} /> {date ? formatLongDate(date) : "No data"}
        </span>
      </div>

      <div className="post-intro">
        <h1>{post.title}</h1>

        <div className="flex items-center gap-3 text-sm">
          <Link href={liveDemoLink} target="_blank">
            <Button variant="link" className="p-0">
              <Globe size={14} strokeWidth={1.8} />
              Live Demo
            </Button>
          </Link>

          <div className="w-px h-5 bg-zinc-200 dark:bg-zinc-800" />

          <Link href={`${site.github}/${slug}`}>
            <Button variant="link" className="btn--link p-0">
              <RiGithubLine size={14} strokeWidth={1.8} />
              Repository
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
