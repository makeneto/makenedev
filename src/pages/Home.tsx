import React from "react"

import { works } from "../data/works"
import ContactSection from "../components/contact/ContactSection"
import HomeHeader from "../components/headers/HomeHeader"
import ShowcaseSection from "../components/showcase-section/ShowcaseSection"
import QuoteOfTheWeek from "../components/QuoteOfTheWeek"
import VerticalBlogList from "../components/blogs/VerticalBlogList"

export default function Home() {
  return (
    <React.Fragment>
      <HomeHeader />
      <QuoteOfTheWeek />
      <ShowcaseSection title="Works" viewAll="/work" items={works} isHomePage />

      <VerticalBlogList />
      <ContactSection className="mt-50 sm:mt-70" />
    </React.Fragment>
  )
}
