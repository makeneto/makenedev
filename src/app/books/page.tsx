import React from "react"
import { Metadata } from "next"

import { site } from "@/constants/site"
import DefaultHeader from "@/components/headers/DefaultHeader"
import BooksResume from "@/components/books/BooksResume"
import PageTitle from "@/components/PageTitle"
import ShowcaseBooks from "@/components/books/ShowcaseBooks"

export const metadata: Metadata = {
  title: `Books | ${site.dev}`,
  description: "A living list of the books that passed by me and left a mark.",
  alternates: {
    canonical: `${site.url}/books`,
  },
  openGraph: {
    title: `Books | ${site.dev}`,
    description:
      "A living list of the books that passed by me and left a mark.",
    url: `${site.url}/books`,
    type: "website",
  },
}

export default function BooksPage() {
  return (
    <React.Fragment>
      <PageTitle title="Books Read" />

      <DefaultHeader
        title="Books Read"
        description={`A living list of the books that passed by me and left a mark. It's not a "best of all time" list, it's simply what I read, what made me think differently, and what I think is worth your time. I'm updating this list as I finish new readings, so check back here every now and then.`}
      />

      <ShowcaseBooks />
      <BooksResume />
    </React.Fragment>
  )
}
