import { FaqAccordion } from "./FaqAccordion";

export default function Faq() {
  return (
    <section className="faq">
      <header className="faq__header">
        <span className="faq__header--subtitle">faq</span>
        <h1>
          Frequently Asked <br /> <span>Questions</span>
        </h1>
      </header>

      <FaqAccordion />
    </section>
  )
}
