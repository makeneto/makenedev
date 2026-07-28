import { useFindStack } from "../../hooks/useFindStack"
import StackLinks from "./StackLinks"

interface StackProps {
  children: React.ReactNode
  name: string
}

export default function StackCard({ children, name }: StackProps) {
  const stack = useFindStack(name)

  if (!stack) return null

  const { category, certificate, learn, exercises, website } = stack

  return (
    <div className="stack-card">
      {children}

      <div className="flex flex-col items-center gap-1.5">
        <p className="text-sm font-semibold text-center" translate="no">
          {name}
        </p>

        <div className="flex w-full flex-wrap justify-center gap-1.5">
          {category.map((cat: string) => (
            <span key={cat} className="tag tag--small" translate="no">
              {cat}
            </span>
          ))}
        </div>

        <StackLinks
          certificate={certificate}
          learn={learn}
          exercises={exercises}
          website={website}
        />
      </div>
    </div>
  )
}
