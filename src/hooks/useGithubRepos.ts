import { useQuery } from "@tanstack/react-query"

import { getGithubUser } from "@/services/githubRepos"

export function useGithubRepos(username: string) {
  return useQuery({
    queryKey: ["github-user", username],

    queryFn: () => getGithubUser(username),

    select: (data) => data.public_repos,

    staleTime: 1000 * 60 * 60,

    gcTime: 1000 * 60 * 60 * 24,

    enabled: Boolean(username),
  })
}
