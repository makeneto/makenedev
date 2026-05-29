import { useEffect, useRef } from "react"

interface UseScrollOnPaginateProps {
  page: number
  enabled?: boolean
}

export function useScrollOnPaginate({
  page,
  enabled = true,
}: UseScrollOnPaginateProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const didPaginate = useRef(false)

  const markPagination = () => {
    didPaginate.current = true
  }

  useEffect(() => {
    if (enabled && didPaginate.current && sectionRef.current) {
      sectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }, [page, enabled])

  return {
    sectionRef,
    markPagination,
  }
}
