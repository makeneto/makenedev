import type { ShowcaseSectionProps } from "@/interfaces/showcase"
import ShowcaseContent from "./ShowcaseContent"
import { getWorkHomeData } from "@/features/works/wispWorks"

export default async function ShowcaseSection({
  title,
  viewAll,
  isHomePage = false,
  isShowcase,
}: ShowcaseSectionProps) {
  const { posts } = await getWorkHomeData()

  return (
    <ShowcaseContent
      posts={posts}
      title={title}
      viewAll={viewAll}
      isHomePage={isHomePage}
      isShowcase={isShowcase}
    />
  )
}
