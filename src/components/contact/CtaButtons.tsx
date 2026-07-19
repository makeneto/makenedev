import { RiQuestionAnswerLine, RiVideoChatLine } from "@remixicon/react"
import Link from "next/link"

export default function CtaButtons() {
  return (
    <div className="cta__buttons">
      <Link
        href="/contact"
        className="cta__button"
        aria-label="Contact Me"
      >
        Contact Me
        <RiQuestionAnswerLine />
      </Link>

      <a
        href="https://calendly.com/makeneto17/30min"
        className="cta__button"
        aria-label="Schedule a Meeting"
        target="_blank"
        rel="noopener noreferrer"
      >
        Meet with Me
        <RiVideoChatLine />
      </a>
    </div>
  )
}
