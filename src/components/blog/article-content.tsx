"use client"

import { useMemo } from "react"

import { processBlogContent } from "@/utils/process-blog-content"
import { Engagement } from "./engagement"

import { PostContentProps } from "@/interfaces/post"
import BlogHeader from "./blog-header"
import { PostControls } from "@/components/shared/post-controls/post-controls"

export function ArticleContent({ post, previous, next }: PostContentProps) {
  const { html } = useMemo(
    () => processBlogContent(post.content),
    [post.content]
  )

  return (
    <article>
      <BlogHeader post={post} />

      <div
        dangerouslySetInnerHTML={{ __html: html }}
        className="mt-20 post-content blog-content"
      />

      <Engagement post={post} basePath="blog" />

      <PostControls
        previous={previous}
        next={next}
        basePath="/blog"
      />
    </article>
  )
}
