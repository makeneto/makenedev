import type { MetadataRoute } from "next"

import { getPosts as getBlogPosts } from "@/features/blog/wispBlog"
import { getPosts as getWorkPosts } from "@/features/works/wispWorks"
import { SITE_URL } from "@/constants/siteUrl"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [blogPosts, workPosts] = await Promise.all([
    getBlogPosts(),
    getWorkPosts(),
  ])

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/work`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/stack`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.4,
    },
    {
      url: `${SITE_URL}/setup`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/books`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.3,
    },
  ]

  const workRoutes: MetadataRoute.Sitemap = workPosts.map((post) => ({
    url: `${SITE_URL}/work/${post.slug}`,
    lastModified: post.updatedAt ?? post.publishedAt ?? new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }))

  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: post.updatedAt ?? post.publishedAt ?? new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  }))

  return [...staticRoutes, ...workRoutes, ...blogRoutes]
}
