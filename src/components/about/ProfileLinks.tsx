import { Link } from "react-router-dom"

import { contacts } from "../../data/links"

export default function ProfileLinks() {
  return (
    <section className="profile__contact">
      {contacts.map(({ label, href, display }) => (
        <div key={label} className="flex items-center justify-between">
          <p className="sm:text-sm font-medium">{label}</p>

          <Link
            to={href}
            target={label === "Email" ? "_self" : "_blank"}
            className="sm:text-sm text-end"
          >
            {display}
          </Link>
        </div>
      ))}
    </section>
  )
}
