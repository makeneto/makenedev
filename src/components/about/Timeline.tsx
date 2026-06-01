import React from "react"
import TimelineCard from "./TimelineCard"
import data from "../../data/timeline.json"
import ShowcaseHeader from "../showcase-section/ShowcaseHeader"

export default function Timeline() {
  const timelineData = data.timelineData

  return (
    <section className="timeline">
      <div>
        <ShowcaseHeader title="Timeline" />
        <div>
          <p className="description--normal">
            A journey is not a straight line it’s a sequence of choices, doubts,
            and quiet adjustments. This timeline exists not only to show what
            was done, but to reflect what drove each shift in direction. Every
            step here represents a moment when something stopped making sense or
            started to make more sense than before.None of this is about speed
            or perfection. It’s about intentional evolution even when that
            intention wasn’t clear at the time.
          </p>
        </div>
      </div>

      <div className="timeline__grid">
        <div className="timeline__empty" />

        <div className="timeline__header">
          <span className="timeline__track">TRACK 01</span>
          <h3>Personal</h3>
        </div>

        <div className="timeline__header">
          <span className="timeline__track">TRACK 02</span>
          <h3>Engineering</h3>
        </div>

        <div className="timeline__header">
          <span className="timeline__track">TRACK 03</span>
          <h3>Business</h3>
        </div>

        {timelineData.map((year) => (
          <React.Fragment key={year.year}>
            <div className="timeline__year">{year.year}</div>

            <div className="timeline__column">
              {year.personal && (
                <TimelineCard {...year.personal} track="Personal" />
              )}
            </div>

            <div className="timeline__column">
              {year.engineering && (
                <TimelineCard {...year.engineering} track="Engineering" />
              )}
            </div>

            <div className="timeline__column">
              {year.business && (
                <TimelineCard {...year.business} track="Business" />
              )}
            </div>
          </React.Fragment>
        ))}
      </div>
    </section>
  )
}
