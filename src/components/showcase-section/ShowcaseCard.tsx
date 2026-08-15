import React from "react"
import Image from "next/image"
import Link from "next/link"

import { coverImage } from "@/services/wisp"
import type { getWorkHomeData } from "@/features/works/wispWorks"

type WorkPost = Awaited<ReturnType<typeof getWorkHomeData>>["posts"][number]

interface Props {
  post: WorkPost
}

const ShowcaseCard: React.FC<Props> = ({ post }) => {
  const { slug, title, image, description } = post

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
        className="showcase-cover card-wrapper"
        width={300}
        height={250}
        loading="lazy"
      />

      <section>
        <h1 className="showcase-card--title" translate="no">
          {title}
        </h1>

        <p className="showcase-card--description">{description}</p>
      </section>
    </Link>
  )
}

export default ShowcaseCard
