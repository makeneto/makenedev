import AboutDescription from "../components/about/AboutDescription"
import Faq from "../components/about/Faq"
import DefaultHeader from "../components/headers/DefaultHeader"

export default function About() {
  return (
    <div>
      <DefaultHeader title="About me" component={<AboutDescription />} />

      <Faq />
    </div>
  )
}
