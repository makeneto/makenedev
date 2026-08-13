import { Eye } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import React from "react"

import { BlogArticle } from "@/services/wisp"
import useEngagement from "@/hooks/useEngagement"

interface ArticleMetaProps {
  post: BlogArticle
}

export function WorkMeta({ post }: ArticleMetaProps) {
  const { slug } = post
  const { metrics } = useEngagement({ slug })

  return (
    <React.Fragment>
      <div>
        <p>Contributors</p>

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

      <div>
        <p>Metrics</p>

        <span className="flex items-center gap-2">
          <Eye size={14} strokeWidth={1.8} />
          {metrics?.views} views
        </span>
      </div>
    </React.Fragment>
  )
}
