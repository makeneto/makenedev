"use client"

import React from "react"

import ContactSection from "@/components/contact/ContactSection"
import PageTitle from "@/components/PageTitle"

export default function ContactPage() {
  return (
    <React.Fragment>
      <PageTitle title="Contact Me" />

      <ContactSection className="mt-0" />
    </React.Fragment>
  )
}
