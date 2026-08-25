"use client"

import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { AdjacentItem, ControlsProps } from "@/interfaces/post"
import { Button } from "../ui/button"

export function Controls({ variant, previous, next, basePath }: ControlsProps) {
  if (!previous && !next) return null

  return (
    <nav className="flex items-center justify-between gap-6">
      <ControlLink
        item={previous}
        basePath={basePath}
        direction="previous"
        variant={variant}
      />

      <ControlLink
        item={next}
        basePath={basePath}
        direction="next"
        variant={variant}
      />
    </nav>
  )
}

function ControlLink({
  item,
  basePath,
  direction,
  variant,
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
