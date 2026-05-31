import { footerLinks } from "../../data/links"
import NavRoutes from "../NavRoutes"

export default function FooterLinks() {
  const currentYear = new Date().getFullYear()

  return (
    <section className="footer__links grid gap-4 sm:flex items-center justify-between">
      <p className="text-gray-500 text-center sm:text-start">
        @ Makenedev | {currentYear}
      </p>
      <NavRoutes links={footerLinks} />
    </section>
  )
}
