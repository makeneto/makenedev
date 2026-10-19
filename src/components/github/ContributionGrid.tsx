import { TooltipProvider } from "@/components/ui/tooltip"
import type { ContributionWeek } from "@/interfaces/github-types"

import { ContributionCell } from "./ContributionCell"

type ContributionGridProps = {
  weeks: ContributionWeek[]
  max: number
  year: number
}

export function ContributionGrid({ weeks, max, year }: ContributionGridProps) {
  return (
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
  )
}
