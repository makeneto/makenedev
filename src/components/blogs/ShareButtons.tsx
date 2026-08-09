"use client"

import { useEffect, useState } from "react"
import { Link2, Check, Share2 } from "lucide-react"
import { Button } from "../ui/button"

interface ShareButtonsProps {
  title: string
  slug: string
}

const SITE_URL = "https://makenedev.vercel.app"

export function ShareButtons({ title, slug }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false)
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

    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {}
  }

  return (
    <div className="blog-share">
      <p>Share</p>

      <Button
        variant="ghost"
        type="button"
        onClick={handleNativeShare}
        aria-label="Share"
        className="w-fit blog-share__button"
      >
        {copied ? (
          <Check size={16} />
        ) : canNativeShare ? (
          <Share2 size={16} />
        ) : (
          <Link2 size={16} />
        )}
      </Button>
    </div>
  )
}
