import { getBlogHomeData } from "@/features/blog/wisp-blog"
import { formatLongDate } from "@/utils/format-date"
import InteractiveList from "@/components/list/interactive-list"

export default async function BlogList({
  isHomePage = false
}: {
  isHomePage?: boolean
}) {
  const { posts } = await getBlogHomeData()
  const recent = isHomePage ? posts.slice(0, 7) : posts

  return (
    <InteractiveList
      title="Writing"
      viewAll="/blog"
      items={recent.map((post) => ({
        id: post.slug,
        title: post.title,
        description: formatLongDate(post.publishedAt || post.createdAt),
        href: `/blog/${post.slug}`,
        icon: "file"
      }))}
      isHomePage={isHomePage}
    />
  )
}
