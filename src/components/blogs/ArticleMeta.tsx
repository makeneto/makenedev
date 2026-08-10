import { Clock3 } from "lucide-react"
import Image from "next/image"
import { BlogArticle, readingTime } from "@/services/wisp"
import Link from "next/link"
import React from "react"

interface ArticleMetaProps {
  post: BlogArticle
}

export function ArticleMeta({ post }: ArticleMetaProps) {
  const { content } = post

  return (
    <React.Fragment>
      <div>
        <p>Read time</p>

        <span className="flex items-center gap-2">
          <Clock3 size={14} strokeWidth={1.8} />
          {readingTime(content)}
        </span>
      </div>

      <div>
        <p>Author</p>

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
      </div>
    </React.Fragment>
  )
}
