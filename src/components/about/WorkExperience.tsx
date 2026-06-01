import ShowcaseHeader from "../showcase-section/ShowcaseHeader"
import Experiences from "./Experiences"
import Profile from "./Profile"

export default function WorkExperience() {
  return (
    <section>
      <ShowcaseHeader title="Profile" />
      <section className="work-experience">
        <Profile />
        <Experiences />
      </section>
    </section>
  )
}
