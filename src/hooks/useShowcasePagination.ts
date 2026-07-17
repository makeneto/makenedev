import { useMediaQuery } from "react-responsive"
import { usePagination } from "./usePagination"
import { useScrollOnPaginate } from "./useScrollOnPaginate"

interface UseShowcasePaginationProps<T> {
  items: T[]
  isHomePage: boolean
}

export function useShowcasePagination<T>({
  items,
  isHomePage,
}: UseShowcasePaginationProps<T>) {
  const isMobile = useMediaQuery({ maxWidth: 640 })

  const itemsPerPage = isHomePage ? (isMobile ? 2 : 3) : isMobile ? 4 : 6

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

  return {
    sectionRef,
    page,
    totalPages,
    visibleItems,
    handleNext,
    handlePrev,
    showControls,
  }
}
