import { useEffect, useState } from "react"

export function useUserLocale() {
  const [locale, setLocale] = useState<"AO" | "US">("US")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchLocale() {
      try {
        const response = await fetch("https://ipwho.is/")
        const data = await response.json()

        setLocale(data.country_code === "AO" ? "AO" : "US")
      } catch (error) {
        console.error("Failed to detect locale", error)
        setLocale("US")
      } finally {
        setLoading(false)
      }
    }

    fetchLocale()
  }, [])

  return {
    locale,
    loading,
  }
}
