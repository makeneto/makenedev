import { getContributions } from "@/utils/github/get-contributions"
import { queryOptions } from "@tanstack/react-query"

export const contributionsQueryOptions = queryOptions({
  queryKey: ["github-contributions"],
  queryFn: getContributions,
  staleTime: 1000 * 60 * 20,
  refetchOnWindowFocus: false,
  refetchOnReconnect: false,
})
