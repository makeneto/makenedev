import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { ExperienceContent } from "@/components/experience/experience-content"
import {
  getExperiencePostBySlug,
  getExperiencePosts
} from "@/features/experience/wisp-experiences"
import { getAdjacentExperiences } from "@/features/experience/get-adjacent-experiences"
import { buildPostMetadata } from "@/features/wisp/build-metadata"
import { ArticleJsonLd } from "@/components/seo/article-json-ld"

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
