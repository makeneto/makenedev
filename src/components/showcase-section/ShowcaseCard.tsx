import React from "react"
import type { ShowcaseItem } from "../../interfaces/showcase"
import { ExternalLink } from "lucide-react"

interface Props {
  item: ShowcaseItem
}

const ShowcaseCard: React.FC<Props> = ({ item }) => {
  return (
    <a
      href={item.href}
      className="showcase-card"
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Visit ${item.title} showcase`}
    >
      <img
        src={item.imageUrl}
        alt={`${item.title} Cover Image`}
        className="showcase-cover"
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
    </a>
  )
}

export default ShowcaseCard
