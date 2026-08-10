import { HydrationBoundary, dehydrate } from "@tanstack/react-query"
import { getQueryClient } from "@/lib/get-query-client"
import { contributionsQueryOptions } from "@/features/github/queries"
import { GithubGraphClient } from "./GithubGraphClient"

export default async function GithubGraph() {
  const queryClient = getQueryClient()

  await queryClient.prefetchQuery(contributionsQueryOptions)

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <GithubGraphClient />
    </HydrationBoundary>
  )
}
