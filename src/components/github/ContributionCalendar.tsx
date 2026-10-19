import type { ContributionWeek } from "@/interfaces/github-types"

import { ContactLinks } from "./ContactLinks"
import { ContributionFooter } from "./ContributionFooter"
import { ContributionGraph } from "./ContributionGraph"
import { ResumeCta } from "./ResumeCta"

type ContributionCalendarProps = {
  weeks: ContributionWeek[]
  total: number
  year: number
}

export function ContributionCalendar({
  weeks,
  total,
  year
}: ContributionCalendarProps) {
  return (
    <section className="bg-(--bg-secondary) dark:bg-(--border-tertiary) border border-(--bg-secondary) p-1 rounded-xl">
      <section
        className="calendar-shell shadow-sm dark:shadow-lg"
        aria-labelledby="contributions-title"
      >
        <ContributionGraph weeks={weeks} year={year} />
        <ContributionFooter total={total} />
      </section>

      <div className="mt-2 p-2">
        <ResumeCta />
        <ContactLinks />
      </div>
    </section>
  )
}
