import { ContributionWeek } from "@/features/github/api"

export type ContributionDay = {
  date: string
  contributionCount: number
}

export type ContributionLevel = "empty" | "low" | "mid" | "high" | "peak"

export const CONTRIBUTION_LEVELS: readonly ContributionLevel[] = [
  "empty",
  "low",
  "mid",
  "high",
  "peak",
]

const LEVEL_THRESHOLDS: { max: number; level: ContributionLevel }[] = [
  { max: 0.2, level: "low" },
  { max: 0.45, level: "mid" },
  { max: 0.7, level: "high" },
]

export function getContributionLevel(
  count: number,
  max: number,
): ContributionLevel {
  if (count === 0) return "empty"

  const ratio = count / Math.max(max, 1)
  const match = LEVEL_THRESHOLDS.find((threshold) => ratio <= threshold.max)

  return match?.level ?? "peak"
}

export function getMaxContributionCount(weeks: ContributionWeek[]): number {
  const counts = weeks
    .flatMap((week) => week.contributionDays)
    .map((day) => day.contributionCount)

  return Math.max(...counts, 1)
}

export function formatContributionDate(date: string): string {
  return new Intl.DateTimeFormat("en", { dateStyle: "long" }).format(
    new Date(`${date}T12:00:00Z`),
  )
}

export function formatShortDate(date: string): string {
  const [year, month, day] = date.split("-")
  return `${month}.${day}.${year}`
}

type MonthPosition = {
  label: string
  index: number
  center: number
}

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
