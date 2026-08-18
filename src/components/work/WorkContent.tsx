"use client"

import { useMemo } from "react"

import PostHeader from "./WorkHeader"
import WorkAside from "./WorkAside"
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
    <article className="relative grid sm:grid-cols-[70%_auto] gap-20 xl:gap-15">
      <div className="relative">
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
      </div>

      <WorkAside post={post} className="mt-15" />
    </article>
  )
}
