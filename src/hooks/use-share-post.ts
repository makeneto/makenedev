"use client"

import { site } from "@/constants/site"

export interface ShareProps {
  title?: string
  slug: string
  basePath?: "blog" | "work"
}

export default function useSharePost({
  title,
  slug,
  basePath = "blog",
}: ShareProps) {
  const canNativeShare =
    typeof navigator !== "undefined" && typeof navigator.share === "function"
  const url = `${site.url}/${basePath}/${slug}`

  async function handleNativeShare() {
    if (canNativeShare) {
      try {
        await navigator.share({
          title: `${title} | ${site.dev}`,
          url,
        })
      } catch (error) {
        if (error instanceof DOMException && error.name === "AbortError") return

        throw error
      }
      return
    }
  }

  return { handleNativeShare, canNativeShare, url }
}
