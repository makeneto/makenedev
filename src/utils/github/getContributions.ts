import { fetchContributionsFromGitHub } from "@/features/github/github-api"
import { ContributionsData } from "@/interfaces/github-types"

export async function getContributions(): Promise<ContributionsData> {
  if (typeof window === "undefined") {
    return fetchContributionsFromGitHub()
  }

  const response = await fetch("/api/github-contributions")
  if (!response.ok) {
    throw new Error("Contributions could not be loaded now.")
  }
  return response.json() as Promise<ContributionsData>
}
