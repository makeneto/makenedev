import Link from "next/link"
import { RiGithubFill } from "@remixicon/react"

import { useGithubRepos } from "@/hooks/useGithubRepos"
import { Counter } from "./Counter"

export default function GithubButton() {
  const username = "makeneto"
  const { data: repositories, isLoading } = useGithubRepos(username)

  return (
    <Link href={`https://github.com/${username}`} className="github-btn">
      <RiGithubFill className="nav-icon" />
      {!isLoading && <Counter value={repositories ?? 0} />}
    </Link>
  )
}
