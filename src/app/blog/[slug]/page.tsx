import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { getPostBySlug } from "@/features/blog/wispBlog"
import { ArticleContent } from "@/components/blog/ArticleContent"
import { buildPostMetadata } from "@/features/postMetadata"

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  return buildPostMetadata(post, {
    notFoundTitle: "Post not found",
  })
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) notFound()

  return (
    <main>
      <ArticleContent post={post} />
    </main>
  )
}
