import { footerLinks } from "../../data/links"
import NavRoutes from "../navbar/NavRoutes"

export default function FooterLinks() {
  const currentYear = new Date().getFullYear()

  return (
    <section className="w-screen sm:w-auto grid justify-center gap-4 sm:flex items-center sm:justify-between border-t border-[--border-primary] pt-6">
      <p className="text-zinc-500 dark:text-zinc-400 text-sm text-center sm:text-start">
        © Makene Neto | {currentYear}
      </p>

      <NavRoutes links={footerLinks} />
    </section>
  )
}
