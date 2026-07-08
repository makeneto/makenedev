import { RiQuestionAnswerLine, RiVideoChatLine } from "@remixicon/react";
import { Link } from "react-router-dom";

export default function CtaButtons() {
  return (
    <div className="cta__buttons">
      <Link to="/contact" prefetch="intent" className="cta__button" aria-label="Contact Me">
        Contact Me
        <RiQuestionAnswerLine />
      </Link>

      <Link to="https://calendly.com/makeneto17/30min" prefetch="intent" className="cta__button" aria-label="Schedule a Meeting">
        Meet with Me
        <RiVideoChatLine />
      </Link>
    </div>
  )
}
