import { NavLink } from "react-router-dom"
import {
  RiDribbbleFill,
  RiGithubLine,
  RiInstagramLine,
  RiLinkedinBoxFill,
} from "@remixicon/react"

import { socialLinks } from "../data/links"

export default function SocialLinks() {
  return (
    <section className="flex items-center gap-3 sm:gap-4 sm:mt-2">
      {socialLinks.map((link) => (
        <NavLink
          key={link.link}
          to={link.link}
          target="_blank"
          prefetch="intent"
          className={"nav--link"}
        >
          {link.label === "Github" ? (
            <RiGithubLine size={19} />
          ) : link.label === "LinkedIn" ? (
            <RiLinkedinBoxFill size={19} />
          ) : link.label === "Instagram" ? (
            <RiInstagramLine size={19} />
          ) : link.label === "Dribbble" ? (
            <RiDribbbleFill size={19} />
          ) : (
            link.label
          )}
        </NavLink>
      ))}
    </section>
  )
}
