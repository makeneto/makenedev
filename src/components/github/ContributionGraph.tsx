"use client"

import { useScrollToEnd } from "@/hooks/use-scroll-to-end"
import type { ContributionWeek } from "@/interfaces/github-types"
import { getMaxContributionCount } from "@/utils/github/getMaxContributionCount"

import { ContributionGrid } from "./ContributionGrid"
import { ContributionMonths } from "./ContributionMonths"

type ContributionGraphProps = {
  weeks: ContributionWeek[]
  year: number
}

export function ContributionGraph({ weeks, year }: ContributionGraphProps) {
  const { scrollRef, innerRef } = useScrollToEnd<HTMLDivElement>(weeks.length)
  const max = getMaxContributionCount(weeks)

  return (
    <div
      ref={scrollRef}
      className="calendar-scroll"
      tabIndex={0}
      aria-label="Deslize horizontalmente para ver os últimos 12 meses"
    >
      <div className="calendar-inner" ref={innerRef}>
        <ContributionMonths weeks={weeks} />
        <ContributionGrid weeks={weeks} max={max} year={year} />
      </div>
    </div>
  )
}
