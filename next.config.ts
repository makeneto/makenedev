import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  agentRules: false,
  env: {
    NEXT_PUBLIC_FORMSPREE_KEY:
      process.env.NEXT_PUBLIC_FORMSPREE_KEY ?? process.env.VITE_FORMSPREE_KEY,
    NEXT_PUBLIC_BLOG_ID:
      process.env.NEXT_PUBLIC_BLOG_ID ?? process.env.NEXT_PUBLIC_BLOG_ID,
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
