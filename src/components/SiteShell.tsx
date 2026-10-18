"use client"

import React from "react"

import Navbar from "@/components/navbar/Navbar"
import Footer from "@/components/footer/Footer"

export default function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <React.Fragment>
      <Navbar />
      {children}
      <Footer />
    </React.Fragment>
  )
}
