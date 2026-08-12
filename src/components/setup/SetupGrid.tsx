import { GearPost } from "@/interfaces/gears"
import ToolCard from "./ToolCard"

interface SetupGridProps {
  tools: GearPost[]
}

export default function SetupGrid({ tools }: SetupGridProps) {
  return (
    <div className="setup-grid">
      {tools.map((post) => (
        <ToolCard key={post.id} post={post} />
      ))}
    </div>
  )
}
