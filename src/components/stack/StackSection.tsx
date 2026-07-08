import { useStacks } from "../../hooks/useStacks"
import StackGrid from "./StackGrid"
import ToolsHeader from "./ToolsHeader"

export default function StackSection() {
  const { sections } = useStacks()

  return (
    <section className="grid gap-25 xl:gap-30 ">
      {sections.map(({ id, title, stacks }) => (
        <section key={id}>
          <ToolsHeader title={title} />
          <StackGrid stacks={stacks} />
        </section>
      ))}
    </section>
  )
}
