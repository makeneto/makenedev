"use client"

import { useCallback } from "react"
import { useUserLocale } from "./use-user-locale"

export default function useDownloadResume() {
  const { locale } = useUserLocale()

  const handleClick = useCallback(() => {
    const filename =
      locale === "AO" ? "makene-resume-lden.pdf" : "makene-resume-lsen.pdf"

    const filePath = `/documents/${filename}`

    const link = document.createElement("a")
    link.href = filePath
    link.download = filename
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }, [locale])

  return handleClick
}
