import React from "react"
import DefaultHeader from "../components/headers/DefaultHeader"
import StoryResume from "../components/story/StoryResume"
import Timeline from "../components/story/Timeline"

export default function Story() {
  return (
    <React.Fragment>
      <DefaultHeader
        title="My Journey"
        description="A career isn't a single road. It's tracks running in parallel — some loud, some quiet, all moving at the same time. Engineering, business, design. Not one after the other. All at once."
      />
      <Timeline />
      <StoryResume />
    </React.Fragment>
  )
}
