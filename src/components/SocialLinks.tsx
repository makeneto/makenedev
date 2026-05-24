import { Mail } from "lucide-react"
import { NavLink } from "react-router-dom"
import {
  RiGithubLine,
  RiInstagramLine,
  RiLinkedinBoxFill,
} from "@remixicon/react"

import { socialLinks } from "../data/links"

export default function SocialLinks() {
  return (
    <section className="flex items-center gap-4 mt-2">
      {socialLinks.map((link) => (
        <NavLink
          key={link.link}
          to={link.link}
          target="_blank"
          prefetch="intent"
          className={"nav--link"}
        >
          {link.label === "Github" ? (
            <RiGithubLine size={20} />
          ) : link.label === "LinkedIn" ? (
            <RiLinkedinBoxFill size={20} />
          ) : link.label === "Email" ? (
            <Mail size={20} />
          ) : link.label === "Instagram" ? (
            <RiInstagramLine size={20} />
          ) : (
            link.label
          )}
        </NavLink>
      ))}
    </section>
  )
}
