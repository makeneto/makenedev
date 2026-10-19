import { RemixiconComponentType } from "@remixicon/react"
import { LucideIcon } from "lucide-react"

export type LinkType = {
  ariaLabel: string
  label?: string
  href: string
  buttonVariant?:
    | "default"
    | "secondary"
    | "outline"
    | "ghost"
    | "destructive"
    | "link"
  icon?: RemixiconComponentType | LucideIcon
}
