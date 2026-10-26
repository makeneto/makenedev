import AboutMe from "./about/about-me"
import GithubGraph from "../github/github-graph"

export default function HomeHeader() {
  return (
    <header>
      <AboutMe />
      <GithubGraph />
    </header>
  )
}
