import React from "react"
import { Metadata } from "next"

import { site } from "@/constants/site"
import DefaultHeader from "@/components/headers/DefaultHeader"
import MyExperiences from "@/components/home/MyExperience"

export const metadata: Metadata = {
  title: `Experience | ${site.dev}`,
  description:
    "A living record of the places I've worked, the problems I've solved, and how I build things along the way.",
  alternates: {
    canonical: `${site.url}/experience`
  },
  openGraph: {
    title: `Experience | ${site.dev}`,
    description:
      "A living record of the places I've worked, the problems I've solved, and how I build things along the way.",
    url: `${site.url}/experience`,
    type: "website"
  }
}

export default function ExperiencePage() {
  return (
    <React.Fragment>
      <DefaultHeader
        title="Experience"
        description="A timeline of the work, teams, and product decisions behind the work."
      />

      <MyExperiences />
    </React.Fragment>
  )
}
