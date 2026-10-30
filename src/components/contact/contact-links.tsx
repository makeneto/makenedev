import Link from "next/link"

import { Button } from "@/components/ui/button"
import { contactLinks } from "@/data/links"

export function ContactLinks() {
  return (
    <ul className="flex flex-wrap gap-2">
      {contactLinks.map(({ href, label, buttonVariant, icon: Icon }) => (
        <li key={href}>
          <Button asChild variant={buttonVariant}>
            <Link href={href} target="_blank" aria-label="Go to contact channel" rel="noopener noreferrer">
              {Icon ? <Icon aria-hidden="true" focusable="false" /> : null}
              {label}
            </Link>
          </Button>
        </li>
      ))}
    </ul>
  )
}
