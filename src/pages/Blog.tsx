import React from "react"

import { useTitle } from "../hooks/useTitle"
import DefaultHeader from "../components/headers/DefaultHeader"
import BlogSection from "../components/blogs/BlogSection"

export default function Blog() {
  useTitle("My Blog")

  return (
    <React.Fragment>
      <DefaultHeader
        title="My Blog"
        description={
          "Front-end is where I started and still feel at home, but curiosity expanded my stack over time. What began with interfaces grew into backend systems, databases, and AI integrations that changed how I think about building. I’m not a specialist in everything — I learn deeply, connect the dots across domains, and keep moving forward."
        }
      />

      <div
        style={{
          backgroundImage: "url('/assets/blog-asset.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "500px",
        }}
        className="rounded-lg shadow-lg mb-28 sm:mb-40"
      />

      <BlogSection title="Last Posts" />
    </React.Fragment>
  )
}
