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
import { SelectWork } from "@/components/work/SelectWork"
import { SelectFormat } from "@/components/work/SelectFormat"

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
      <ShowcaseSection title="Works" isHomePage>
        <div className="flex items-center gap-5">
          <SelectWork />
          <SelectFormat />
        </div>
      </ShowcaseSection>
      <PricingSection />
      <BlogArea isHome>
        <LastBlog />
        <VerticalBlogList />
      </BlogArea>
    </React.Fragment>
  )
}
