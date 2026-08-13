import React from "react"
import { Heart, Eye } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { coverImage } from "@/services/wisp"
import type { getWorkHomeData } from "@/features/works/wispWorks"
import useEngagement from "@/hooks/useEngagement"

type WorkPost = Awaited<ReturnType<typeof getWorkHomeData>>["posts"][number]

interface Props {
  post: WorkPost
}

const ShowcaseCard: React.FC<Props> = ({ post }) => {
  const { slug, title, image, description } = post
  const { metrics } = useEngagement({ slug })

  return (
    <Link
      href={`work/${slug}`}
      className="showcase-card"
      rel="noopener noreferrer"
      aria-label={`Visit the work ${title}`}
    >
      <Image
        src={coverImage(image)}
        alt={`${title} Cover Image`}
        className="showcase-cover"
        width={300}
        height={250}
        loading="lazy"
      />

      <section>
        <div className="flex posts-center justify-between">
          <h1 className="showcase-card--title" translate="no">
            {title}
          </h1>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-xs">
              <Heart size={13} className="weak-text" /> {metrics?.likes ?? "-"}
            </span>
            <span className="flex items-center gap-1 text-xs">
              <Eye size={13} className="weak-text" /> {metrics?.views ?? "-"}
            </span>
          </div>
        </div>

        <p className="showcase-card--description">{description}</p>
      </section>
    </Link>
  )
}

export default ShowcaseCard
