import React from "react"
import Image from "next/image"
import Link from "next/link"
import { Clock3 } from "lucide-react"

import { BlogArticle, readingTime } from "@/services/wisp"
import { site } from "@/constants/site"

export interface ArticleMetaProps {
  post: BlogArticle
}

export function ArticleMeta({ post }: ArticleMetaProps) {
  const { content } = post

  return (
    <React.Fragment>
      <div>
        <p>Author</p>

        <Link href="/about" className="flex items-center gap-2">
          <Image
            src={`${site.github}.png`}
            alt="Makene's profile"
            width={20}
            height={20}
            className="rounded-full"
          />
          <p>{site.dev}</p>
        </Link>
      </div>

      <div>
        <p>Read time</p>

        <span className="flex items-center gap-2">
          <Clock3 size={14} strokeWidth={1.8} />
          <p>{readingTime(content)}</p>
        </span>
      </div>
    </React.Fragment>
  )
}
