"use client"

import { useMemo } from "react"

import BlogAside from "./BlogAside"
import PostHeader from "../post/PostHeader"
import { processBlogContent } from "@/utils/processBlogContent"
import { Engagement } from "./Engagement"
import { Controls } from "../post/PostControls"
import { PostContentProps } from "@/interfaces/post"

export function ArticleContent({ post, previous, next }: PostContentProps) {
  const { html } = useMemo(
    () => processBlogContent(post.content),
    [post.content],
  )

  return (
    <article>
      <PostHeader post={post} variant="blog" />

      <section className="mt-20 relative grid sm:grid-cols-[70%_auto] gap-20 xl:gap-15">
        <div className="relative">
          <div
            dangerouslySetInnerHTML={{ __html: html }}
            className="post-content blog-content"
          />

          <Engagement post={post} basePath="blog" />

          <Controls
            variant="blog"
            previous={previous}
            next={next}
            basePath="/blog"
          />
        </div>

        <BlogAside post={post} />
      </section>
    </article>
  )
}
