import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { WorkContent } from "@/components/work/WorkContent"
import { getPostBySlug, getPosts } from "@/features/works/wispWorks"
import { buildPostMetadata } from "@/features/wisp/buildMetadata"
import { ArticleJsonLd } from "@/components/seo/ArticleJsonLd"
import { getAdjacentWorks } from "@/features/works/getAdjacentWorks"

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
    notFoundTitle: "Project not found",
  })
}

export default async function WorkPostPage({ params }: Props) {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  const { previous, next } = await getAdjacentWorks(slug)

  if (!post) notFound()

  return (
    <>
      <ArticleJsonLd post={post} type="work" />

      <main>
        <WorkContent post={post} previous={previous} next={next} />
      </main>
    </>
  )
}
