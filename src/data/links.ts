import { site } from "@/constants/site"
import { LinkType } from "@/interfaces/link-types"
import { CalendarDays, Mail } from "lucide-react"

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
  },
  {
    ariaLabel: "Link to the Books page",
    label: "Books",
    href: "/books"
  }
]

export const contactLinks: LinkType[] = [
  {
    ariaLabel: "Schedule a call with Makene",
    label: "Book an intro call",
    icon: CalendarDays,
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
    ariaLabel: "Go to the Github",
    label: "Github",
    href: site.github,
    external: true
  },
  {
    ariaLabel: "Go to LinkedIn",
    label: "LinkedIn",
    href: site.linkedin,
    external: true
  },
  {
    ariaLabel: "Go to the X (Twitter)",
    label: "twitter (x)",
    href: site.twitter,
    external: true
  },
  {
    ariaLabel: "Go to the Instagram",
    label: "Instagram",
    href: site.instagram,
    external: true
  }
]
