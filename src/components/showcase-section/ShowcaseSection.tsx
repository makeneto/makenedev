import type { ShowcaseSectionProps } from "../../interfaces/showcase"
import ShowcaseHeader from "./ShowcaseHeader"
import ShowcaseGrid from "./ShowcaseGrid"
import SectionControls from "../ui/SectionControls"
import { useShowcasePagination } from "../../hooks/useShowcasePagination"

const ShowcaseSection = ({
  title,
  viewAll,
  items,
  isHomePage = false,
  isShowcase,
}: ShowcaseSectionProps) => {
  const {
    sectionRef,
    page,
    totalPages,
    visibleItems,
    handleNext,
    handlePrev,
    showControls,
  } = useShowcasePagination({
    items,
    isHomePage,
  })

  return (
    <section ref={sectionRef}>
      <ShowcaseHeader
        title={title}
        linkSection={viewAll}
        isShowcase={isShowcase}
      />

      <ShowcaseGrid items={visibleItems} />

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
