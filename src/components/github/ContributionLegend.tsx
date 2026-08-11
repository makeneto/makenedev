import { CONTRIBUTION_LEVELS } from "@/lib/github-contributions"

export function ContributionLegend() {
  return (
    <span className="legend">
      <span>Less</span>
      {CONTRIBUTION_LEVELS.map((level) => (
        <i className={`contribution-cell ${level}`} key={level} />
      ))}
      <span>More</span>
    </span>
  )
}
