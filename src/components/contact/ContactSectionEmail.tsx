import { Link } from "react-router-dom"

export function ContactSectionEmail() {
  return (
    <>
      <p className="contact__email">For direct inquiries, please email</p>
      <Link to="mailto:makenedev@gmail.com" target="_blank">
        makenedev@gmail.com
      </Link>
    </>
  )
}
