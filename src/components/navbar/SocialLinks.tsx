import { RiInstagramLine, RiLinkedinBoxFill } from "@remixicon/react"
import Link from "next/link"

import { socialLinks } from "@/data/links"

export default function SocialLinks() {
  return (
    <ul className="flex items-center gap-3 sm:gap-4 sm:mr-3">
      {socialLinks.map((link) => (
        <Link
          key={link.link}
          href={link.link}
          target="_blank"
          rel="noopener noreferrer"
          className="nav--link"
        >
          {link.label === "LinkedIn" ? (
            <RiLinkedinBoxFill className="nav-icon" />
          ) : link.label === "Instagram" ? (
            <RiInstagramLine className="nav-icon" />
          ) : (
            link.label
          )}
        </Link>
      ))}
    </ul>
  )
}
