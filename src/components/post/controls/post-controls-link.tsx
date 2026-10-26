"use client"

import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { AdjacentItem } from "@/interfaces/post"
import { Button } from "../../ui/button"

export function PostControlsLink({
  item,
  basePath,
  direction,
  variant
}: {
  item: AdjacentItem | null
  basePath: string
  direction: "previous" | "next"
  variant: "work" | "blog"
}) {
  const isPrevious = direction === "previous"

  if (!item) {
    return (
      <span aria-hidden className="opacity-0 select-none">
        —
      </span>
    )
  }

  return (
    <Link
      href={`${basePath}/${item.slug}`}
      className={`weak-text weak-hover text-sm flex items-center gap-1 ${
        isPrevious ? "" : "flex-row-reverse"
      }`}
    >
      <Button variant="link" className="btn--link p-0">
        {isPrevious && <ChevronLeft size={16} />}
        {variant === "work" ? item.title : isPrevious ? "Previous" : "Next"}
        {!isPrevious && <ChevronRight size={16} />}
      </Button>
    </Link>
  )
}
