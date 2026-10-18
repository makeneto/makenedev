import { experiences } from "@/data/experienceList"
import InteractiveList from "@/components/list/InteractiveList"

export default function MyExperiences({
  isHomePage = false,
}: {
  isHomePage?: boolean
}) {
  return (
    <InteractiveList
      title="Experience"
      items={experiences.experiences.map((experience) => ({
        id: experience.title,
        title: experience.title,
        description: experience.description,
        meta: experience.period,
      }))}
      isHomePage={isHomePage}
    />
  )
}
