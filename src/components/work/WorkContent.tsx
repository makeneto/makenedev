"use client"

import { useMemo } from "react"

import PostHeader from "./WorkHeader"
import { processBlogContent } from "@/utils/processBlogContent"
import { Engagement } from "../blog/Engagement"
import { PostContentProps } from "@/interfaces/post"
import { Controls } from "../post/PostControls"

export function WorkContent({ post, previous, next }: PostContentProps) {
  const { html } = useMemo(
    () => processBlogContent(post.content),
    [post.content],
  )

  return (
    <article>
      <PostHeader post={post} />

      <div
        dangerouslySetInnerHTML={{ __html: html }}
        className="mt-20 post-content work-content"
      />

      <Engagement post={post} basePath="work" />

      <Controls
        variant="work"
        previous={previous}
        next={next}
        basePath="/work"
      />
    </article>
  )
}
