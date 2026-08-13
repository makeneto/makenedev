import React from "react"
import { Metadata } from "next"

import AboutResume from "@/components/about/AboutResume"
import Timeline from "@/components/about/Timeline"
import WorkExperience from "@/components/about/WorkExperience"
import DefaultHeader from "@/components/headers/DefaultHeader"
import PageTitle from "@/components/PageTitle"
import { SITE_URL } from "@/constants/siteUrl"

export const metadata: Metadata = {
  title: "About Me | Makene Neto",
  description:
    "Front-end Developer specialized in building modern, responsive, and high-performance web applications.",
  alternates: {
    canonical: `${SITE_URL}/about`,
  },
  openGraph: {
    title: "About Me | Makene Neto",
    description:
      "Front-end Developer specialized in building modern, responsive, and high-performance web applications.",
    url: `${SITE_URL}/about`,
    type: "website",
  },
}

export default function AboutPage() {
  return (
    <React.Fragment>
      <PageTitle title="About Me" />

      <DefaultHeader
        title="About me"
        description="Front-end Developer specialized in building modern, responsive, and
          high-performance web applications with React, TypeScript, and Next.js.
          Experienced in developing scalable user interfaces, integrating APIs,
          managing complex application state, and delivering intuitive user
          experiences. Familiar with back-end technologies including Node.js,
          Express and PostgreSQL, enabling effective collaboration across the
          full product development lifecycle."
      />

      <WorkExperience />
      <Timeline />
      <AboutResume />
    </React.Fragment>
  )
}
