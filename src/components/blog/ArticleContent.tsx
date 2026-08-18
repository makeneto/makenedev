"use client"

import { useMemo } from "react"

import BlogAside from "./BlogAside"
import { processBlogContent } from "@/utils/processBlogContent"
import { Engagement } from "./Engagement"
import { Controls } from "../post/PostControls"
import { PostContentProps } from "@/interfaces/post"
import BlogHeader from "./BlogHeader"

export function ArticleContent({ post, previous, next }: PostContentProps) {
  const { html } = useMemo(
    () => processBlogContent(post.content),
    [post.content],
  )

  return (
    <article className="relative grid sm:grid-cols-[70%_auto] gap-20 xl:gap-15">
      <div className="relative">
        <BlogHeader post={post} />

        <div
          dangerouslySetInnerHTML={{ __html: html }}
          className="mt-20 post-content blog-content"
        />

        <Engagement post={post} basePath="blog" />

        <Controls
          variant="blog"
          previous={previous}
          next={next}
          basePath="/blog"
        />
      </div>

      <BlogAside post={post} className="mt-15" />
    </article>
  )
}
