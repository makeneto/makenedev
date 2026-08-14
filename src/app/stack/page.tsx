import React from "react"
import { Metadata } from "next"

import { site } from "@/constants/site"
import DefaultHeader from "@/components/headers/DefaultHeader"
import StackSection from "@/components/stack/StackSection"
import StackResume from "@/components/stack/StackResume"
import PageTitle from "@/components/PageTitle"

export const metadata: Metadata = {
  title: `My Stack | ${site.dev}`,
  description:
    "Front-end is where I started and still feel at home, but curiosity expanded my stack over time.",
  alternates: {
    canonical: `${site.url}/stack`,
  },
  openGraph: {
    title: `My Stack | ${site.dev}`,
    description:
      "Front-end is where I started and still feel at home, but curiosity expanded my stack over time.",
    url: `${site.url}/stack`,
    type: "website",
  },
}

export default function StackPage() {
  return (
    <React.Fragment>
      <PageTitle title="My Stack" />

      <DefaultHeader
        title="My Stack"
        description={
          "Front-end is where I started and still feel at home, but curiosity expanded my stack over time. What began with interfaces grew into backend systems, databases, and AI integrations that changed how I think about building. I’m not a specialist in everything — I learn deeply, connect the dots across domains, and keep moving forward."
        }
      />

      <StackSection />
      <StackResume />
    </React.Fragment>
  )
}
