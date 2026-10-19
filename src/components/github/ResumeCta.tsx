"use client"

import { ArrowUpRight } from "lucide-react"

import useDownloadResume from "@/hooks/useDownloadResume"

export function ResumeCta() {
  const handleDownload = useDownloadResume()

  return (
    <p className="mb-5 sm:mb-4 flex flex-wrap items-center gap-x-1 text-sm">
      Interested in working together? Check out my{" "}
      <button
        type="button"
        onClick={handleDownload}
        className="weak-text flex items-center gap-1 hover:underline underline-offset-3"
      >
        Resume <ArrowUpRight size={16} aria-hidden="true" />
      </button>
    </p>
  )
}
