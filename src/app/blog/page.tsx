import React from "react"
import { Metadata } from "next"

import Header from "@/components/headers/header"
import VerticalBlogList from "@/components/blog/blog-list"
import { site } from "@/constants/site"

export const metadata: Metadata = {
  title: `My Blog | ${site.dev}`,
  description:
    "I explore ideas as they come, connect what seems unrelated, and understand how everything fits in a changing world.",
  alternates: {
    canonical: `${site.url}/blog`
  },
  openGraph: {
    title: `My Blog | ${site.dev}`,
    description:
      "I explore ideas as they come, connect what seems unrelated, and understand how everything fits in a changing world.",
    url: `${site.url}/blog`,
    type: "website"
  }
}

export default function BlogPage() {
  return (
    <React.Fragment>
      <Header
        title="My Blog"
        description="The world I write about is not fixed in one field or perspective."
      />

      <VerticalBlogList />
    </React.Fragment>
  )
}
