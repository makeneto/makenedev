import { LinkIcon } from "lucide-react"
import { Link } from "react-router-dom"
import { useFindStack } from "../../hooks/useFindStack"

interface StackProps {
  children: React.ReactNode
  name: string
}

export default function StackCard({ children, name }: StackProps) {
  const stack = useFindStack(name)

  if (!stack) return null

  const { category, link } = stack

  return (
    <div className="stack-card">
      {children}

      <div className="flex flex-col items-center gap-1.5">
        <p className="text-sm font-semibold text-center" translate="no">
          {name}
        </p>
        <span
          className="border border-zinc-800 rounded-4xl py-0.5 px-2.5 text-xs text-zinc-400 font-mono font-semibold"
          translate="no"
        >
          {category}
        </span>

        <Link
          to={link}
          target="_blank"
          rel="noopener noreferrer"
          title="Website"
        >
          <LinkIcon size={10} />
        </Link>
      </div>
    </div>
  )
}
