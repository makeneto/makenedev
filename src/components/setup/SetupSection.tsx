import { useSetup } from "../../hooks/useSetup"
import ToolsHeader from "../stack/ToolsHeader"
import SetupGrid from "./SetupGrid"

export default function SetupSection() {
  const { sections } = useSetup()

  return (
    <section className="grid gap-25">
      {sections.map(({ id, title, tools }) => (
        <section key={id}>
          <ToolsHeader title={title} />

          <SetupGrid tools={tools} />
        </section>
      ))}
    </section>
  )
}
