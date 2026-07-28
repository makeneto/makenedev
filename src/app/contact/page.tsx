"use client"

import ContactSection from "@/components/contact/ContactSection"
import { useTitle } from "@/hooks/useTitle"

export default function ContactPage() {
  useTitle("Contact Me")

  return <ContactSection className="mt-0" />
}
