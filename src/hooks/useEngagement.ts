"use client"

import { getDeviceId } from "@/utils/getDeviceId"
import { useEffect, useState } from "react"

type Metrics = {
  views: number
  likes: number
  dislikes: number
  liked: boolean
  disliked: boolean
}

export default function useEngagement({ slug }: { slug: string }) {
  const [metrics, setMetrics] = useState<Metrics | null>(null)
  const [busy, setBusy] = useState(false)
  const [viewSent, setViewSent] = useState(false)

  useEffect(() => {
    const deviceId = getDeviceId()
    fetch(
      `/api/blog/${encodeURIComponent(slug)}/engagement?deviceId=${encodeURIComponent(deviceId)}`,
    )
      .then((response) => (response.ok ? response.json() : null))
      .then((data) => data && setMetrics(data))
      .catch(() => undefined)
  }, [slug])

  useEffect(() => {
    if (viewSent) return
    let sent = false
    const sendView = () => {
      if (sent) return
      sent = true
      setViewSent(true)
      fetch(`/api/blog/${encodeURIComponent(slug)}/engagement`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "view", deviceId: getDeviceId() }),
      })
        .then((response) => (response.ok ? response.json() : null))
        .then((data) => data && setMetrics(data))
        .catch(() => undefined)
    }
    const timer = window.setTimeout(sendView, 8000)
    const onScroll = () => {
      if (
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight * 0.6
      )
        sendView()
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => {
      window.clearTimeout(timer)
      window.removeEventListener("scroll", onScroll)
    }
  }, [slug, viewSent])

  async function reaction(action: "like" | "dislike") {
    if (busy) return
    setBusy(true)

    try {
      const response = await fetch(
        `/api/blog/${encodeURIComponent(slug)}/engagement`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ action, deviceId: getDeviceId() }),
        },
      )
      if (response.ok) setMetrics(await response.json())
    } finally {
      setBusy(false)
    }
  }

  return { metrics, reaction, busy }
}
