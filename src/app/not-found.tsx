import React from "react"

import PageHeader from "@/components/shared/page-header"
import Link from "next/link"

export default function NotFoundPage() {
  return (
    <React.Fragment>
      <PageHeader
        title="Not found"
        description="This page doesn't exist."
        className="mb-10"
      />

      <div className="flex flex-wrap items-center gap-5 text-sm">
        <Link
          href="/"
          aria-label="Go to homepage"
          className="transition-opacity hover:opacity-80 hover:underline underline-offset-3"
        >
          Go to homepage
        </Link>
        <Link
          href="/work"
          aria-label="Browse works"
          className="transition-all weak-text weak-hover hover:underline underline-offset-3"
        >
          Browse works
        </Link>
      </div>
    </React.Fragment>
  )
}
