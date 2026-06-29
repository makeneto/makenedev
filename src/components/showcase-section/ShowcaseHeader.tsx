import { ViewAllLink } from "./ViewAllLink"

interface ShowcaseHeaderProps {
  title: string
  viewAll?: string
  isShowcase?: boolean
}

const ShowcaseHeader = ({
  title,
  viewAll = "",
  isShowcase,
}: ShowcaseHeaderProps) => {
  const isHiddenTitle = title === "Timeline" || title === "Profile"

  const label = !isHiddenTitle ? (viewAll ? "Last" : "All") : null

  return (
    <header className={`showcase-header ${isShowcase && "pt-14"} pb-4`}>
      <h2 className="showcase-heading">
        {label} {title}
      </h2>

      {viewAll && <ViewAllLink to={viewAll} />}
    </header>
  )
}

export default ShowcaseHeader
