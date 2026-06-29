import { ViewAllLink } from "./ViewAllLink"

interface ShowcaseHeaderProps {
  title: string
  viewAll?: string
}

const ShowcaseHeader = ({ title, viewAll = "" }: ShowcaseHeaderProps) => {
  const label = title !== "Timeline" ? (viewAll ? "Last" : "All") : null

  return (
    <header className="showcase-header">
      <h2 className="showcase-heading">
        {label} {title}
      </h2>

      {viewAll && <ViewAllLink to={viewAll} />}
    </header>
  )
}

export default ShowcaseHeader
