import Link from "next/link"
import Image from "next/image"

import { formatDate } from "@/utils/formatDate"
import BlogViews from "./BlogViews"
import { getBlogHomeData } from "@/features/blog/wispBlog"
import { coverImage } from "@/services/wisp"

interface LastBlogProps {
  isHome?: boolean
  vertical?: boolean
}

export default async function LastBlog({
  isHome = false,
  vertical,
}: LastBlogProps) {
  const { posts } = await getBlogHomeData()
  const featured = posts[0]

  const { createdAt, description, image, publishedAt, slug, tags, title } =
    featured

  return (
    <section className="blog-lastBlog">
      <Link
        href={`/blog/${slug}`}
        aria-label="Read more about this blog post"
        className={`blog-lastBlog__card ${vertical ? "blog-lastBlog__card--vertical" : "blog-lastBlog__card--horizontal"} ${!isHome ? "sticky-blog" : ""}`}
      >
        <section>
          <div>
            <span>{tags?.[0]?.name || "Reflections"}</span>
            <h1>{title}</h1>
            <p>{description}</p>
          </div>

          <div className="flex items-center justify-between">
            <span>{formatDate(publishedAt || createdAt)}</span>
            <BlogViews slug={slug} />
          </div>
        </section>

        <Image
          src={coverImage(image)}
          alt={title + `Cover`}
          width={featured ? 1200 : 720}
          height={featured ? 720 : 480}
        />
      </Link>
    </section>
  )
}
