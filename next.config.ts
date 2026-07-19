import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_FORMSPREE_KEY:
      process.env.NEXT_PUBLIC_FORMSPREE_KEY ?? process.env.VITE_FORMSPREE_KEY,
  },
}

export default nextConfig
