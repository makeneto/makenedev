import GithubButton from "./ui/GithubButton"
import SocialLinks from "./navbar/SocialLinks"

export default function SocialList() {
  return (
    <section className="flex items-center gap-3">
      <GithubButton />
      <SocialLinks />
    </section>
  )
}
