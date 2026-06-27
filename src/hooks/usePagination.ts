import { useMemo, useState } from "react"

interface UsePaginationProps<T> {
  items: T[]
  itemsPerPage: number
}

export function usePagination<T>({
  items,
  itemsPerPage,
}: UsePaginationProps<T>) {
  // Use 1-based pages to match UI controls
  const [page, setPage] = useState(1)

  const totalPages = Math.max(1, Math.ceil(items.length / itemsPerPage))

  const visibleItems = useMemo(() => {
    const start = (page - 1) * itemsPerPage

    return items.slice(start, start + itemsPerPage)
  }, [items, page, itemsPerPage])

  const nextPage = () => {
    setPage((prev) => Math.min(totalPages, prev + 1))
  }

  const prevPage = () => {
    setPage((prev) => Math.max(1, prev - 1))
  }

  return {
    page,
    totalPages,
    visibleItems,
    nextPage,
    prevPage,
  }
}
