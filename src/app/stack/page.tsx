"use client"

import React from "react"

import { useTitle } from "@/hooks/useTitle"
import DefaultHeader from "@/components/headers/DefaultHeader"
import StackSection from "@/components/stack/StackSection"
import StackResume from "@/components/stack/StackResume"

export default function Stack() {
  useTitle("My Stack")

  return (
    <React.Fragment>
      <DefaultHeader
        title="My Stack"
        description={
          "Front-end is where I started and still feel at home, but curiosity expanded my stack over time. What began with interfaces grew into backend systems, databases, and AI integrations that changed how I think about building. I’m not a specialist in everything — I learn deeply, connect the dots across domains, and keep moving forward."
        }
      />
      <StackSection />
      <StackResume />
    </React.Fragment>
  )
}

// Invalid DOM property `clipPath`. Did you mean `clipPath`?
// Invalid DOM property `clipRule`. Did you mean `clipRule`?
// Invalid DOM property `font-family`. Did you mean `fontFamily`?
// Invalid DOM property `font-size`. Did you mean `fontSize`?
// Invalid DOM property `letter-spacing`. Did you mean `letterSpacing`?
