import type { ShowcaseSectionProps } from "../../interfaces/showcase"
import ShowcaseHeader from "./ShowcaseHeader"
import ShowcaseGrid from "./ShowcaseGrid"
import SectionControls from "../ui/SectionControls"
import { usePagination } from "../../hooks/usePagination"
import { useScrollOnPaginate } from "../../hooks/useScrollOnPaginate"

const ShowcaseSection = ({
  title,
  viewAll,
  items,
  isHomePage = false,
}: ShowcaseSectionProps) => {
  const itemsPerPage = isHomePage ? 2 : 4

  const { page, totalPages, visibleItems, nextPage, prevPage } = usePagination({
    items,
    itemsPerPage,
  })

  const { sectionRef, markPagination } = useScrollOnPaginate({
    page,
    enabled: !isHomePage,
  })

  const handleNext = () => {
    markPagination()
    nextPage()
  }

  const handlePrev = () => {
    markPagination()
    prevPage()
  }

  const showControls = isHomePage || totalPages > 1

  return (
    <section ref={sectionRef}>
      <ShowcaseHeader title={title} viewAll={viewAll} />

      <ShowcaseGrid items={visibleItems} isHomePage={isHomePage} />

      {showControls && !viewAll && (
        <SectionControls
          page={page}
          totalPages={totalPages}
          viewAll={viewAll}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}
    </section>
  )
}

export default ShowcaseSection
