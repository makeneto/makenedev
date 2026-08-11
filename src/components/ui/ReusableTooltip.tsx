import { ReactNode } from "react"
import { Tooltip, TooltipContent, TooltipTrigger } from "./tooltip"

interface ReusableTooltipProps {
  content: string
  children: ReactNode
}

export default function ReusableTooltip({
  content,
  children,
}: ReusableTooltipProps) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>{children}</TooltipTrigger>
      <TooltipContent>
        <p>{content}</p>
      </TooltipContent>
    </Tooltip>
  )
}
