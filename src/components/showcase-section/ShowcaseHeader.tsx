import { Activity } from "react"
import { ViewAllLink } from "./ViewAllLink"
import { ShowcaseHeaderProps } from "@/interfaces/showcase"

const ShowcaseHeader = ({
  title,
  linkSection = "",
  textLink = "View all",
  isShowcase,
  count,
  children,
}: ShowcaseHeaderProps) => {
  return (
    <header className={`showcase-header ${isShowcase && "pt-14"} pb-4`}>
      <h2 className="showcase-heading">{title}</h2>

      <div className="grid grid-cols-2 items-center w-auto shrink-0 justify-end gap-2">
        {children}
        <Activity mode={linkSection ? "visible" : "hidden"}>
          <ViewAllLink to={linkSection} textLink={textLink} />
        </Activity>
        <Activity mode={count ? "visible" : "hidden"}>
          <p className="showcase-header--counter">{count} items</p>
        </Activity>
      </div>
    </header>
  )
}

export default ShowcaseHeader
