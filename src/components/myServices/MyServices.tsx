import ShowcaseHeader from "../showcase-section/ShowcaseHeader"
import ServicesList from "./ServicesList"

export default function MyServices() {
  return (
    <section className="mb-50 sm:mb-70">
      <ShowcaseHeader
        title="My Services"
        linkSection="/contact"
        textLink="Contact"
      />

      <ServicesList />
    </section>
  )
}
