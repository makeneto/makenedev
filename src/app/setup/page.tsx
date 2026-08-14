import React from "react"
import { Metadata } from "next"

import { SITE_URL } from "@/constants/siteUrl"
import DefaultHeader from "@/components/headers/DefaultHeader"
import SetupResume from "@/components/setup/SetupResume"
import SetupSection from "@/components/setup/SetupSection"
import PageTitle from "@/components/PageTitle"

export const metadata: Metadata = {
  title: "My Setup | Makene Neto",
  description: "Every device I use has earned its place through daily work.",
  alternates: {
    canonical: `${SITE_URL}/setup`,
  },
  openGraph: {
    title: "My Setup | Makene Neto",
    description: "Every device I use has earned its place through daily work.",
    url: `${SITE_URL}/setup`,
    type: "website",
  },
}

export default function SetupPage() {
  return (
    <React.Fragment>
      <PageTitle title="My Setup" />

      <DefaultHeader
        title="My Setup"
        description={
          "Every device I use has earned its place through daily work. From my laptop and desktop to my phone and peripherals, this is the gear that powers my projects, learning, and workflow. These are the tools I rely on every day to build, create, and stay productive."
        }
      />

      <SetupSection />
      <SetupResume />
    </React.Fragment>
  )
}
