import React from "react"
import { Clock3 } from "lucide-react"

import { BlogArticle, readingTime } from "@/services/wisp"

export interface ArticleMetaProps {
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
          <p>{readingTime(content)}</p>
        </span>
      </div>
    </React.Fragment>
  )
}
