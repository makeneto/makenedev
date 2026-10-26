import { getWorkHomeData } from "@/features/works/wisp-works"
import { coverImage } from "@/services/wisp"
import { site } from "@/constants/site"
import InteractiveList from "@/components/shared/interactive-list/interactive-list"

export interface isHomeProps {
  isHomePage?: boolean
}

export default async function WorksList({ isHomePage = false }: isHomeProps) {
  const { posts } = await getWorkHomeData()

  return (
    <InteractiveList
      title={isHomePage ? "Last Works" : "Works"}
      items={posts.map((post) => ({
        id: post.id,
        title: post.title,
        description: post.description,
        href: `/work/${post.slug}`,
        icon: post.image ? "cover" : undefined,
        iconSrc: post.image ? coverImage(post.image) : undefined,
        actions: [
          ...(post.tags[0]?.name
            ? [{ label: "Website", href: `https://${post.tags[0].name}` }]
            : []),
          { label: "GitHub", href: `${site.github}/${post.slug}` }
        ]
      }))}
      viewAll={isHomePage ? "/work" : undefined}
      count={isHomePage ? undefined : posts.length}
      itemsPerPage={10}
      paginate={!isHomePage}
      isHomePage={isHomePage}
    />
  )
}
