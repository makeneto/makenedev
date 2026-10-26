"use client"

import { useMemo } from "react"

import ExperienceHeader from "@/components/experience/experience-header"
import { PostContentProps } from "@/interfaces/post"
import { processBlogContent } from "@/utils/process-blog-content"
import { PostControls } from "../post/controls/post-controls"

export function ExperienceContent({ post, previous, next }: PostContentProps) {
  const { html } = useMemo(
    () => processBlogContent(post.content),
    [post.content]
  )

  return (
    <article>
      <ExperienceHeader post={post} />

      <div
        dangerouslySetInnerHTML={{ __html: html }}
        className="mt-20 post-content blog-content"
      />

      <PostControls
        variant="work"
        previous={previous}
        next={next}
        basePath="/experience"
      />
    </article>
  )
}
