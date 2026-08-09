// src/components/blog/ArticleView.tsx
"use client"

import { useMemo } from "react"
import Link from "next/link"
import { RiArrowRightSLine } from "@remixicon/react"
import { readingTime, type BlogArticle } from "@/services/wisp"
import { processBlogContent } from "@/utils/processBlogContent"
import { useActiveHeading } from "@/hooks/useActiveHeading"
import { ArticleMeta } from "./ArticleMeta"
import { TableOfContents } from "./TableOfContents"
import { ShareButtons } from "./ShareButtons"
import { CalendarDays, ChevronLeft, Clock3 } from "lucide-react"
import { formatDate } from "@/utils/formatDate"
import { CommentSection } from "./comments/CommentSection"

export function ArticleView({ post }: { post: BlogArticle }) {
  const { html, headings } = useMemo(
    () => processBlogContent(post.content),
    [post.content],
  )

  const date = post.publishedAt || post.createdAt
  const { activeId, activateHeading } = useActiveHeading(headings)

  return (
    <article>
      <header className="grid gap-8 sm:gap-5">
        <div className="text-sm gap-2 flex items-center justify-between">
          <span className="flex items-center gap-1">
            <Link href="/blog">All blogs</Link> <RiArrowRightSLine size={16} />{" "}
            <p className="weak-text">{post.title}</p>
          </span>

          <span className="weak-text hidden md:flex items-center gap-2">
            <Clock3 size={14} strokeWidth={1.8} />
            {readingTime(post.content)}
          </span>
        </div>

        <div className="blog">
          <h1>{post.title}</h1>

          <div className="flex items-center justify-between sm:hidden">
            <span className="weak-text text-sm">
              {readingTime(post.content)}
            </span>

            <span className="weak-text text-sm flex items-center gap-2">
              <CalendarDays size={14} /> {date ? formatDate(date) : "No data"}
            </span>
          </div>
        </div>
      </header>

      <section className="mt-15 relative grid sm:grid-cols-[70%_auto] gap-20 xl:gap-15">
        <div
          dangerouslySetInnerHTML={{ __html: html }}
          className="blog-content"
        />

        <aside className="blog-aside sticky top-10 h-fit">
          <TableOfContents
            headings={headings}
            activeId={activeId}
            onItemClick={activateHeading}
          />

          <ArticleMeta
            publishedAt={post.publishedAt}
            createdAt={post.createdAt}
          />

          <ShareButtons title={post.title} slug={post.slug} />
        </aside>
      </section>

      <CommentSection slug={post.slug} />

      <Link
        href="/blog"
        className="mt-20 md:mt-30 weak-text weak-hover flex items-center gap-1"
      >
        <ChevronLeft size={16} /> More posts
      </Link>
    </article>
  )
}
