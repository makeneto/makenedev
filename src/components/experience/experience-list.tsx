import { getExperiencePeriod } from "@/data/experience-periods"
import { getExperienceHomeData } from "@/features/experience/wisp-experiences"
import InteractiveList from "@/components/shared/interactive-list/interactive-list"
import { coverImage } from "@/services/wisp"

export default async function ExperiencesList({
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
