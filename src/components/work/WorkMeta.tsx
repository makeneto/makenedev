import React from "react"
import Image from "next/image"
import Link from "next/link"

import { site } from "@/constants/site"
import { RiGithubLine } from "@remixicon/react"
import { ArticleMetaProps } from "../blog/ArticleMeta"

export function WorkMeta({ post }: ArticleMetaProps) {
  const { slug } = post

  return (
    <React.Fragment>
      <div>
        <p>Contributors</p>

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
        <p>Repository</p>

        <Link
          href={`${site.github}/${slug}`}
          className="flex items-center gap-2"
        >
          <RiGithubLine size={14} strokeWidth={1.8} />
          makeneto/{slug}
        </Link>
      </div>
    </React.Fragment>
  )
}
