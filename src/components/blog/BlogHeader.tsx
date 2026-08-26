import Link from "next/link"
import { RiArrowRightSLine } from "@remixicon/react"
import { CalendarDays } from "lucide-react"

import { formatLongDate } from "@/utils/formatDate"
import { BlogArticle } from "@/services/wisp"
import { Button } from "../ui/button"
import MakeneProfileLink from "../post/MakeneProfileLink"

export default function BlogHeader({ post }: { post: BlogArticle }) {
  const { publishedAt, createdAt } = post
  const date = publishedAt || createdAt

  return (
    <header className="grid gap-5 sm:gap-5">
      <span className="flex items-center gap-1">
        <Link href="/blog">
          <Button variant="link" className="p-0">
            Blog
          </Button>
        </Link>
        <RiArrowRightSLine size={16} />
        <h1 className="line weak-text line-clamp-1">{post.title}</h1>
      </span>

      <div className="post-intro">
        <h1>{post.title}</h1>

        <div className="flex items-center gap-3 text-sm">
          <MakeneProfileLink />

          <div className="w-px h-5 bg-zinc-200 dark:bg-zinc-800" />

          <span className="weak-text flex items-center gap-2">
            <CalendarDays size={14} /> {date ? formatLongDate(date) : "No data"}
          </span>
        </div>

        <p className="sm:text-[1.04rem] xl:text-[1.2rem] mt-12">
          {post.description}
        </p>
      </div>
    </header>
  )
}
