import { Fragment } from "react"
import type { TimelineTrack, TimelineYear } from "../../hooks/useTimeline"
import TimelineCard from "./TimelineCard"

type TimelineDesktopProps = {
  timelineData: TimelineYear[]
  tracks: TimelineTrack[]
}

export default function TimelineDesktop({
  timelineData,
  tracks,
}: TimelineDesktopProps) {
  return (
    <div className="timeline__desktop-grid">
      <div className="timeline__grid">
        <div className="timeline__empty" />

        {tracks.map((track) => (
          <div key={track.key} className="timeline__header">
            <span className="timeline__track">{track.trackLabel}</span>
            <h3>{track.label}</h3>
          </div>
        ))}

        {timelineData.map((year) => (
          <Fragment key={year.year}>
            <div className="timeline__year">{year.year}</div>

            {tracks.map((track) => {
              const item = year[track.key]

              return (
                <div
                  key={`${year.year}-${track.key}`}
                  className="timeline__column"
                >
                  {item && <TimelineCard {...item} track={track.label} />}
                </div>
              )
            })}
          </Fragment>
        ))}
      </div>
    </div>
  )
}
