import { BlogArticle } from "@/services/wisp"
import { ArticleMeta } from "./ArticleMeta"
import { TableOfContents } from "./TableOfContents"
import { useMemo } from "react"
import { processBlogContent } from "@/utils/processBlogContent"
import { useActiveHeading } from "@/hooks/useActiveHeading"

export default function BlogAside({ post }: { post: BlogArticle }) {
  const { headings } = useMemo(
    () => processBlogContent(post.content),
    [post.content],
  )
  const { activeId, activateHeading } = useActiveHeading(headings)

  return (
    <aside className="blog-aside sticky top-10 h-fit">
      <TableOfContents
        headings={headings}
        activeId={activeId}
        onItemClick={activateHeading}
      />

      <ArticleMeta post={post} />
    </aside>
  )
}
