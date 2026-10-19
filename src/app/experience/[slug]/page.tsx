import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { ExperienceContent } from "@/components/experience/ExperienceContent"
import {
  getExperiencePostBySlug,
  getExperiencePosts
} from "@/features/experience/wispExperiences"
import { getAdjacentExperiences } from "@/features/experience/getAdjacentExperiences"
import { buildPostMetadata } from "@/features/wisp/buildMetadata"
import { ArticleJsonLd } from "@/components/seo/ArticleJsonLd"

type Props = { params: Promise<{ slug: string }> }

export const dynamicParams = true
export const revalidate = 300

export async function generateStaticParams() {
  const posts = await getExperiencePosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = await getExperiencePostBySlug(slug)

  return buildPostMetadata(post, {
    notFoundTitle: "Experience not found"
  })
}

export default async function ExperiencePostPage({ params }: Props) {
  const { slug } = await params
  const post = await getExperiencePostBySlug(slug)
  const { previous, next } = await getAdjacentExperiences(slug)

  if (!post) notFound()

  return (
    <>
      <ArticleJsonLd post={post} type="work" />

      <main>
        <ExperienceContent post={post} previous={previous} next={next} />
      </main>
    </>
  )
}
