import React from "react"
import ContactSection from "../components/contact/ContactSection"
import HomeHeader from "../components/headers/HomeHeader"
import ShowcaseSection from "../components/showcase-section/ShowcaseSection"
import { works } from "../data/works"
import QuoteOfTheWeek from "../components/QuoteOfTheWeek"

export default function Home() {
  return (
    <React.Fragment>
      <HomeHeader />
      <QuoteOfTheWeek />
      <ShowcaseSection title="Works" viewAll="/work" items={works} isHomePage />

      {/* <BlogVerticalList /> */}
      <ContactSection className="mt-50 sm:mt-70" />
    </React.Fragment>
  )
}
