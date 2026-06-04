import { useEffect, useState } from 'react'
import { getWeeklyQuote } from '../services/makenesquotes'
import type { Quote } from '../interfaces/quote'

export function useQuote() {
      const [data, setData] = useState<Quote | null>(null)
      const [loading, setLoading] = useState(true)

      useEffect(() => {
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
      }, [])

      return {loading, data}
}
