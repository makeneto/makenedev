import { useStacks } from "../../hooks/useStacks"
import StackGrid from "./StackGrid"
import StackHeader from "./StackHeader"

export default function StackSection() {
  const { sections } = useStacks()

  return (
    <section className="grid gap-25">
      {sections.map(({ id, title, stacks }) => (
        <section key={id}>
          <StackHeader title={title} />
          <StackGrid stacks={stacks} />
        </section>
      ))}
    </section>
  )
}
