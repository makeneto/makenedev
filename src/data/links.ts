import {
  RiGithubFill,
  RiInstagramLine,
  RiLinkedinBoxFill
} from "@remixicon/react"

import { site } from "@/constants/site"
import { LinkType } from "@/interfaces/link-types"
import { Calendar1Icon, Mail } from "lucide-react"

export const navLinks: LinkType[] = [
  {
    ariaLabel: "Link to the Work page",
    label: "Work",
    href: "/work"
  },
  {
    ariaLabel: "Link to the Blog page",
    label: "Blog",
    href: "/blog"
  }
]

export const socialLinks: LinkType[] = [
  {
    ariaLabel: "Makene's GitHub",
    icon: RiGithubFill,
    href: site.github
  },
  {
    ariaLabel: "Makene's LinkedIn",
    icon: RiLinkedinBoxFill,
    href: "https://linkedin.com/in/makene-neto"
  },
  {
    ariaLabel: "Makene's Instagram",
    icon: RiInstagramLine,
    href: site.instagram
  }
]

export const contactLinks: LinkType[] = [
  {
    ariaLabel: "Schedule a call with Makene",
    label: "Book an intro call",
    icon: Calendar1Icon,
    buttonVariant: "default",
    href: site.call
  },
  {
    ariaLabel: "Send an email to Makene",
    label: "Send an email",
    icon: Mail,
    buttonVariant: "outline",
    href: `mailto:${site.email}`
  }
]

export const footerLinks: LinkType[] = [
  {
    ariaLabel: "Link to the Work page",
    label: "Work",
    href: "/work"
  },
  {
    ariaLabel: "Link to the Blog page",
    label: "Blog",
    href: "/blog"
  },
  {
    ariaLabel: "Link to the Books page",
    label: "Books",
    href: "/books"
  }
]
