import type { ShowcaseItem } from "../../interfaces/showcase"
import ShowcaseCard from "./ShowcaseCard"

interface ShowcaseGridProps {
  items: ShowcaseItem[]
  isHomePage: boolean
}

const ShowcaseGrid = ({ items, isHomePage }: ShowcaseGridProps) => {
  return (
    <ul
      className={`showCaseGrid ${!isHomePage ? "showCaseGrid--multi-row" : ""}`}
      role="list"
    >
      {items.map((item) => (
        <li key={item.id}>
          <ShowcaseCard item={item} />
        </li>
      ))}
    </ul>
  )
}

export default ShowcaseGrid
