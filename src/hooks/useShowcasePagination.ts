import { usePagination } from "./usePagination"
import { useScrollOnPaginate } from "./useScrollOnPaginate"

interface UseShowcasePaginationProps<T> {
  posts: T[]
  isHomePage: boolean
}

export function useShowcasePagination<T>({
  posts,
  isHomePage,
}: UseShowcasePaginationProps<T>) {
  const postItems = isHomePage ? 2 : 6

  const { page, totalPages, visiblePosts, nextPage, prevPage } =
    usePagination<T>({
      posts,
      postItems,
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
    visiblePosts,
    handleNext,
    handlePrev,
    showControls,
  }
}
