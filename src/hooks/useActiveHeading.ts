"use client"

import { Heading } from "@/interfaces/post"
import { useCallback, useEffect, useRef, useState } from "react"

export function useActiveHeading(headings: Heading[]) {
  const [activeId, setActiveId] = useState<string | null>(null)
  const isProgrammaticScroll = useRef(false)
  const fallbackTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    if (headings.length === 0) return

    const elements = headings
      .map(({ id }) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    if (elements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (isProgrammaticScroll.current) return

        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)

        if (visible[0]) {
          setActiveId(visible[0].target.id)
        }
      },
      {
        rootMargin: "-100px 0px -70% 0px",
        threshold: 0,
      },
    )

    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [headings])

  const activateHeading = useCallback((id: string) => {
    const el = document.getElementById(id)
    if (!el) return

    isProgrammaticScroll.current = true
    setActiveId(id)

    if (fallbackTimeout.current) clearTimeout(fallbackTimeout.current)

    const release = () => {
      isProgrammaticScroll.current = false
      window.removeEventListener("scrollend", release)
    }

    window.addEventListener("scrollend", release, { once: true })

    fallbackTimeout.current = setTimeout(release, 1000)

    el.scrollIntoView({ behavior: "smooth", block: "start" })
  }, [])

  return { activeId, activateHeading }
}
