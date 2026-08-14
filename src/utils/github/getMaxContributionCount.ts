import { ContributionWeek } from "@/interfaces/githubTypes"

export function getMaxContributionCount(weeks: ContributionWeek[]): number {
  const counts = weeks
    .flatMap((week) => week.contributionDays)
    .map((day) => day.contributionCount)

  return Math.max(...counts, 1)
}
