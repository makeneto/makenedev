import { useEffect, useState } from "react"
import { weekCounter } from "../utils/weekCounter"
import type { Quote } from "../interfaces/quote"
import { getWeeklyQuote } from "../services/makenesquotes"
import { Link } from "react-router-dom"

export default function QuoteOfTheWeek() {
  const { currentWeek, totalWeeks } = weekCounter()

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

  return (
    <section className="quoteOfTheWeek">
      <div className="quoteOfTheWeek__header">
        <p>Quote of the Week</p>

        <p>
          Week {currentWeek}
          <span className="text-zinc-500">/{totalWeeks}</span>
        </p>
      </div>

      <div className="quoteOfTheWeek__content">
        <h1>
          “<span>{loading ? "Loading..." : data?.quote?.text}</span>”
        </h1>

        <div className="flex items-center justify-between">
          <small>— {loading ? "Loading..." : data?.quote?.author}</small>

          <Link
            to="https://makenedev-primeapi.vercel.app/quote/week"
            prefetch="intent"
            target="_blank"
            className="text-xs text-zinc-700 hover:text-white hover:underline"
          >
            By Makene's API.
          </Link>
        </div>
      </div>
    </section>
  )
}
