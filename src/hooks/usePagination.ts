import { useMemo, useState } from "react"

interface UsePaginationProps<T> {
  items: T[]
  itemsPerPage: number
}

export function usePagination<T>({
  items,
  itemsPerPage,
}: UsePaginationProps<T>) {
  const [page, setPage] = useState(0)

  const totalPages = Math.max(1, Math.ceil(items.length / itemsPerPage))

  const visibleItems = useMemo(() => {
    const start = page * itemsPerPage

    return items.slice(start, start + itemsPerPage)
  }, [items, page, itemsPerPage])

  const nextPage = () => {
    setPage((prev) => Math.min(totalPages - 1, prev + 1))
  }

  const prevPage = () => {
    setPage((prev) => Math.max(0, prev - 1))
  }

  return {
    page,
    totalPages,
    visibleItems,
    nextPage,
    prevPage,
  }
}
