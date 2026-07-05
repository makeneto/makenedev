import { ViewAllLink } from "./ViewAllLink"

interface ShowcaseHeaderProps {
  title: string
  linkSection?: string
  textLink?: string
  isShowcase?: boolean
}

const ShowcaseHeader = ({
  title,
  linkSection = "",
  textLink = "View all",
  isShowcase,
}: ShowcaseHeaderProps) => {
  return (
    <header className={`showcase-header ${isShowcase && "pt-14"} pb-4`}>
      <h2 className="showcase-heading">{title}</h2>

      {linkSection && <ViewAllLink to={linkSection} textLink={textLink} />}
    </header>
  )
}

export default ShowcaseHeader
