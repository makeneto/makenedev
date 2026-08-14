import { ContributionWeek, MonthPosition } from "@/interfaces/githubTypes"

export function getMonthPositions(weeks: ContributionWeek[]): MonthPosition[] {
  const monthFormatter = new Intl.DateTimeFormat("en-US", { month: "short" })

  const labels = weeks.reduce<{ label: string; index: number }[]>(
    (acc, week, index) => {
      const firstDay = week.contributionDays[0]?.date
      if (!firstDay) return acc

      const label = monthFormatter.format(new Date(`${firstDay}T12:00:00Z`))
      if (acc.at(-1)?.label !== label) acc.push({ label, index })

      return acc
    },
    [],
  )

  return labels.map((month, index) => {
    const nextIndex = labels[index + 1]?.index ?? weeks.length
    return { ...month, center: (month.index + nextIndex - 1) / 2 }
  })
}
