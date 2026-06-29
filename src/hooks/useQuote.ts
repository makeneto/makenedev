import { useEffect, useState } from "react"
import { getWeeklyQuote } from "../services/weeklyQuote"
import type { Quote } from "../interfaces/quote"

export function useQuote() {
  const [data, setData] = useState<Quote | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      async function loadQuote() {
        try {
          const res = await getWeeklyQuote()
          setData(res)
        } catch (err) {
          console.error(err)
        } finally {
          setLoading(false)
        }
      }

      loadQuote()
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return { loading, data }
}
