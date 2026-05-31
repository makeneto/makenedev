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
        alt={item.imageAlt ?? item.title}
        className="cover"
        loading="lazy"
      />

      <div className="flex-col gap-2">
        <div className="flex items-center justify-between">
          <h3 className="title">{item.title}</h3>
          <ExternalLink />
        </div>
        <p className="showcase-card--description">{item.description}</p>
      </div>
    </Link>
  )
}

export default ShowcaseCard
