import { Link } from "react-router-dom"

export function ContactSectionEmail() {
  return (
    <div>
      <p className="contact__email">For direct inquiries, please email</p>
      <Link to="mailto:makenedev@gmail.com" target="_blank" aria-label="Email me">
        makenedev@gmail.com
      </Link>
    </div>
  )
}
