"use client"

import { useEffect, useState } from "react"

export interface ShareProps {
  title?: string
  slug: string
}

export const SITE_URL = "https://makenedev.vercel.app"

export default function useShareArticle({ title, slug }: ShareProps) {
  const [canNativeShare, setCanNativeShare] = useState(false)
  const url = `${SITE_URL}/blog/${slug}`

  useEffect(() => {
    setCanNativeShare(typeof navigator !== "undefined" && !!navigator.share)
  }, [])

  async function handleNativeShare() {
    if (canNativeShare) {
      try {
        await navigator.share({ title, url })
      } catch {}
      return
    }
  }

  return { handleNativeShare, canNativeShare }
}
