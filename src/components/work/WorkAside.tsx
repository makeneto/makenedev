import { BlogArticle } from "@/services/wisp"
import { useMemo } from "react"
import { processBlogContent } from "@/utils/processBlogContent"
import { useActiveHeading } from "@/hooks/useActiveHeading"
import { TableOfContents } from "../blog/TableOfContents"
import { WorkMeta } from "./WorkMeta"
import PostAside from "../post/PostAside"

export interface PostAsideProps {
  post: BlogArticle
  className?: string
}

export default function WorkAside({ post, className }: PostAsideProps) {
  const { headings } = useMemo(
    () => processBlogContent(post.content),
    [post.content],
  )
  const { activeId, activateHeading } = useActiveHeading(headings)

  return (
    <PostAside className={className}>
      <WorkMeta />

      <TableOfContents
        headings={headings}
        activeId={activeId}
        onItemClick={activateHeading}
        post={post}
      />
    </PostAside>
  )
}
