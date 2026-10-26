"use client"

import PaginationControls from "@/components/ui/pagination-controls"
import { usePagination } from "@/hooks/use-pagination"
import { useScrollOnPaginate } from "@/hooks/use-scroll-on-paginate"

import SectionHeading from "../headers/section-heading"
import { InteractiveListItem } from "@/interfaces/interactive-list"
import { ListItem } from "../interative-list/list-item"

type InteractiveListProps = {
  title: string
  items: InteractiveListItem[]
  viewAll?: string
  count?: number
  itemsPerPage?: number
  paginate?: boolean
  isHomePage?: boolean
}

export default function InteractiveList({
  title,
  items,
  viewAll,
  count,
  itemsPerPage,
  paginate = false,
  isHomePage = false
}: InteractiveListProps) {
  const pageSize = itemsPerPage ?? Math.max(items.length, 1)
  const { page, totalPages, visiblePosts, nextPage, prevPage } = usePagination({
    posts: items,
    postItems: pageSize
  })
  const { sectionRef, markPagination } = useScrollOnPaginate({
    page,
    enabled: paginate
  })

  const displayedItems = paginate ? visiblePosts : items
  const showPagination = paginate && totalPages > 1

  const withScroll = (changePage: () => void) => () => {
    markPagination()
    changePage()
  }

  return (
    <section ref={sectionRef}>
      {isHomePage && (
        <SectionHeading title={title} viewAll={viewAll} count={count} />
      )}

      <ul className="group/list grid has-[>li:hover]:[&>li:not(:hover)]:opacity-40">
        {displayedItems.map((item) => (
          <li
            key={item.id}
            className="group/item py-4 border-b border-zinc-200 transition-opacity duration-300 last:border-b-0 first:pt-0 last:pb-0 dark:border-zinc-800"
          >
            <ListItem item={item} />
          </li>
        ))}
      </ul>

      {showPagination && (
        <PaginationControls
          page={page}
          totalPages={totalPages}
          onPrevious={withScroll(prevPage)}
          onNext={withScroll(nextPage)}
        />
      )}
    </section>
  )
}
