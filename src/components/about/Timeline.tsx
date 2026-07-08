import ShowcaseHeader from "../showcase-section/ShowcaseHeader"
import TimelineDesktop from "./TimelineDesktop"
import TimelineMobile from "./TimelineMobile"
import { timelineTracks, useTimeline } from "../../hooks/useTimeline"

export default function Timeline() {
  const { timelineData, currentYear, canGoPrev, canGoNext, handleYearChange } =
    useTimeline()

  return (
    <section className="timeline">
      <div>
        <ShowcaseHeader title="Timeline" />
        <div>
          <p className="description--normal">
            A journey isn’t linear — it’s choices, doubts and adjustments. This
            timeline reflects shifts in direction, where things stopped or
            started making more sense. It’s not about speed or perfection, but
            intentional evolution.
          </p>
        </div>
      </div>

      <TimelineMobile
        currentYear={currentYear}
        canGoPrev={canGoPrev}
        canGoNext={canGoNext}
        onYearChange={handleYearChange}
        tracks={timelineTracks}
      />

      <TimelineDesktop timelineData={timelineData} tracks={timelineTracks} />
    </section>
  )
}
