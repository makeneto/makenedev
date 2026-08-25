import React from "react"
import { Metadata } from "next"

import { site } from "@/constants/site"
import DefaultHeader from "@/components/headers/DefaultHeader"
import ShowcaseSection from "@/components/showcase-section/ShowcaseSection"
import WorkResume from "@/components/WorkResume"
import GithubGraph from "@/components/github/GithubGraph"

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
        description="Some things you see and move on. Others stop you. Make you look twice. Make you wonder how they were made. That's the only kind of work that's worthwhile. Because attention isn't cheap everything competes for it at the same time. If your work doesn't create a pause, even for a second, then it's just noise with better typography."
        isShowcase
      />

      <GithubGraph />
      <ShowcaseSection title="Works" isShowcase />
      <WorkResume />
    </React.Fragment>
  )
}
