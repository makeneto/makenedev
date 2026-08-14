import { LEVEL_THRESHOLDS } from "@/constants/githubConstants"
import { ContributionLevel } from "@/interfaces/githubTypes"

export function getContributionLevel(
  count: number,
  max: number,
): ContributionLevel {
  if (count === 0) return "empty"

  const ratio = count / Math.max(max, 1)
  const match = LEVEL_THRESHOLDS.find((threshold) => ratio <= threshold.max)

  return match?.level ?? "peak"
}
