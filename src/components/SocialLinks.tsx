import { NavLink } from "react-router-dom"
import {
  RiDribbbleLine,
  RiGithubLine,
  RiInstagramLine,
  RiLinkedinBoxFill,
} from "@remixicon/react"

import { socialLinks } from "../data/links"

export default function SocialLinks() {
  return (
    <section className="flex items-center gap-3 sm:gap-4">
      {socialLinks.map((link) => (
        <NavLink
          key={link.link}
          to={link.link}
          target="_blank"
          prefetch="intent"
          className="nav--link"
        >
          {link.label === "Github" ? (
            <RiGithubLine className="nav-icon" />
          ) : link.label === "LinkedIn" ? (
            <RiLinkedinBoxFill className="nav-icon" />
          ) : link.label === "Instagram" ? (
            <RiInstagramLine className="nav-icon" />
          ) : link.label === "Dribbble" ? (
            <RiDribbbleLine className="nav-icon" />
          ) : (
            link.label
          )}
        </NavLink>
      ))}
    </section>
  )
}
