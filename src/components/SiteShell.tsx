"use client"

import Navbar from "@/components/navbar/Navbar"
import Footer from "@/components/footer/Footer"
import ScrollToTop from "@/components/ScrollToTop"

export default function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      {children}
      <Footer />
    </>
  )
}
