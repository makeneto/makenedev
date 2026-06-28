import React from "react"

import { useTitle } from "../hooks/useTitle"
import DefaultHeader from "../components/headers/DefaultHeader"
import BlogSection from "../components/blogs/BlogArea"
import BlogResume from "../components/blogs/BlogResume"

export default function Blog() {
  useTitle("My Blog")

  return (
    <React.Fragment>
      <DefaultHeader
        title="My Blog"
        description={
          "The world I write about is not fixed in one field or perspective. It shifts between technology, design, culture, business, and modern life. I explore ideas as they come, connect what seems unrelated, and understand how everything fits in a changing world. I’m not focused on mastering a single lane but building a broader understanding that evolves."
        }
        isShowcase={true}
      />

      <BlogSection title="Posts" />
      <BlogResume />
    </React.Fragment>
  )
}
