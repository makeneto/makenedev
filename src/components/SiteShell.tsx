"use client"

"use client"

import React from "react"
import { usePathname } from "next/navigation"

import Navbar from "@/components/navbar/Navbar"
import Footer from "@/components/footer/Footer"
import ScrollToTop from "@/components/ScrollToTop"

export default function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isDashboard = pathname.startsWith("/dashboard")

  if (isDashboard) {
    return <>{children}</>
  }

  return (
    <React.Fragment>
      <ScrollToTop />
      <Navbar />
      {children}
      <Footer />
    </React.Fragment>
  )
}
