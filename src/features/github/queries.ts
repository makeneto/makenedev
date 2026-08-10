import { queryOptions } from "@tanstack/react-query"
import { getContributions } from "./api"

export const contributionsQueryOptions = queryOptions({
  queryKey: ["github-contributions"],
  queryFn: getContributions,
  staleTime: 1000 * 60 * 60,
})
