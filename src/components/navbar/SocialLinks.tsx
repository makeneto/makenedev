import Link from "next/link"

import { socialLinks } from "@/data/links"
import { RemixiconComponentType } from "@remixicon/react"

type SocialLink = {
  ariaLabel: string
  href: string
  icon?: RemixiconComponentType
}

export default function SocialLinks() {
  return (
    <ul className="flex items-center gap-3 sm:gap-4 sm:mr-3">
      {socialLinks.map(({ ariaLabel, href, icon: Icon }: SocialLink) => {
        if (!Icon) return null

        return (
          <li key={href}>
            <Link
              className="nav--link"
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={ariaLabel}
            >
              <Icon aria-hidden="true" focusable="false" className="nav-icon" />
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
