import { useFindStack } from "../../hooks/useFindStack"
import StackLinks from "./StackLinks"

interface StackProps {
  children: React.ReactNode
  name: string
}

export default function StackCard({ children, name }: StackProps) {
  const stack = useFindStack(name)

  if (!stack) return null

  const { category, link, certificate, learn } = stack

  return (
    <div className="stack-card">
      {children}

      <div className="flex flex-col items-center gap-1.5">
        <p className="text-sm font-semibold text-center" translate="no">
          {name}
        </p>
        <span className="tag" translate="no">
          {category}
        </span>

        <StackLinks link={link} certificate={certificate} learn={learn} />
      </div>
    </div>
  )
}
