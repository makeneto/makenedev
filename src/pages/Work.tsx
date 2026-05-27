import React from "react"
import DefaultHeader from "../components/headers/DefaultHeader"
import ShowcaseSection from "../components/showcase-section/ShowcaseSection"
import WorkResume from "../components/WorkResume"
import { works } from "../data/works"

export default function Work() {
  return (
    <React.Fragment>
      <DefaultHeader
        title="My Work"
        description="Some things you see and move on. Others stop you. Make you look twice. Make you wonder how it was made. That's the only kind of work worth doing."
      />

      <ShowcaseSection title="Last Works" items={works} />

      <WorkResume />
    </React.Fragment>
  )
}
