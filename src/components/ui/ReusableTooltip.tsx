import { ReactNode } from "react"
import { Tooltip, TooltipContent, TooltipTrigger } from "./tooltip"

interface ReusableTooltipProps {
  content: string
  side?: "top" | "right" | "bottom" | "left" | undefined
  children: ReactNode
}

export default function ReusableTooltip({
  content,
  side,
  children,
}: ReusableTooltipProps) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>{children}</TooltipTrigger>
      <TooltipContent side={side ?? undefined}>
        <p>{content}</p>
      </TooltipContent>
    </Tooltip>
  )
}
