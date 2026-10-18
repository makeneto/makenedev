import React from "react"
import { Metadata } from "next"

import { site } from "@/constants/site"
import DefaultHeader from "@/components/headers/DefaultHeader"
import WorksList from "@/components/work/WorksList"

export const metadata: Metadata = {
  title: `My Work | ${site.dev}`,
  description:
    "A living record of the things I've built, broken, and rebuilt along the way.",
  alternates: {
    canonical: `${site.url}/work`,
  },
  openGraph: {
    title: `My Work | ${site.dev}`,
    description:
      "A living record of the things I've built, broken, and rebuilt along the way.",
    url: `${site.url}/work`,
    type: "website",
  },
}

export default function WorkPage() {
  return (
    <React.Fragment>
      <DefaultHeader
        title="My Works"
        description="Some things you see and move on."
      />

      <WorksList />
    </React.Fragment>
  )
}
