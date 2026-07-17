import type { ShowcaseItem } from "../../interfaces/showcase"
import ShowcaseCard from "./ShowcaseCard"

interface ShowcaseGridProps {
  items: ShowcaseItem[]
}

const ShowcaseGrid = ({ items }: ShowcaseGridProps) => {
  return (
    <ul className="showCaseGrid" role="list">
      {items.map((item) => (
        <li key={item.id}>
          <ShowcaseCard item={item} />
        </li>
      ))}
    </ul>
  )
}

export default ShowcaseGrid
