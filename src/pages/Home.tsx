import React from "react"
import ContactSection from "../components/contact/ContactSection"
import HomeHeader from "../components/headers/HomeHeader"
import QuoteOfTheDay from "../components/QuoteOfTheDay"
import ShowcaseSection from "../components/showcase-section/ShowcaseSection"
import { works } from "../data/works"

export default function Home() {
  return (
    <React.Fragment>
      <HomeHeader />
      <QuoteOfTheDay />
      <ShowcaseSection
        title="Last Projects"
        viewAllHref="/work"
        items={works}
        isHomePage
      />

      <ContactSection className="mt-80" />
    </React.Fragment>
  )
}
