import React from "react"
import { Metadata } from "next"

import { SITE_URL } from "@/constants/siteUrl"
import ContactSection from "@/components/contact/ContactSection"
import PageTitle from "@/components/PageTitle"

export const metadata: Metadata = {
  title: "Contact Me | Makene Neto",
  description:
    "I build scalable, high-performance digital solutions with clean, maintainable architecture and a strong focus on efficiency and measurable impact.",
  alternates: {
    canonical: `${SITE_URL}/contact`,
  },
  openGraph: {
    title: "Contact Me | Makene Neto",
    description:
      "I build scalable, high-performance digital solutions with clean, maintainable architecture and a strong focus on efficiency and measurable impact.",
    url: `${SITE_URL}/contact`,
    type: "website",
  },
}

export default function ContactPage() {
  return (
    <React.Fragment>
      <PageTitle title="Contact Me" />

      <ContactSection className="mt-0" />
    </React.Fragment>
  )
}
