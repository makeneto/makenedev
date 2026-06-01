import { Link } from "react-router-dom"
import { RiGithubLine, RiLinkedinBoxFill } from "@remixicon/react"
import { Mail } from "lucide-react"

import { profileLinks } from "../../data/links"

export default function SocialProfiles() {
  return (
    <section className="profile__links">
      {profileLinks.map((link) => (
        <Link key={link.link} to={link.link} target="_blank" prefetch="intent">
          {link.label === "Github" ? (
            <RiGithubLine size={19} />
          ) : link.label === "LinkedIn" ? (
            <RiLinkedinBoxFill size={19} />
          ) : link.label === "Email" ? (
            <Mail size={19} />
          ) : null}
        </Link>
      ))}
    </section>
  )
}
