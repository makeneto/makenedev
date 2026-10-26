import React from "react"
import { Metadata } from "next"

import { site } from "@/constants/site"
import WorksList from "@/components/work/works-list"
import PageHeader from "@/components/shared/page-header"

export const metadata: Metadata = {
  title: `My Work | ${site.dev}`,
  description:
    "A living record of the things I've built, broken, and rebuilt along the way.",
  alternates: {
    canonical: `${site.url}/work`
  },
  openGraph: {
    title: `My Work | ${site.dev}`,
    description:
      "A living record of the things I've built, broken, and rebuilt along the way.",
    url: `${site.url}/work`,
    type: "website"
  }
}

export default function WorkPage() {
  return (
    <React.Fragment>
      <PageHeader
        title="My Works"
        description="Some ideas stay on paper. I prefer to put them out into the world."
      />

      <WorksList />
    </React.Fragment>
  )
}
