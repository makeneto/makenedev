import { footerLinks } from "../../data/links"
import NavRoutes from "../NavRoutes"

export default function FooterLinks() {
  const currentYear = new Date().getFullYear()

  return (
    <section className="footer__links flex items-center justify-between">
      <p className="text-gray-500">@ Makenedev | {currentYear}</p>
      <NavRoutes links={footerLinks} />
    </section>
  )
}
