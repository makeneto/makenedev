"use client"

import { LinkType } from "@/interfaces/link-types"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface NavRoutesProps {
  links: LinkType[]
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
          key={link.href}
          href={link.href}
          target={link.external ? "_blank" : "_self"}
          translate={link.label === "Home" ? "no" : "yes"}
          className={`text-sm ${
            isActivePath(pathname, link.href) ? "nav--activeLink" : "nav--link"
          }`}
          aria-label={`Visit ${link.label} page`}
        >
          {link.label}
        </Link>
      ))}
    </section>
  )
}
