import { Link } from "react-router-dom";

import { contacts } from "../../data/links";

export default function ProfileContact() {
  return (
    <section className="profile__contact">
      {contacts.map(({ label, href, display }) => (
        <div key={label} className="flex items-center justify-between">
          <p className="font-medium">{label}</p>
          <Link to={href} className="text-end text-zinc-400">
            {display}
          </Link>
        </div>
      ))}
    </section>
  )
}
