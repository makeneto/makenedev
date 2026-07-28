const GITHUB_API = "https://api.github.com"

export interface GithubUser {
  public_repos: number
}

export async function getGithubUser(username: string) {
  const response = await fetch(`${GITHUB_API}/users/${username}`)

  if (!response.ok) {
    throw new Error("Failed to fetch Github user")
  }

  return response.json() as Promise<GithubUser>
}
