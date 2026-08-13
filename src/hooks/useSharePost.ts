"use client"

import { SITE_URL } from "@/constants/siteUrl"
import { useEffect, useState } from "react"

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
  const url = `${SITE_URL}/${basePath}/${slug}`

  useEffect(() => {
    setCanNativeShare(typeof navigator !== "undefined" && !!navigator.share)
  }, [])

  async function handleNativeShare() {
    if (canNativeShare) {
      try {
        await navigator.share({
          title: `${title} | Makene Neto`,
          url,
        })
      } catch {}
      return
    }
  }

  return { handleNativeShare, canNativeShare, url }
}
