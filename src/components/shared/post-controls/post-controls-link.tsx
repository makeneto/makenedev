"use client"

import Link from "next/link"

import { AdjacentItem } from "@/interfaces/post"
import { Button } from "@/components/ui/button"

export function PostControlsLink({
  item,
  basePath,
  direction
}: {
  item: AdjacentItem | null
  basePath: string
  direction: "previous" | "next"
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
    <Link href={`${basePath}/${item.slug}`} aria-label={`Go to ${item.title}`} className="group">
      <Button
        className={`bg-transparent grid p-0 ${isPrevious ? "text-start" : "text-end"}`}
      >
        <span className="weak-text text-xs">
          {isPrevious ? "Previous" : "Next"}
        </span>
        <p className="text-taupe-900 dark:text-white group-hover:underline underline-offset-3">{item.title}</p>
      </Button>
    </Link>
  )
}
