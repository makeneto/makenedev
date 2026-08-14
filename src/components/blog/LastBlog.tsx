import Link from "next/link"
import Image from "next/image"

import BlogViews from "./BlogViews"
import { getBlogHomeData } from "@/features/blog/wispBlog"
import { coverImage } from "@/services/wisp"
import { formatLongDate } from "@/utils/formatDate"

export default async function LastBlog() {
  const { posts } = await getBlogHomeData()
  const featured = posts[0]

  const { createdAt, description, image, publishedAt, slug, tags, title } =
    featured

  return (
    <section className="blog-lastBlog">
      <Link
        href={`/blog/${slug}`}
        aria-label="Read more about this blog post"
        className="blog-lastBlog__card"
      >
        <section>
          <div>
            <span>{tags?.[0]?.name || "Reflections"}</span>
            <h1>{title}</h1>
            <p>{description}</p>
          </div>

          <div className="flex items-center justify-between">
            <span>{formatLongDate(publishedAt || createdAt)}</span>
            <BlogViews slug={slug} />
          </div>
        </section>

        <Image
          src={coverImage(image)}
          alt={title}
          width={featured ? 1200 : 720}
          height={featured ? 720 : 480}
        />
      </Link>
    </section>
  )
}
