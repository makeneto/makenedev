import React from "react"
import { Metadata } from "next"

import { site } from "@/constants/site"
import Header from "@/components/headers/header"
import MyExperiences from "@/components/home/my-experience"

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
      <Header
        title="Experience"
        description="Where I worked, what I built, and what I achieved."
      />

      <MyExperiences />
    </React.Fragment>
  )
}
