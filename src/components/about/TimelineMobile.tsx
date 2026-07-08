import { ChevronLeft, ChevronRight } from "lucide-react"
import type { TimelineTrack, TimelineYear } from "../../hooks/useTimeline"
import TimelineCard from "./TimelineCard"

type TimelineMobileProps = {
  currentYear: TimelineYear
  canGoPrev: boolean
  canGoNext: boolean
  onYearChange: (direction: "prev" | "next") => void
  tracks: TimelineTrack[]
}

export default function TimelineMobile({
  currentYear,
  canGoPrev,
  canGoNext,
  onYearChange,
  tracks,
}: TimelineMobileProps) {
  return (
    <div className="timeline__mobile">
      <div className="timeline__mobile-nav">
        <button
          type="button"
          className="timeline__mobile-button"
          onClick={() => onYearChange("prev")}
          disabled={!canGoPrev}
        >
          <ChevronLeft size={18} />
          <span className="text-sm">Previous</span>
        </button>

        <span className="timeline__mobile-year">{currentYear.year}</span>

        <button
          type="button"
          className="timeline__mobile-button"
          onClick={() => onYearChange("next")}
          disabled={!canGoNext}
        >
          <span className="text-sm">Next</span>
          <ChevronRight size={18} />
        </button>
      </div>

      <div className="timeline__mobile-grid">
        {tracks.map((track) => {
          const item = currentYear[track.key]

          if (!item) {
            return null
          }

          return (
            <div key={track.key} className="timeline__mobile-column">
              <h4 className="timeline__mobile-track">{track.label}</h4>
              <TimelineCard {...item} track={track.label} />
            </div>
          )
        })}
      </div>
    </div>
  )
}
