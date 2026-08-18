import { useMemo } from "react"

import PostAside from "../post/PostAside"
import { ArticleMeta } from "./ArticleMeta"
import { TableOfContents } from "./TableOfContents"
import { processBlogContent } from "@/utils/processBlogContent"
import { useActiveHeading } from "@/hooks/useActiveHeading"
import { PostAsideProps } from "../work/WorkAside"

export default function BlogAside({ post, className }: PostAsideProps) {
  const { headings } = useMemo(
    () => processBlogContent(post.content),
    [post.content],
  )
  const { activeId, activateHeading } = useActiveHeading(headings)

  return (
    <PostAside className={className}>
      <ArticleMeta post={post} />
      <TableOfContents
        headings={headings}
        activeId={activeId}
        onItemClick={activateHeading}
        post={post}
      />
    </PostAside>
  )
}
