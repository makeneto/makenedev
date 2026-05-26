import { ContactSection } from "../components/contact/ContactSection"
import HomeHeader from "../components/headers/HomeHeader"
import QuoteOfTheDay from "../components/QuoteOfTheDay"

export default function Home() {
  return (
    <>
      <HomeHeader />
      <QuoteOfTheDay />
      <ContactSection />
    </>
  )
}
