import React from "react"
import type { ShowcaseItem } from "../../interfaces/showcase"
import { Link } from "react-router-dom"
import { ExternalLink } from "lucide-react"

interface Props {
  item: ShowcaseItem
}

const ShowcaseCard: React.FC<Props> = ({ item }) => {
  return (
    <Link to={item.href} className="card" target="_blank">
      <img
        src={item.imageUrl}
        alt={item.imageAlt ?? item.title}
        className="image"
        loading="lazy"
      />

      <div className="body">
        <div className="flex items-center justify-between">
          <h3 className="title">{item.title}</h3>
          <ExternalLink />
        </div>
        <p className="card--description">{item.description}</p>
      </div>
    </Link>
  )
}

export default ShowcaseCard
