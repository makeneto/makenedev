import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { ArticleContent } from "@/components/blog/ArticleContent"
import { getPostBySlug } from "@/features/works/wispWorks"
import { buildPostMetadata } from "@/features/wisp/buildMetadata"

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  return buildPostMetadata(post, {
    notFoundTitle: "Project not found",
  })
}

export default async function WorkPostPage({ params }: Props) {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) notFound()

  return (
    <main>
      <ArticleContent post={post} />
    </main>
  )
}
