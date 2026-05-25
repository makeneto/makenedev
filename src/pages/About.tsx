import DefaultHeader from "../components/headers/DefaultHeader"
import AboutDescription from "../components/about/AboutDescription"
import WorkExperience from "../components/about/WorkExperience"
import Faq from "../components/about/Faq"

export default function About() {
  return (
    <div>
      <DefaultHeader title="About me" component={<AboutDescription />} />
      <WorkExperience />
      <Faq />
    </div>
  )
}
