import { Metadata } from "next"

import { site } from "@/constants/site"
import AboutMe from "@/components/home/about/about-me"

export const metadata: Metadata = {
  title: `Social Links | ${site.dev}`,
  description:
    "Connect with me across social platforms. Explore my profiles, follow my work, and stay updated on what I'm building.",
  alternates: {
    canonical: `${site.url}/links`
  },
  openGraph: {
    title: `Social Links | ${site.dev}`,
    description:
      "Connect with me across social platforms. Explore my profiles, follow my work, and stay updated on what I'm building.",
    url: `${site.url}/links`,
    type: "website"
  }
}

export default function LinksPage() {
  return <AboutMe />
}
