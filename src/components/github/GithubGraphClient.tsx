"use client"

import { useQuery } from "@tanstack/react-query"
import { ContributionCalendar } from "./ContributionCalendar"
import { contributionsQueryOptions } from "@/features/github/github-queries"

export function GithubGraphClient() {
  const { data, isLoading, isError } = useQuery(contributionsQueryOptions)

  const hasData = (data?.weeks.length ?? 0) > 0

  return (
    <main>
      {isLoading ? (
        <div className="calendar-shell card-wrapper calendar-loading">
          Loading contributions…
        </div>
      ) : isError || !hasData ? (
        <div className="calendar-shell card-wrapper calendar-loading">
          Contributions could not be loaded now.
        </div>
      ) : (
        <ContributionCalendar
          total={data!.total}
          weeks={data!.weeks}
          year={data!.year}
        />
      )}
    </main>
  )
}
