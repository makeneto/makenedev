import { Activity } from "react"
import { ViewAllLink } from "./ViewAllLink"
import { ShowcaseHeaderProps } from "@/interfaces/showcase"

const ShowcaseHeader = ({
  title,
  linkSection = "",
  textLink = "View all",
  isShowcase,
  count,
}: ShowcaseHeaderProps) => {
  return (
    <header className={`showcase-header ${isShowcase && "pt-14"} pb-4`}>
      <h2 className="showcase-heading">{title}</h2>

      <Activity mode={linkSection ? "visible" : "hidden"}>
        <ViewAllLink to={linkSection} textLink={textLink} />
      </Activity>

      <Activity mode={count ? "visible" : "hidden"}>
        <p className="showcase-header--counter">{count} items</p>
      </Activity>
    </header>
  )
}

export default ShowcaseHeader
