"use client"

import React from "react"

import Navbar from "./navbar/navbar"
import Footer from "./footer/footer"
import { usePathname } from "next/navigation"

export default function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  const simplePage = pathname !== "/links"

  return (
    <div className="min-h-screen flex flex-col">
      {simplePage && <Navbar />}
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}
