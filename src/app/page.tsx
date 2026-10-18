import { Metadata } from "next"

import WorksList from "@/components/work/WorksList"
import { site } from "@/constants/site"
import HomeHeader from "@/components/headers/HomeHeader"
import MyExperiences from "@/components/home/MyExperience"
import BlogList from "@/components/blog/BlogList"

export const metadata: Metadata = {
  title: site.dev,
  description: `${site.dev} — Software Engineer. Minimalist portfolio showcasing projects, experiences, and what motivates me as a software engineer.`,
  alternates: {
    canonical: site.url,
  },
  openGraph: {
    title: `My Works | ${site.dev}`,
    description: `${site.dev} — Software Engineer. Minimalist portfolio showcasing projects, experiences, and what motivates me as a software engineer.`,
    url: site.url,
    type: "website",
  },
}

export default async function HomePage() {
  return (
    <main className="flex flex-col gap-32">
      <HomeHeader />
      <MyExperiences isHomePage />
      <WorksList isHomePage />
      <BlogList isHomePage />
    </main>
  )
}
