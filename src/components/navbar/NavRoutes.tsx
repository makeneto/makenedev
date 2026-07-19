"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

interface LinkProps {
  label: string
  link: string
}

interface NavRoutesProps {
  links: LinkProps[]
}

function isActivePath(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/"
  }

  return pathname === href || pathname.startsWith(`${href}/`)
}

export default function NavRoutes({ links }: NavRoutesProps) {
  const pathname = usePathname() ?? "/"

  return (
    <section className="flex items-center gap-3 sm:gap-5">
      {links.map((link) => (
        <Link
          key={link.link}
          href={link.link}
          translate={
            link.label === "Stack" || link.label === "Home" ? "no" : "yes"
          }
          className={
            isActivePath(pathname, link.link) ? "nav--activeLink" : "nav--link"
          }
          aria-label={`Visit ${link.label} page`}
        >
          {link.label}
        </Link>
      ))}
    </section>
  )
}
