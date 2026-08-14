"use client"

import { useEffect, useState } from "react"

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
  const [canNativeShare, setCanNativeShare] = useState(false)
  const url = `${site.url}/${basePath}/${slug}`

  useEffect(() => {
    setCanNativeShare(typeof navigator !== "undefined" && !!navigator.share)
  }, [])

  async function handleNativeShare() {
    if (canNativeShare) {
      try {
        await navigator.share({
          title: `${title} | ${site.dev}`,
          url,
        })
      } catch {}
      return
    }
  }

  return { handleNativeShare, canNativeShare, url }
}
