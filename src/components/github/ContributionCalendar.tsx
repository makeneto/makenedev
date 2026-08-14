"use client"

import { TooltipProvider } from "@/components/ui/tooltip"
import { useScrollToEnd } from "@/hooks/use-scroll-to-end"

import { ContributionCell } from "./ContributionCell"
import { ContributionLegend } from "./ContributionLegend"
import { ContributionMonths } from "./ContributionMonths"
import { getMaxContributionCount } from "@/utils/github/getMaxContributionCount"
import { ContributionWeek } from "@/interfaces/github-types"

type ContributionCalendarProps = {
  weeks: ContributionWeek[]
  total: number
  year: number
}

export function ContributionCalendar({
  weeks,
  total,
  year,
}: ContributionCalendarProps) {
  const { scrollRef, innerRef } = useScrollToEnd<HTMLDivElement>([weeks.length])
  const max = getMaxContributionCount(weeks)

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
            <ContributionMonths weeks={weeks} />

            <TooltipProvider delayDuration={0}>
              <div
                className="calendar-grid"
                role="grid"
                aria-label={`Calendário de contribuições de ${year}`}
              >
                {weeks.map((week, weekIndex) => (
                  <div className="calendar-week" role="row" key={weekIndex}>
                    {week.contributionDays.map((day) => (
                      <ContributionCell key={day.date} day={day} max={max} />
                    ))}
                  </div>
                ))}
              </div>
            </TooltipProvider>
          </div>
        </div>

        <div className="calendar-footer">
          <span className="hidden sm:block">
            {total.toLocaleString("en-US")} contributions in the last year
          </span>

          <ContributionLegend />
        </div>
      </section>
    </section>
  )
}
