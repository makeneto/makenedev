import { ContributionLevel } from "@/interfaces/githubTypes"

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
