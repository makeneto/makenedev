import { Link } from "react-router-dom"
import { ContactSectionHeader } from "./ContactSectionHeader"
import { RiQuestionAnswerLine, RiVideoChatLine } from "@remixicon/react"

export default function Cta({ className }: { className?: string }) {
  return (
    <section className={`${className} contact`}>
      <div className="contact__content">
        <div className="contact__left">
          <ContactSectionHeader />

          <div className="cta__buttons">
            <Link to="/contact" className="cta__button">
              Contact Me
              <RiQuestionAnswerLine />
            </Link>

            <Link to="https://calendly.com/makeneto17/30min" className="cta__button">
             Meet with Me
              <RiVideoChatLine />
            </Link>
          </div>
        </div>

        <img src="/assets/hero-img.webp" alt="Avatar" className="w-55 mx-auto" />
      </div>
    </section>
  )
}
