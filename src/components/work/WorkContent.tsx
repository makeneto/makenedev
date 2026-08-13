"use client"

import Link from "next/link"
import { useMemo } from "react"
import { ChevronLeft } from "lucide-react"

import PostHeader from "../post/PostHeader"
import WorkAside from "./WorkAside"
import { processBlogContent } from "@/utils/processBlogContent"
import { Engagement } from "../blog/Engagement"
import { type BlogArticle } from "@/services/wisp"

export function WorkContent({ post }: { post: BlogArticle }) {
  const { html } = useMemo(
    () => processBlogContent(post.content),
    [post.content],
  )

  return (
    <article>
      <PostHeader post={post} variant="work" />

      <section className="mt-20 relative grid sm:grid-cols-[70%_auto] gap-20 xl:gap-15">
        <div className="relative">
          <div
            dangerouslySetInnerHTML={{ __html: html }}
            className="post-content work-content"
          />

          <Engagement post={post} basePath="work" />
        </div>

        <WorkAside post={post} />
      </section>

      <Link
        href="/work"
        className="mt-20 md:mt-30 weak-text weak-hover flex items-center gap-1"
      >
        <ChevronLeft size={16} /> More works
      </Link>
    </article>
  )
}
