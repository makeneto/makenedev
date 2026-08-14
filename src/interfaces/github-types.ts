export type ContributionWeek = {
  contributionDays: ContributionDay[]
}

export interface ContributionDay {
  date: string
  contributionCount: number
}

export interface GitHubResponse {
  data?: {
    user?: {
      contributionsCollection: {
        contributionCalendar: {
          totalContributions: number
          weeks: ContributionWeek[]
        }
      }
    }
  }
  errors?: { message: string }[]
}

export type ContributionsData = {
  total: number
  weeks: ContributionWeek[]
  year: number
}

export interface MonthPosition {
  label: string
  index: number
  center: number
}

export interface ContributionCellProps {
  day: ContributionDay
  max: number
}

export type ContributionLevel = "empty" | "low" | "mid" | "high" | "peak"
