import React from "react"
import DefaultHeader from "../components/headers/DefaultHeader"
import StackSection from "../components/stack/StackSection"
import StackResume from "../components/stack/StackResume"

export default function Stack() {
  return (
    <React.Fragment>
      <DefaultHeader
        title="My Stack"
        description="Front-end is where I started — and where I still feel most at home. But curiosity doesn't respect boundaries. Over time, the stack grew. Not because I was chasing trends, but because every project asked for something more. A server here. A database there. An AI integration that changed how I think about building altogether. I'm not a specialist in everything. I'm someone who learns deeply, connects the dots, and keeps moving forward. This page is proof of that movement."
      />
      <StackSection />
      <StackResume />
    </React.Fragment>
  )
}
