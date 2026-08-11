import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { getPost, getPosts } from "@/features/blog/wispBlog"
import { ArticleView } from "@/components/blog/ArticleView"

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  const posts = await getPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = await getPost(slug)
  if (!post) return { title: "Texto não encontrado — Makenedev" }

  return {
    title: `${post.title} | Makene Neto`,
    description: post.description || undefined,
    openGraph: {
      title: post.title,
      description: post.description || undefined,
      images: post.image ? [post.image] : undefined,
    },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = await getPost(slug)
  if (!post) notFound()

  return (
    <main>
      <ArticleView post={post} />
    </main>
  )
}
