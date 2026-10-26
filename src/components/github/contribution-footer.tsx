import { ContributionLegend } from "./contribution-legend"

type ContributionFooterProps = {
  total: number
}

export function ContributionFooter({ total }: ContributionFooterProps) {
  return (
    <div className="calendar-footer">
      <p className="text-sm">
        <span className="font-medium">{total.toLocaleString("en")}</span>{" "}
        <span className="weak-text">contributions in one year</span>
      </p>

      <ContributionLegend />
    </div>
  )
}
