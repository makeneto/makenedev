import { footerLinks } from "@/data/links"
import NavRoutes from "../navbar/NavRoutes"
import { site } from "@/constants/site"

export default function FooterLinks() {
  const currentYear = new Date().getFullYear()

  return (
    <section className="sm:w-auto flex  sm:flex-row justify-between gap-3 items-center sm:justify-between border-t border-[--border-primary] pt-6">
      <span className="weak-text text-sm text-center sm:text-start">
        © {site.dev} | {currentYear}
      </span>

      <NavRoutes links={footerLinks} />
    </section>
  )
}
