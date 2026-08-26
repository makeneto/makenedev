import Link from "next/link"
import { RiArrowRightSLine } from "@remixicon/react"

interface PricingButtonProps {
  link: string
  externalLink?: boolean
  highlighted?: boolean
  buttonText: string
}

export default function PricingButton({
  link,
  externalLink = false,
  highlighted,
  buttonText,
}: PricingButtonProps) {
  return (
    <Link
      href={link}
      target={externalLink ? "_blank" : "_self"}
      className={`pricing__button ${highlighted ? "pricing__button--primary" : ""}`}
      aria-label="Get started Now"
    >
      {buttonText}
      {highlighted && <RiArrowRightSLine size={18} />}
    </Link>
  )
}
