import React, { useState, useRef, useEffect } from "react"
import type { ShowcaseSectionProps } from "../../interfaces/showcase"
import ShowcaseCard from "./ShowcaseCard"
import SectionControls from "../ui/SectionControls"

const ShowcaseSection: React.FC<ShowcaseSectionProps> = ({
  title,
  viewAllHref,
  items,
  isHomePage = false,
}) => {
  const sectionRef = useRef<HTMLElement>(null)
  const itemsPerPage = isHomePage ? 2 : 6
  const [page, setPage] = useState(0)

  const totalPages = Math.max(1, Math.ceil(items.length / itemsPerPage))

  const handlePrev = () => {
    setPage((p) => Math.max(0, p - 1))
  }

  const handleNext = () => {
    setPage((p) => Math.min(totalPages - 1, p + 1))
  }

  useEffect(() => {
    if (!isHomePage && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }, [page, isHomePage])

  const start = page * itemsPerPage
  const visibleItems = items.slice(start, start + itemsPerPage)

  const showControls = !isHomePage && totalPages > 1

  return (
    <section className="section" ref={sectionRef}>
      <header className="header">
        <h2 className="heading">{title}</h2>
        {viewAllHref && (
          <a href={viewAllHref} className="viewAll">
            View all
          </a>
        )}
      </header>

      <ul
        className={`showCaseGrid ${!isHomePage ? "showCaseGrid--multi-row" : ""}`}
        role="list"
      >
        {visibleItems.map((item) => (
          <li key={item.id}>
            <ShowcaseCard item={item} />
          </li>
        ))}
      </ul>

      {(isHomePage || showControls) && (
        <SectionControls
          page={page}
          totalPages={totalPages}
          onPrev={handlePrev}
          onNext={handleNext}
          label="Web"
        />
      )}
    </section>
  )
}

export default ShowcaseSection
