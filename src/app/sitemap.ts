import type { MetadataRoute } from "next"

import { getPosts as getBlogPosts } from "@/features/blog/wispBlog"
import { getPosts as getWorkPosts } from "@/features/works/wispWorks"
import { getExperiencePosts } from "@/features/experience/wispExperiences"
import { site } from "@/constants/site"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [blogPosts, workPosts, experiencePosts] = await Promise.all([
    getExperiencePosts(),
    getWorkPosts(),
    getBlogPosts()
  ])

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: site.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1
    },
    {
      url: `${site.url}/experience`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9
    },
    {
      url: `${site.url}/work`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9
    },
    {
      url: `${site.url}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7
    },
    {
      url: `${site.url}/books`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.3
    }
  ]

  const experienceRoutes: MetadataRoute.Sitemap = experiencePosts.map(
    (post) => ({
      url: `${site.url}/experience/${post.slug}`,
      lastModified: post.updatedAt ?? post.publishedAt ?? new Date(),
      changeFrequency: "monthly",
      priority: 0.8
    })
  )
  const workRoutes: MetadataRoute.Sitemap = workPosts.map((post) => ({
    url: `${site.url}/work/${post.slug}`,
    lastModified: post.updatedAt ?? post.publishedAt ?? new Date(),
    changeFrequency: "monthly",
    priority: 0.8
  }))

  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${site.url}/blog/${post.slug}`,
    lastModified: post.updatedAt ?? post.publishedAt ?? new Date(),
    changeFrequency: "monthly",
    priority: 0.6
  }))

  return [...staticRoutes, ...experienceRoutes, ...workRoutes, ...blogRoutes]
}
