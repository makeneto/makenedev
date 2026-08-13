import type { Metadata } from "next"

type WispPost = {
  title: string
  description?: string | null
  image?: string | null
} | null

interface BuildMetadataOptions {
  notFoundTitle?: string
}

export function buildPostMetadata(
  post: WispPost,
  options: BuildMetadataOptions,
): Metadata {
  const siteName = "Makenedev"
  const { notFoundTitle = "Content not found" } = options

  if (!post) {
    return { title: `${notFoundTitle} — ${siteName}` }
  }

  return {
    title: `${post.title} | ${siteName}`,
    description: post.description || undefined,
    openGraph: {
      title: post.title,
      description: post.description || undefined,
      images: post.image ? [post.image] : undefined,
    },
  }
}
