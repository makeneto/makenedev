import { ViewAllLink } from "./ViewAllLink"

interface ShowcaseHeaderProps {
  title: string
  viewAll?: string
}

const ShowcaseHeader = ({ title, viewAll = "" }: ShowcaseHeaderProps) => {
  return (
    <header className="showcase-header">
      <h2 className="showcase-heading">
        {viewAll ? "Last" : "All"} {title}
      </h2>

      {viewAll && <ViewAllLink to={viewAll} />}
    </header>
  )
}

export default ShowcaseHeader
