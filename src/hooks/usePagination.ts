import { useMemo, useState } from "react"

interface UsePaginationProps<T> {
  posts: T[]
  postItems: number
}

export function usePagination<T>({ posts, postItems }: UsePaginationProps<T>) {
  const [page, setPage] = useState(1)

  const totalPages = Math.max(1, Math.ceil(posts.length / postItems))

  const visiblePosts = useMemo(() => {
    const start = (page - 1) * postItems

    return posts.slice(start, start + postItems)
  }, [posts, page, postItems])

  const nextPage = () => {
    setPage((prev) => Math.min(totalPages, prev + 1))
  }

  const prevPage = () => {
    setPage((prev) => Math.max(1, prev - 1))
  }

  return {
    page,
    totalPages,
    visiblePosts,
    nextPage,
    prevPage,
  }
}
