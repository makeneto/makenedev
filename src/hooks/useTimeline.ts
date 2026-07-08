import { useCallback, useState } from "react"
import data from "../data/timeline.json"

export type TimelineItem = {
  title: string
  subtitle: string
  description: string
  tags?: string[]
}

export type TimelineYear = {
  year: string
  personal: TimelineItem | null
  engineering: TimelineItem | null
  business: TimelineItem | null
}

export type TimelineTrack = {
  key: "personal" | "engineering" | "business"
  label: string
  trackLabel: string
}

const timelineData = data.timelineData as TimelineYear[]

export const timelineTracks: TimelineTrack[] = [
  { key: "personal", label: "Personal", trackLabel: "TRACK 01" },
  { key: "engineering", label: "Engineering", trackLabel: "TRACK 02" },
  { key: "business", label: "Business", trackLabel: "TRACK 03" },
]

export function useTimeline() {
  const [activeYearIndex, setActiveYearIndex] = useState(0)

  const currentYear = timelineData[activeYearIndex] ?? timelineData[0]
  const canGoPrev = activeYearIndex > 0
  const canGoNext = activeYearIndex < timelineData.length - 1

  const handleYearChange = useCallback((direction: "prev" | "next") => {
    setActiveYearIndex((prevIndex) => {
      if (direction === "next") {
        return Math.min(prevIndex + 1, timelineData.length - 1)
      }

      return Math.max(prevIndex - 1, 0)
    })
  }, [])

  return {
    timelineData,
    currentYear,
    activeYearIndex,
    canGoPrev,
    canGoNext,
    handleYearChange,
  }
}
