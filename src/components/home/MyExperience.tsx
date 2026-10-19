import { getExperiencePeriod } from "@/data/experiencePeriods"
import { getExperienceHomeData } from "@/features/experience/wispExperiences"
import InteractiveList from "@/components/list/InteractiveList"
import { coverImage } from "@/services/wisp"

export default async function MyExperiences({
  isHomePage = false
}: {
  isHomePage?: boolean
}) {
  const { posts } = await getExperienceHomeData()

  return (
    <InteractiveList
      title="Experience"
      items={posts.map((experience) => ({
        id: experience.id,
        title: experience.title,
        description: experience.description,
        href: `/experience/${experience.slug}`,
        icon: experience.image ? "cover" : undefined,
        iconSrc: experience.image ? coverImage(experience.image) : undefined,
        meta: getExperiencePeriod(experience.slug)
      }))}
      viewAll={isHomePage ? "/experience" : undefined}
      isHomePage={isHomePage}
    />
  )
}
