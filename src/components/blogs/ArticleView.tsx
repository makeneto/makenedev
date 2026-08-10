"use client"

import { useMemo } from "react"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"

import { type BlogArticle } from "@/services/wisp"
import { processBlogContent } from "@/utils/processBlogContent"
import BlogIntro from "./BlogIntro"
import BlogAside from "./BlogAside"

export function ArticleView({ post }: { post: BlogArticle }) {
  const { html } = useMemo(
    () => processBlogContent(post.content),
    [post.content],
  )

  return (
    <article>
      <BlogIntro post={post} />

      <section className="mt-20 relative grid sm:grid-cols-[70%_auto] gap-20 xl:gap-15">
        <div
          dangerouslySetInnerHTML={{ __html: html }}
          className="blog-content"
        />

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
