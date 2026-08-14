import { CONTRIBUTIONS_QUERY } from "@/constants/githubConstants"
import { ContributionsData, GitHubResponse } from "@/interfaces/github-types"

export async function fetchContributionsFromGitHub(): Promise<ContributionsData> {
  const now = new Date()
  const year = now.getUTCFullYear()
  const fromDate = new Date(now)
  fromDate.setUTCFullYear(fromDate.getUTCFullYear() - 1)
  const from = fromDate.toISOString()
  const to = now.toISOString()

  const githubToken = process.env.NEXT_GITHUB_TOKEN
  if (!githubToken) return { total: 0, weeks: [], year }

  const response = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${githubToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: CONTRIBUTIONS_QUERY,
      variables: { login: "makeneto", from, to },
    }),
    next: {
      revalidate: 3600,
      tags: ["github-contributions"],
    },
  })

  if (!response.ok) throw new Error(`GitHub responded with ${response.status}`)

  const result = (await response.json()) as GitHubResponse
  if (result.errors?.length || !result.data?.user) {
    throw new Error(result.errors?.[0]?.message ?? "GitHub profile not found")
  }

  const calendar = result.data.user.contributionsCollection.contributionCalendar
  return { total: calendar.totalContributions, weeks: calendar.weeks, year }
}
