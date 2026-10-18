import React from "react"
import { Metadata } from "next"

import DefaultHeader from "@/components/headers/DefaultHeader"
import VerticalBlogList from "@/components/blog/BlogList"
import { site } from "@/constants/site"

export const metadata: Metadata = {
  title: `My Blog | ${site.dev}`,
  description:
    "I explore ideas as they come, connect what seems unrelated, and understand how everything fits in a changing world.",
  alternates: {
    canonical: `${site.url}/blog`,
  },
  openGraph: {
    title: `My Blog | ${site.dev}`,
    description:
      "I explore ideas as they come, connect what seems unrelated, and understand how everything fits in a changing world.",
    url: `${site.url}/blog`,
    type: "website",
  },
}

export default function BlogPage() {
  return (
    <React.Fragment>
      <DefaultHeader
        title="My Blog"
        description="The world I write about is not fixed in one field or perspective."
      />

      <VerticalBlogList />
    </React.Fragment>
  )
}
