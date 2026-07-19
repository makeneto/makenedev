import Link from "next/link"

import { contacts } from "../../data/links"

export default function ProfileLinks() {
  return (
    <section className="profile__contact">
      {contacts.map(({ label, href, display }) => {
        const isInternal = href.startsWith("/")

        if (isInternal) {
          return (
            <div key={label} className="flex items-center justify-between">
              <p className="sm:text-sm font-medium">{label}</p>

              <Link
                href={href}
                className="sm:text-sm text-end"
                aria-label={`Visit my ${label}`}
              >
                {display}
              </Link>
            </div>
          )
        }

        return (
          <div key={label} className="flex items-center justify-between">
            <p className="sm:text-sm font-medium">{label}</p>

            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="sm:text-sm text-end"
              aria-label={`Visit my ${label}`}
            >
              {display}
            </a>
          </div>
        )
      })}
    </section>
  )
}
