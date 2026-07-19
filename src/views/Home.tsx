"use client"

import React from "react"

import { works } from "../data/works"
import HomeHeader from "../components/headers/HomeHeader"
import ShowcaseSection from "../components/showcase-section/ShowcaseSection"
import QuoteOfTheWeek from "../components/QuoteOfTheWeek"
import MyServices from "../components/myServices/MyServices"
import Cta from "../components/contact/Cta"
import PricingSection from "../components/pricing/PricingSection"

export default function Home() {
  return (
    <React.Fragment>
      <HomeHeader />
      <QuoteOfTheWeek />
      <MyServices />
      <ShowcaseSection
        title="Last Works"
        viewAll="/work"
        items={works}
        isHomePage
      />
      <PricingSection />

      {/* <VerticalBlogList /> */}

      <Cta className="mt-50 sm:mt-70 xl:mt-90" />
    </React.Fragment>
  )
}
