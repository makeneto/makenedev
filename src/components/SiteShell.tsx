"use client"

import React from "react"

import Navbar from "@/components/navbar/Navbar"
import Footer from "@/components/footer/Footer"

export default function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}
