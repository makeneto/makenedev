import {
  Tooltip,
  TooltipContent,
  TooltipTrigger
} from "@/components/ui/tooltip"
import { ContributionCellProps } from "@/interfaces/github-types"
import { formatShortDate } from "@/utils/format-date"
import { formatContributionDate } from "@/utils/github/format-contribution-date"
import { getContributionLevel } from "@/utils/github/get-contribution-level"

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
