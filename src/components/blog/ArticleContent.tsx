"use client"

import Link from "next/link"
import { useMemo } from "react"
import { ChevronLeft } from "lucide-react"

import BlogAside from "./BlogAside"
import PostHeader from "../post/PostHeader"
import { processBlogContent } from "@/utils/processBlogContent"
import { Engagement } from "./Engagement"
import { type BlogArticle } from "@/services/wisp"

export function ArticleContent({ post }: { post: BlogArticle }) {
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
        </div>

        <BlogAside post={post} />
      </section>

      <Link
        href="/blog"
        className="mt-20 md:mt-30 weak-text weak-hover flex items-center gap-1"
      >
        <ChevronLeft size={16} /> More posts
      </Link>
    </article>
  )
}
