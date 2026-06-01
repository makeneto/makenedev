import DefaultHeader from "../components/headers/DefaultHeader"
import AboutDescription from "../components/about/AboutDescription"
import WorkExperience from "../components/about/WorkExperience"
import Timeline from "../components/about/Timeline"
import { useTitle } from "../hooks/useTitle"
import AboutResume from "../components/about/AboutResume"

export default function About() {
  useTitle("About Me")

  return (
    <div>
      <DefaultHeader title="About me" component={<AboutDescription />} />
      <WorkExperience />
      <Timeline />
      <AboutResume />
    </div>
  )
}
