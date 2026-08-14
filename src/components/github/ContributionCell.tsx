import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { ContributionCellProps } from "@/interfaces/githubTypes"
import { formatShortDate } from "@/utils/formatDate"
import { getContributionLevel } from "@/utils/github/getContributionLevel"
import { formatContributionDate } from "@/utils/github/getMaxContributionCount"

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
