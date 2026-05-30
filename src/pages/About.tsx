import DefaultHeader from "../components/headers/DefaultHeader"
import AboutDescription from "../components/about/AboutDescription"
import WorkExperience from "../components/about/WorkExperience"
import Timeline from "../components/about/Timeline"
import { useTitle } from "../hooks/useTitle"
import StoryResume from "../components/about/StoryResume"

export default function About() {
  useTitle("About Me")

  return (
    <div>
      <DefaultHeader title="About me" component={<AboutDescription />} />
      <WorkExperience />
      <Timeline />
      <StoryResume />
    </div>
  )
}
