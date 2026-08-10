import React from "react"
import type { ShowcaseItem } from "@/interfaces/showcase"
import { ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface Props {
  item: ShowcaseItem
}

const ShowcaseCard: React.FC<Props> = ({ item }) => {
  return (
    <Link
      href={item.link}
      className="showcase-card"
      rel="noopener noreferrer"
      aria-label={`Visit ${item.title} showcase`}
    >
      <Image
        src={item.imageUrl}
        alt={`${item.title} Cover Image`}
        className="showcase-cover"
        width={300}
        height={250}
        loading="lazy"
      />

      <section>
        <div className="flex items-center justify-between">
          <h1 className="showcase-card--title" translate="no">
            {item.title}
          </h1>
          <ExternalLink />
        </div>

        <p className="showcase-card--description">{item.description}</p>
      </section>
    </Link>
  )
}

export default ShowcaseCard
