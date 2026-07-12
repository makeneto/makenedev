import { Link } from "react-router-dom";
import { RiArrowRightSLine } from "@remixicon/react";

interface PricingButtonProps {
      highlighted?: boolean
      buttonText: string
}

export default function PricingButton({ highlighted, buttonText }: PricingButtonProps) {
  return (
    <Link
        to="/contact"
        prefetch="intent"
        className={`pricing__button ${highlighted ? "pricing__button--primary" : ""}`}
        aria-label={`Get started Now`}
      >
        {buttonText}
        {highlighted && <RiArrowRightSLine size={18} />}
      </Link>
  )
}