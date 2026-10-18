import { getWorkHomeData } from "@/features/works/wispWorks"
import { site } from "@/constants/site"
import InteractiveList from "@/components/list/InteractiveList"

export interface isHomeProps {
  isHomePage?: boolean
}

export default async function WorksList({ isHomePage = false }: isHomeProps) {
  const { posts } = await getWorkHomeData()
  const items = posts.map((post) => {
    const domain = post.tags[0]?.name
    const websiteUrl = domain
      ? /^https?:\/\//i.test(domain)
        ? domain
        : `https://${domain}`
      : undefined
    const hostname = websiteUrl ? new URL(websiteUrl).hostname : undefined

    return {
      id: post.id,
      title: post.title,
      description: post.description,
      href: `/work/${post.slug}`,
      icon: "favicon" as const,
      iconSrc: hostname
        ? `https://www.google.com/s2/favicons?domain=${encodeURIComponent(hostname)}&sz=64`
        : undefined,
      fallbackIconSrc: hostname
        ? `https://icons.duckduckgo.com/ip3/${encodeURIComponent(hostname)}.ico`
        : undefined,
      actions: [
        ...(websiteUrl ? [{ label: "Website", href: websiteUrl }] : []),
        { label: "GitHub", href: `${site.github}/${post.slug}` },
      ],
    }
  })

  return (
    <InteractiveList
      title={isHomePage ? "Last Works" : "Works"}
      items={items}
      viewAll={isHomePage ? "/work" : undefined}
      count={isHomePage ? undefined : items.length}
      itemsPerPage={10}
      paginate={!isHomePage}
      isHomePage={isHomePage}
    />
  )
}
