import type { Metadata } from "next"

import { notFound } from "next/navigation"
import { getPostBySlug, getPosts } from "@/features/blog/wisp-blog"
import { getAdjacentPosts } from "@/features/blog/get-adjacent-posts"
import { ArticleContent } from "@/components/blog/article-content"
import { buildPostMetadata } from "@/features/wisp/build-metadata"
import { ArticleJsonLd } from "@/components/seo/article-json-ld"

type Props = { params: Promise<{ slug: string }> }

export const dynamicParams = true

export const revalidate = 300

export async function generateStaticParams() {
  const posts = await getPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  return buildPostMetadata(post, {
    notFoundTitle: "Post not found"
  })
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  const { previous, next } = await getAdjacentPosts(slug)

  if (!post) notFound()

  return (
    <>
      <ArticleJsonLd post={post} type="blog" />

      <main>
        <ArticleContent post={post} previous={previous} next={next} />
      </main>
    </>
  )
}
