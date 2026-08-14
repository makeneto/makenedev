import { site } from "@/constants/site"
import Link from "next/link"

export function ContactSectionEmail() {
  return (
    <div>
      <p className="contact__email">For direct inquiries, please email</p>
      <Link href={`mailto:${site.email}`} aria-label="Email me">
        {site.email}
      </Link>
    </div>
  )
}
