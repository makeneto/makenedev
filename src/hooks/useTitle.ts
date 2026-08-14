"use client"

import { useEffect } from "react"

import { site } from "@/constants/site"

export function useTitle(title?: string) {
  useEffect(() => {
    document.title = title ? `${title} | ${site.dev}` : site.dev
  }, [title])
}
