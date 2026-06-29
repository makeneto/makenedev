import { Link } from "react-router-dom"
import { fallbackQuote } from "../data/fallbackQuote"
import { useQuote } from "../hooks/useQuote"
import { weekCounter } from "../utils/weekCounter"

export default function QuoteOfTheWeek() {
  const { currentWeek, totalWeeks } = weekCounter()
  const { data, isLoading } = useQuote()

  const quote = data?.quote ?? fallbackQuote

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
          “<span>{isLoading ? "Loading..." : quote.text}</span>”
        </h1>

        <div className="flex items-center justify-between">
          <small translate="no">
            — {isLoading ? "Loading..." : quote.author}
          </small>

          <Link
            to="https://makenedev-primeapi.vercel.app/quote/week"
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
