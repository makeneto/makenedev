import React from "react"
import { Metadata } from "next"

import { site } from "@/constants/site"
import Header from "@/components/headers/header"
import BooksList from "@/components/books/books-list"

export const revalidate = 300

export const metadata: Metadata = {
  title: `Books Read | ${site.dev}`,
  description: "A living list of the books that passed by me and left a mark.",
  alternates: {
    canonical: `${site.url}/books`
  },
  openGraph: {
    title: `Books Read | ${site.dev}`,
    description:
      "A living list of the books that passed by me and left a mark.",
    url: `${site.url}/books`,
    type: "website"
  }
}

export default function BooksPage() {
  return (
    <React.Fragment>
      <Header
        title="Books Read"
        description={`A living list of the books that passed by me and left a mark.`}
      />

      <BooksList />
    </React.Fragment>
  )
}
