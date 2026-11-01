import ReusableTooltip from "@/components/ui/reusable-tooltip"
import { socialLinks } from "@/data/links"
import Link from "next/link"

export default function SocialLinks() {
  return (
    <ul className="mt-3 flex justify-center gap-4.5">
      {socialLinks.map(({ ariaLabel, href, external, icon: Icon }) => (
        <ReusableTooltip key={`Go to ${ariaLabel}`} content={ariaLabel}>
          <Link
            href={href}
            target={external ? "_blank" : "_parent"}
            className="flex transition-opacity hover:opacity-80"
          >
            <Icon className="size-4.5" />
          </Link>
        </ReusableTooltip>
      ))}
    </ul>
  )
}
