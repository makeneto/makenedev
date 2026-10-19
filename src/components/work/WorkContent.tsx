"use client"

import { useMemo } from "react"

import PostHeader from "./WorkHeader"
import { processBlogContent } from "@/utils/processBlogContent"
import { Engagement } from "../blog/Engagement"
import { PostContentProps } from "@/interfaces/post"
import { PostControls } from "../post/controls/PostControls"

export function WorkContent({ post, previous, next }: PostContentProps) {
  const { html } = useMemo(
    () => processBlogContent(post.content),
    [post.content]
  )

  return (
    <article>
      <PostHeader post={post} />

      <div
        dangerouslySetInnerHTML={{ __html: html }}
        className="mt-20 post-content work-content"
      />

      <Engagement post={post} basePath="work" />

      <PostControls
        variant="work"
        previous={previous}
        next={next}
        basePath="/work"
      />
    </article>
  )
}
