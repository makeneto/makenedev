"use client"

import { ReactNode } from "react"

import ShowcaseHeader from "../showcase-section/ShowcaseHeader"

interface BlogAreaProps {
  children: ReactNode
  isHome?: boolean
}

export default function BlogArea({ children, isHome }: BlogAreaProps) {
  return (
    <section>
      <ShowcaseHeader title="Writing" linkSection={isHome ? "/blog" : ""} />

      <div className="grid sm:grid-cols-[10%_auto] md:grid-cols-[50%_auto] lg:grid-cols-[60%_auto] xl:grid-cols-[55%_auto] gap-8 xl:gap-10">
        {children}
      </div>
    </section>
  )
}
