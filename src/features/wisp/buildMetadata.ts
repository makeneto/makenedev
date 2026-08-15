import { site } from "@/constants/site"
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
  const { notFoundTitle = "Content not found" } = options

  if (!post) {
    return { title: `${notFoundTitle} | ${site.dev}` }
  }

  return {
    title: `${post.title} | ${site.dev}`,
    description: post.description || undefined,
    openGraph: {
      title: `${post.title} | ${site.dev}`,
      description: post.description || undefined,
      images: post.image ? [post.image] : undefined,
    },
  }
}
