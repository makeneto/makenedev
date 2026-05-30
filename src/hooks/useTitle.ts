import { useEffect } from "react"

export function useTitle(title?: string) {
  useEffect(() => {
    const baseTitle = "Makene Neto"

    document.title = title ? `${title} | ${baseTitle}` : baseTitle
  }, [title])
}
