"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Globe2 } from "lucide-react"
import { useState } from "react"

import { usePagination } from "@/hooks/usePagination"
import { useScrollOnPaginate } from "@/hooks/useScrollOnPaginate"
import PaginationControls from "@/components/ui/PaginationControls"
import SectionHeading from "./SectionHeading"

export type InteractiveListItem = {
  id: string
  title: string
  description?: string | null
  meta?: string
  href?: string
  icon?: "favicon" | "cover" | "file"
  iconSrc?: string
  fallbackIconSrc?: string
  actions?: {
    label: string
    href: string
  }[]
}

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
  isHomePage = false,
}: InteractiveListProps) {
  const pageSize = itemsPerPage ?? Math.max(items.length, 1)
  const { page, totalPages, visiblePosts, nextPage, prevPage } = usePagination({
    posts: items,
    postItems: pageSize,
  })
  const { sectionRef, markPagination } = useScrollOnPaginate({
    page,
    enabled: paginate,
  })
  const displayedItems = paginate ? visiblePosts : items

  const handlePrevious = () => {
    markPagination()
    prevPage()
  }

  const handleNext = () => {
    markPagination()
    nextPage()
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
            className="group/item py-4 border-b border-zinc-200 transition-opacity duration-300 last:border-b-0 first:pt-0 last-pb-0 dark:border-zinc-800"
          >
            <ListItemContent item={item} />
          </li>
        ))}
      </ul>

      {paginate && totalPages > 1 && (
        <PaginationControls
          page={page}
          totalPages={totalPages}
          onPrevious={handlePrevious}
          onNext={handleNext}
        />
      )}
    </section>
  )
}

function ListItemContent({ item }: { item: InteractiveListItem }) {
  const [faviconSrc, setFaviconSrc] = useState<string | null>(
    item.iconSrc ?? null,
  )

  return (
    <div className="flex items-center gap-4">
      {item.icon === "favicon" &&
        (faviconSrc ? (
          <Image
            src={faviconSrc}
            alt=""
            width={36}
            height={36}
            unoptimized
            className="size-9 shrink-0 rounded-sm object-contain"
            onError={() => {
              setFaviconSrc((currentSrc) =>
                currentSrc === item.iconSrc && item.fallbackIconSrc
                  ? item.fallbackIconSrc
                  : null,
              )
            }}
          />
        ) : (
          <Globe2
            className="size-8 shrink-0 text-zinc-500"
            strokeWidth={1}
            aria-hidden="true"
          />
        ))}

      {item.icon === "cover" && item.iconSrc && (
        <Image
          src={item.iconSrc}
          alt=""
          width={40}
          height={56}
          className="h-14 w-10 shrink-0 object-contain"
        />
      )}

      <div className="min-w-0 flex-1 flex flex-col gap-1">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
          <h3 className="min-w-0 flex-1 text-base font-medium">
            {item.href ? (
              <Link
                href={item.href}
                aria-label={`Learn more about ${item.title}`}
                className="grid gap-1 sm:flex items-center justify-between"
              >
                {item.title}

                <p className="weak-text text-sm">
                  {item.icon === "file" && item.description}
                </p>
              </Link>
            ) : (
              item.title
            )}
          </h3>
          {item.meta && (
            <span className="shrink-0 text-sm weak-text">{item.meta}</span>
          )}
          {item.actions?.length ? (
            <div className="flex shrink-0 items-center gap-4">
              {item.actions.map((action) => (
                <Link
                  key={action.label}
                  href={action.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm hover:underline underline-offset-3"
                >
                  {action.label}
                  <ArrowUpRight size={16} aria-hidden="true" />
                </Link>
              ))}
            </div>
          ) : null}
        </div>
        {item.icon !== "file" && item.description && (
          <p className="weak-text line-clamp-1 text-sm">{item.description}</p>
        )}
      </div>
    </div>
  )
}
