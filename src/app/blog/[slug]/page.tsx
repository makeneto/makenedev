import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { getPostBySlug, getPosts } from "@/features/blog/wispBlog"
import { ArticleContent } from "@/components/blog/ArticleContent"
import { buildPostMetadata } from "@/features/wisp/buildMetadata"
import { ArticleJsonLd } from "@/components/seo/ArticleJsonLd"

type Props = { params: Promise<{ slug: string }> }

export const dynamicParams = true

export const revalidate = 600

export async function generateStaticParams() {
  const posts = await getPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

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
    <>
      <ArticleJsonLd post={post} type="blog" />

      <main>
        <ArticleContent post={post} />
      </main>
    </>
  )
}
