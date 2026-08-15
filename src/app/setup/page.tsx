import React from "react"
import { Metadata } from "next"

import { site } from "@/constants/site"
import DefaultHeader from "@/components/headers/DefaultHeader"
import SetupResume from "@/components/setup/SetupResume"
import SetupSection from "@/components/setup/SetupSection"

export const metadata: Metadata = {
  title: `My Setup | ${site.dev}`,
  description: "Every device I use has earned its place through daily work.",
  alternates: {
    canonical: `${site.url}/setup`,
  },
  openGraph: {
    title: `My Setup | ${site.dev}`,
    description: "Every device I use has earned its place through daily work.",
    url: `${site.url}/setup`,
    type: "website",
  },
}

export default function SetupPage() {
  return (
    <React.Fragment>
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
