import React from "react"
import { timelineData } from "../../data/timeline"
import TimelineCard from "./TimelineCard"

export default function Timeline() {
  return (
    <section className="timeline">
      <div className="timeline__wrapper">
        <div className="timeline__grid">
          <div className="timeline__empty" />

          <div className="timeline__header">
            <span className="timeline__track">TRACK 01</span>
            <h3>Engineering</h3>
          </div>

          <div className="timeline__header">
            <span className="timeline__track">TRACK 02</span>
            <h3>Business</h3>
          </div>

          <div className="timeline__header">
            <span className="timeline__track">TRACK 03</span>
            <h3>Craft & Design</h3>
          </div>

          {timelineData.map((year) => (
            <React.Fragment>
              <div className="timeline__year" key={year.year}>
                {year.year}
              </div>

              <div className="timeline__column">
                {year.engineering && <TimelineCard {...year.engineering} />}
              </div>

              <div className="timeline__column">
                {year.business && <TimelineCard {...year.business} />}
              </div>

              <div className="timeline__column">
                {year.design && <TimelineCard {...year.design} />}
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  )
}
