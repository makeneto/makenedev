"use client"

import ContactSection from "../components/contact/ContactSection"
import { useTitle } from "../hooks/useTitle"

export default function Contact() {
  useTitle("Contact Me")

  return <ContactSection className="mt-0" />
}
