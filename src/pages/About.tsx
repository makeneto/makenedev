import DefaultHeader from "../components/headers/DefaultHeader"
import AboutDescription from "../components/about/AboutDescription"
import WorkExperience from "../components/about/WorkExperience"
import Faq from "../components/about/Faq"
import Timeline from "../components/story/Timeline"

export default function About() {
  return (
    <div>
      <DefaultHeader title="About me" component={<AboutDescription />} />
      <Timeline />
      <WorkExperience />
      <Faq />
    </div>
  )
}
