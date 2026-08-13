import React from "react"
import { Metadata } from "next"

import HomeHeader from "@/components/headers/HomeHeader"
import ShowcaseSection from "@/components/showcase-section/ShowcaseSection"
import MyServices from "@/components/myServices/MyServices"
import PricingSection from "@/components/pricing/PricingSection"
import BlogArea from "@/components/blog/BlogArea"
import LastBlog from "@/components/blog/LastBlog"
import VerticalBlogList from "@/components/blog/VerticalBlogList"
import { SITE_URL } from "@/constants/siteUrl"

export const metadata: Metadata = {
  title: "Makene Neto",
  description:
    "Makene Neto — Software Engineer. Minimalist portfolio showcasing projects, experiences, and what motivates me as a software engineer.",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "My Works | Makene Neto",
    description:
      "Makene Neto — Software Engineer. Minimalist portfolio showcasing projects, experiences, and what motivates me as a software engineer.",
    url: SITE_URL,
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
