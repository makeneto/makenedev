import ShowcaseCard from "./ShowcaseCard"
import type { getWorkHomeData } from "@/features/works/wispWorks"

type WorkPost = Awaited<ReturnType<typeof getWorkHomeData>>["posts"][number]

interface ShowcaseGridProps {
  posts: WorkPost[]
}

const ShowcaseGrid = ({ posts }: ShowcaseGridProps) => {
  return (
    <ul className="showCaseGrid" role="list">
      {posts.map((work) => (
        <ShowcaseCard key={work.id} post={work} />
      ))}
    </ul>
  )
}

export default ShowcaseGrid
