import React from "react"
import type { ShowcaseItem } from "../../interfaces/showcase"
import { Link } from "react-router-dom"
import { ExternalLink } from "lucide-react"

interface Props {
  item: ShowcaseItem
}

const ShowcaseCard: React.FC<Props> = ({ item }) => {
  return (
    <Link to={item.href} className="showcase-card" target="_blank">
      <img
        src={item.imageUrl}
        alt={`${item.title} Cover Image`}
        className="showcase-cover"
        loading="lazy"
      />

      <div className="flex-col gap-2">
        <div className="flex items-center justify-between">
          <h1 className="showcase-card--title" translate="no">
            {item.title}
          </h1>
          <ExternalLink />
        </div>
        <p className="showcase-card--description">{item.description}</p>
      </div>
    </Link>
  )
}

export default ShowcaseCard
