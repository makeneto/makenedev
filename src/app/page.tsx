import React from "react"

import HomeHeader from "@/components/headers/HomeHeader"
import ShowcaseSection from "@/components/showcase-section/ShowcaseSection"
import MyServices from "@/components/myServices/MyServices"
import PricingSection from "@/components/pricing/PricingSection"
import BlogArea from "@/components/blog/BlogArea"
import LastBlog from "@/components/blog/LastBlog"
import VerticalBlogList from "@/components/blog/VerticalBlogList"

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
