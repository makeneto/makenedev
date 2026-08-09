import Link from "next/link"

export function ContactSectionEmail() {
  return (
    <div>
      <p className="contact__email">For direct inquiries, please email</p>
      <Link href="mailto:makenedev@gmail.com" aria-label="Email me">
        makenedev@gmail.com
      </Link>
    </div>
  )
}
