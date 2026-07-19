import Link from "next/link"
import { RiArrowRightSLine } from "@remixicon/react"

interface PricingButtonProps {
  highlighted?: boolean
  buttonText: string
}

export default function PricingButton({
  highlighted,
  buttonText,
}: PricingButtonProps) {
  return (
    <Link
      href="/contact"
      className={`pricing__button ${highlighted ? "pricing__button--primary" : ""}`}
      aria-label="Get started Now"
    >
      {buttonText}
      {highlighted && <RiArrowRightSLine size={18} />}
    </Link>
  )
}
