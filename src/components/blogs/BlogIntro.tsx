import Image from "next/image"
import Link from "next/link"
import { useMediaQuery } from "react-responsive"
import { RiArrowRightSLine } from "@remixicon/react"
import { CalendarDays } from "lucide-react"

import { BlogArticle } from "@/services/wisp"
import { formatDate } from "@/utils/formatDate"

export default function BlogIntro({ post }: { post: BlogArticle }) {
  const isMobile = useMediaQuery({ maxWidth: 884 })
  const date = post.publishedAt || post.createdAt

  return (
    <header className="grid gap-5 sm:gap-5">
      <div className="text-sm gap-2 flex items-center justify-between">
        {isMobile ? (
          <Link href="/about" className="flex items-center gap-2">
            <Image
              src="https://github.com/makeneto.png"
              alt="Makene's profile"
              width={20}
              height={20}
              className="rounded-full"
            />

            <p>Makene Neto</p>
          </Link>
        ) : (
          <span className="flex items-center gap-1">
            <Link href="/blog">Blog</Link> <RiArrowRightSLine size={16} />{" "}
            <p className="line weak-text">{post.title}</p>
          </span>
        )}

        <span className="weak-text flex items-center gap-2">
          <CalendarDays size={14} /> {date ? formatDate(date) : "No data"}
        </span>
      </div>

      <div className="blog-intro">
        <h1>{post.title}</h1>

        <p>{post.description}</p>
      </div>
    </header>
  )
}
