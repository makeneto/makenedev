import React from "react"
import { Metadata } from "next"

import HomeHeader from "@/components/headers/HomeHeader"
import ShowcaseSection from "@/components/showcase-section/ShowcaseSection"
import MyServices from "@/components/myServices/MyServices"
import PricingSection from "@/components/pricing/PricingSection"
import BlogArea from "@/components/blog/BlogArea"
import LastBlog from "@/components/blog/LastBlog"
import VerticalBlogList from "@/components/blog/VerticalBlogList"
import { site } from "@/constants/site"

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
    <React.Fragment>
      <HomeHeader />
      <MyServices />
      <ShowcaseSection title="Last Works" viewAll="/work" isHomePage />
      <PricingSection />
      <BlogArea isHome>
        <LastBlog />
        <VerticalBlogList />
      </BlogArea>
    </React.Fragment>
  )
}
