import React from "react"
import { ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { coverImage } from "@/services/wisp"
import type { getWorkHomeData } from "@/features/works/wispWorks"

type WorkPost = Awaited<ReturnType<typeof getWorkHomeData>>["posts"][number]

interface Props {
  post: WorkPost
}

const ShowcaseCard: React.FC<Props> = ({ post }) => {
  return (
    <Link
      href={`work/${post.slug}`}
      className="showcase-card"
      rel="noopener noreferrer"
      aria-label={`Visit the work ${post.title}`}
    >
      <Image
        src={coverImage(post.image)}
        alt={`${post.title} Cover Image`}
        className="showcase-cover"
        width={300}
        height={250}
        loading="lazy"
      />

      <section>
        <div className="flex posts-center justify-between">
          <h1 className="showcase-card--title" translate="no">
            {post.title}
          </h1>
          <ExternalLink />
        </div>

        <p className="showcase-card--description">{post.description}</p>
      </section>
    </Link>
  )
}

export default ShowcaseCard
