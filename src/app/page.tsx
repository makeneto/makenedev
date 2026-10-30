import { Metadata } from "next"

import { site } from "@/constants/site"
import WorksList from "@/components/work/works-list"
import BlogList from "@/components/blog/blog-list"

import HomeHeader from "@/components/home/home-header"

export const metadata: Metadata = {
  title: site.dev,
  description: `${site.dev} — ${site.description}`,
  alternates: {
    canonical: site.url
  },
  openGraph: {
    title: site.dev,
    description: `${site.dev} — ${site.description}`,
    url: site.url,
    type: "website"
  }
}

export default async function HomePage() {
  return (
    <main className="flex flex-col gap-32">
      <HomeHeader />
      <WorksList isHomePage />
      <BlogList isHomePage />
    </main>
  )
}
