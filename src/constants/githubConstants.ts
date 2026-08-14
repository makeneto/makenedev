import { ContributionLevel } from "@/interfaces/github-types"

export const CONTRIBUTIONS_QUERY = `
  query($login: String!, $from: DateTime!, $to: DateTime!) {
    user(login: $login) {
      contributionsCollection(from: $from, to: $to) {
        contributionCalendar {
          totalContributions
          weeks { contributionDays { contributionCount date } }
        }
      }
    }
  }
`

export const CONTRIBUTION_LEVELS: readonly ContributionLevel[] = [
  "empty",
  "low",
  "mid",
  "high",
  "peak",
]

export const LEVEL_THRESHOLDS: { max: number; level: ContributionLevel }[] = [
  { max: 0.2, level: "low" },
  { max: 0.45, level: "mid" },
  { max: 0.7, level: "high" },
]
