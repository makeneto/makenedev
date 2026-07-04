import { Link } from "react-router-dom"
import { RiLink } from "@remixicon/react"

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
          <span className="text-zinc-500 text-sm">/{totalWeeks}</span>
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
            to="https://github.com/makeneto/prime-api"
            target="_blank"
            className="flex items-center gap-2 text-xs text-zinc-400 dark:text-zinc-700 hover:text-black dark:hover:text-white transition-all"
          >
            <RiLink size={13} />
            <span>By Makene's API</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
