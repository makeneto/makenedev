import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import {
  formatContributionDate,
  formatShortDate,
  getContributionLevel,
  type ContributionDay,
} from "@/lib/github-contributions"

type ContributionCellProps = {
  day: ContributionDay
  max: number
}

export function ContributionCell({ day, max }: ContributionCellProps) {
  const level = getContributionLevel(day.contributionCount, max)

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <span
          className={`contribution-cell ${level}`}
          role="gridcell"
          tabIndex={0}
          aria-label={`${day.contributionCount} contribuições em ${formatContributionDate(day.date)}`}
        />
      </TooltipTrigger>
      <TooltipContent>
        <p>
          {day.contributionCount} contributions on {formatShortDate(day.date)}
        </p>
      </TooltipContent>
    </Tooltip>
  )
}
