import DefaultHeader from "../components/headers/DefaultHeader"
import WorkExperience from "../components/about/WorkExperience"
import Timeline from "../components/about/Timeline"
import { useTitle } from "../hooks/useTitle"
import AboutResume from "../components/about/AboutResume"

export default function About() {
  useTitle("About Me")

  return (
    <div>
      <DefaultHeader
        title="About me"
        description="Front-end Developer specialized in building modern, responsive, and
          high-performance web applications with React, TypeScript, and Next.js.
          Experienced in developing scalable user interfaces, integrating APIs,
          managing complex application state, and delivering intuitive user
          experiences. Familiar with back-end technologies including Node.js,
          Express and PostgreSQL, enabling effective collaboration across the
          full product development lifecycle."
      />
      <WorkExperience />
      <Timeline />
      <AboutResume />
    </div>
  )
}
