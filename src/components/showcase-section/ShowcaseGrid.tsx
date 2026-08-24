import ShowcaseCard from "./ShowcaseCard"
import type { getWorkHomeData } from "@/features/works/wispWorks"

type WorkPost = Awaited<ReturnType<typeof getWorkHomeData>>["posts"][number]

interface ShowcaseGridProps {
  posts: WorkPost[]
  viewMode?: "grid" | "list"
}

const ShowcaseGrid = ({ posts, viewMode = "grid" }: ShowcaseGridProps) => {
  return (
    <ul className={`showCaseGrid ${viewMode === "list" ? "showCaseGrid--list" : ""}`} role="list">
      {posts.map((work) => (
        <ShowcaseCard key={work.id} post={work} />
      ))}
    </ul>
  )
}

export default ShowcaseGrid
