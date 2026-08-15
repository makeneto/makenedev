import React from "react"
import { Metadata } from "next"

import { site } from "@/constants/site"
import ContactSection from "@/components/contact/ContactSection"

export const metadata: Metadata = {
  title: `Contact Me | ${site.dev}`,
  description:
    "I build scalable, high-performance digital solutions with clean, maintainable architecture and a strong focus on efficiency and measurable impact.",
  alternates: {
    canonical: `${site.url}/contact`,
  },
  openGraph: {
    title: `Contact Me | ${site.dev}`,
    description:
      "I build scalable, high-performance digital solutions with clean, maintainable architecture and a strong focus on efficiency and measurable impact.",
    url: `${site.url}/contact`,
    type: "website",
  },
}

export default function ContactPage() {
  return (
    <React.Fragment>
      <ContactSection className="mt-0" />
    </React.Fragment>
  )
}
