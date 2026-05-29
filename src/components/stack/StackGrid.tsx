import { stackIconMap } from "../../lib/stackIconMap"
import type { Stack } from "../../interfaces/stack"

interface StackGridProps {
  stacks: Stack[]
}

export default function StackGrid({ stacks }: StackGridProps) {
  return (
    <div className="stack-grid">
      {stacks.map(({ id }) => {
        const Icon = stackIconMap[id]

        if (!Icon) {
          console.warn(`[StackGrid] Icon não encontrado para id: "${id}"`)
          return null
        }

        return <Icon key={id} />
      })}
    </div>
  )
}
