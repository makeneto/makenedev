import { Metadata } from "next"

import { site } from "@/constants/site"
import WorksList from "@/components/work/works-list"
import BlogList from "@/components/blog/blog-list"
import ExperiencesList from "@/components/experience/experience-list"
import HomeHeader from "@/components/home/home-header"

export const metadata: Metadata = {
  title: site.dev,
  description: `${site.dev} — Software Engineer. Minimalist portfolio showcasing projects, experiences, and what motivates me as a software engineer.`,
  alternates: {
    canonical: site.url
  },
  openGraph: {
    title: `My Works | ${site.dev}`,
    description: `${site.dev} — Software Engineer. Minimalist portfolio showcasing projects, experiences, and what motivates me as a software engineer.`,
    url: site.url,
    type: "website"
  }
}

export default async function HomePage() {
  return (
    <main className="flex flex-col gap-32">
      <HomeHeader />
      <ExperiencesList isHomePage />
      <WorksList isHomePage />
      <BlogList isHomePage />
    </main>
  )
}
