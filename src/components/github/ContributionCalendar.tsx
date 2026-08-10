"use client"

import { useLayoutEffect, useRef } from "react"

type ContributionDay = {
  date: string
  contributionCount: number
}

type ContributionWeek = {
  contributionDays: ContributionDay[]
}

type ContributionCalendarProps = {
  weeks: ContributionWeek[]
  total: number
  year: number
}

const levels = ["empty", "low", "mid", "high", "peak"] as const

function levelFor(count: number, max: number) {
  if (count === 0) return "empty"
  const ratio = count / Math.max(max, 1)
  if (ratio <= 0.2) return "low"
  if (ratio <= 0.45) return "mid"
  if (ratio <= 0.7) return "high"
  return "peak"
}

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en", { dateStyle: "long" }).format(
    new Date(`${date}T12:00:00Z`),
  )
}

export function ContributionCalendar({
  weeks,
  total,
  year,
}: ContributionCalendarProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const scrollElement = scrollRef.current
    const innerElement = innerRef.current
    if (!scrollElement || !innerElement) return

    const scrollToEnd = () => {
      scrollElement.scrollLeft =
        scrollElement.scrollWidth - scrollElement.clientWidth
    }

    scrollToEnd()

    const resizeObserver = new ResizeObserver(scrollToEnd)
    resizeObserver.observe(innerElement)

    document.fonts?.ready.then(scrollToEnd)
    window.addEventListener("load", scrollToEnd)

    return () => {
      resizeObserver.disconnect()
      window.removeEventListener("load", scrollToEnd)
    }
  }, [weeks.length])

  const days = weeks.flatMap((week) => week.contributionDays)
  const max = Math.max(...days.map((day) => day.contributionCount), 1)
  const monthLabels = weeks.reduce<{ label: string; index: number }[]>(
    (labels, week, index) => {
      const firstDay = week.contributionDays[0]?.date
      if (!firstDay) return labels
      const label = new Intl.DateTimeFormat("en-US", { month: "short" }).format(
        new Date(`${firstDay}T12:00:00Z`),
      )
      if (labels.at(-1)?.label !== label) labels.push({ label, index })
      return labels
    },
    [],
  )
  const monthPositions = monthLabels.map((month, index) => {
    const nextIndex = monthLabels[index + 1]?.index ?? weeks.length
    return { ...month, center: (month.index + nextIndex - 1) / 2 }
  })

  return (
    <section>
      <p className="block sm:hidden text-sm mb-4">
        <span className="font-medium">{total.toLocaleString("en")}</span>{" "}
        <span className="weak-text">contributions in the last year.</span>
      </p>

      <section className="calendar-shell" aria-labelledby="contributions-title">
        <div
          ref={scrollRef}
          className="calendar-scroll"
          tabIndex={0}
          aria-label="Deslize horizontalmente para ver os últimos 12 meses"
        >
          <div className="calendar-inner" ref={innerRef}>
            <div className="calendar-months" aria-hidden="true">
              <div
                className="calendar-month-track"
                style={{ gridTemplateColumns: `repeat(${weeks.length}, 14px)` }}
              >
                {monthPositions.map(({ label, index, center }) => (
                  <span
                    key={`${label}-${index}`}
                    style={{ gridColumnStart: Math.floor(center) + 1 }}
                  >
                    {label}
                  </span>
                ))}
              </div>
            </div>
            <div
              className="calendar-grid"
              role="grid"
              aria-label={`Calendário de contribuições de ${year}`}
            >
              {weeks.map((week, weekIndex) => (
                <div className="calendar-week" role="row" key={weekIndex}>
                  {week.contributionDays.map((day) => {
                    const level = levelFor(day.contributionCount, max)
                    return (
                      <span
                        className={`contribution-cell ${level}`}
                        role="gridcell"
                        key={day.date}
                        data-tooltip={`${day.contributionCount} contributions on ${day.date.slice(5, 7)}.${day.date.slice(8, 10)}.${day.date.slice(0, 4)}`}
                        aria-label={`${day.contributionCount} contribuições em ${formatDate(day.date)}`}
                      />
                    )
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="calendar-footer">
          <span className="hidden sm:block">
            {total.toLocaleString("en")} contributions in the last year
          </span>

          <span className="legend">
            <span>Less</span>
            {levels.map((level) => (
              <i className={`contribution-cell ${level}`} key={level} />
            ))}
            <span>More</span>
          </span>
        </div>
      </section>
    </section>
  )
}

export type { ContributionWeek }
