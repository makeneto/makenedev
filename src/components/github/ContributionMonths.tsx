import { ContributionWeek } from "@/interfaces/githubTypes"
import { getMonthPositions } from "@/utils/github/getMonthPositions"

type ContributionMonthsProps = {
  weeks: ContributionWeek[]
}

export function ContributionMonths({ weeks }: ContributionMonthsProps) {
  const monthPositions = getMonthPositions(weeks)

  return (
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
  )
}
