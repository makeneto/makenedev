import { useMemo } from "react"

import PostAside from "../post/PostAside"
import { BlogArticle } from "@/services/wisp"
import { ArticleMeta } from "./ArticleMeta"
import { TableOfContents } from "./TableOfContents"
import { processBlogContent } from "@/utils/processBlogContent"
import { useActiveHeading } from "@/hooks/useActiveHeading"

export default function BlogAside({ post }: { post: BlogArticle }) {
  const { headings } = useMemo(
    () => processBlogContent(post.content),
    [post.content],
  )
  const { activeId, activateHeading } = useActiveHeading(headings)

  return (
    <PostAside>
      <TableOfContents
        headings={headings}
        activeId={activeId}
        onItemClick={activateHeading}
      />

      <ArticleMeta post={post} />
    </PostAside>
  )
}
