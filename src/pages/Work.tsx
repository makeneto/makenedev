import React from "react"
import DefaultHeader from "../components/headers/DefaultHeader"
import ShowcaseSection from "../components/showcase-section/ShowcaseSection"
import WorkResume from "../components/WorkResume"
import { works } from "../data/works"
import { useTitle } from "../hooks/useTitle"

export default function Work() {
  useTitle("My Works")

  return (
    <React.Fragment>
      <DefaultHeader
        title="My Work"
        description="Some things you see and move on. Others stop you. Make you look twice. Make you wonder how they were made. That's the only kind of work that's worthwhile. Because attention isn't cheap everything competes for it at the same time. If your work doesn't create a pause, even for a second, then it's just noise with better typography."
      />

      <ShowcaseSection title="All Works" items={works} />
      <WorkResume />
    </React.Fragment>
  )
}
