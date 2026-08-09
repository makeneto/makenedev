import Link from "next/link"
import { coverImage, getHomeData } from "@/services/wisp"
import Image from "next/image"
import { formatDate } from "@/utils/formatDate"

interface LastBlogProps {
  isHome?: boolean
  vertical?: boolean
}

export default async function LastBlog({
  isHome = false,
  vertical,
}: LastBlogProps) {
  const { posts } = await getHomeData()
  const featured = posts[0]

  return (
    <section className="blog-lastBlog">
      <Link
        href={`/blog/${featured.slug}`}
        aria-label="Read more about this blog post"
        className={`blog-lastBlog__card ${vertical ? "blog-lastBlog__card--vertical" : "blog-lastBlog__card--horizontal"} ${!isHome ? "sticky-blog" : ""}`}
      >
        <section>
          <div>
            <span>{featured.tags?.[0]?.name || "Reflexões"}</span>
            <h1>{featured.title}</h1>
            <p>{featured.description}</p>
          </div>

          <div className="flex items-center justify-between">
            <span>By Makene Neto</span>
            <span>
              {formatDate(featured.publishedAt || featured.createdAt)}
            </span>
          </div>
        </section>

        <Image
          src={coverImage(featured.image)}
          alt={featured.title + `Cover`}
          width={featured ? 1200 : 720}
          height={featured ? 720 : 480}
        />
      </Link>
    </section>
  )
}
