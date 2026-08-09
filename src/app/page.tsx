import React from "react"

import { works } from "@/data/works"
import HomeHeader from "@/components/headers/HomeHeader"
import ShowcaseSection from "@/components/showcase-section/ShowcaseSection"
import MyServices from "@/components/myServices/MyServices"
import PricingSection from "@/components/pricing/PricingSection"
import BlogArea from "@/components/blogs/BlogArea"
import LastBlog from "@/components/blogs/LastBlog"
import VerticalBlogList from "@/components/blogs/VerticalBlogList"

export default async function HomePage() {
  return (
    <React.Fragment>
      <HomeHeader />
      <MyServices />
      <ShowcaseSection
        title="Last Works"
        viewAll="/work"
        items={works}
        isHomePage
      />
      <PricingSection />
      <BlogArea isHome>
        <LastBlog vertical />
        <VerticalBlogList />
      </BlogArea>
    </React.Fragment>
  )
}
