import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  agentRules: false,
  env: {
    NEXT_PUBLIC_FORMSPREE_KEY:
      process.env.NEXT_PUBLIC_FORMSPREE_KEY ?? process.env.FORMSPREE_KEY,
    NEXT_PUBLIC_BLOG_ID:
      process.env.NEXT_PUBLIC_BLOG_ID ?? process.env.PUBLIC_BLOG_ID,
    NEXT_PUBLIC_BOOK_ID:
      process.env.NEXT_PUBLIC_BOOK_ID ?? process.env.PUBLIC_BOOK_ID,
    NEXT_GITHUB_TOKEN:
      process.env.NEXT_GITHUB_TOKEN ?? process.env.GITHUB_TOKEN,
    NEXT_DATABASE_URL:
      process.env.NEXT_DATABASE_URL ?? process.env.DATABASE_URL,
    NEXT_DATABASE_URL_UNPOOLED:
      process.env.NEXT_DATABASE_URL_UNPOOLED ??
      process.env.DATABASE_URL_UNPOOLED,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "imagedelivery.net",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "github.com",
      },
      {
        protocol: "https",
        hostname: "brieflane.com",
      },
    ],
  },
}

export default nextConfig
