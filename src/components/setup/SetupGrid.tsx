import type { SetupItem } from "../../interfaces/setup"
import ToolCard from "./ToolCard"

interface SetupGridProps {
  tools: SetupItem[]
}

export default function SetupGrid({ tools }: SetupGridProps) {
  return (
    <div className="setup-grid">
      {tools.map(({ id, image, name, description, link }) => {
        return (
          <ToolCard
            key={id}
            image={image}
            name={name}
            description={description}
            link={link}
          />
        )
      })}
    </div>
  )
}
