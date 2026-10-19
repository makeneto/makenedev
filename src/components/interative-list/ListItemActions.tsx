import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { InteractiveListAction } from "@/interfaces/interactive-list"

type ListItemActionsProps = {
  actions?: InteractiveListAction[]
}

export function ListItemActions({ actions }: ListItemActionsProps) {
  if (!actions?.length) return null

  return (
    <div className="flex shrink-0 items-center gap-4">
      {actions.map(({ label, href }) => (
        <Link
          key={href}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 transition text-xs text-(--text-secondary) hover:text-(--text-primary) hover:underline underline-offset-3 active:translate-y-px"
        >
          {label}
          <ArrowUpRight size={16} aria-hidden="true" />
        </Link>
      ))}
    </div>
  )
}
