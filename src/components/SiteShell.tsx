"use client"

import React from "react"

import Navbar from "@/components/navbar/Navbar"
import Footer from "@/components/footer/Footer"
import ScrollToTop from "@/components/ScrollToTop"

export default function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <React.Fragment>
      <ScrollToTop />
      <Navbar />
      {children}
      <Footer />
    </React.Fragment>
  )
}
