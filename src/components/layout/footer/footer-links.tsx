import Link from "next/link"
import { ExternalLink } from "lucide-react"

import { site } from "@/constants/site"

export default function FooterLinks() {
  const currentYear = new Date().getFullYear()

  return (
    <section className="sm:w-auto flex flex-col sm:flex-row justify-between gap-3 items-center sm:justify-between border-t border-[--border-primary] pt-4">
      <span className="weak-text text-sm text-center sm:text-start">
        © {site.dev} | {currentYear}
      </span>

      <Link href="/links" className="nav--link flex items-center gap-1.5">
        Social Links <ExternalLink className="size-3.5" />
      </Link>
    </section>
  )
}
