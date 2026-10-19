import { InteractiveListItem } from "@/interfaces/interactive-list"
import Image from "next/image"


type ListItemIconProps = Pick<InteractiveListItem, "icon" | "iconSrc">

export function ListItemIcon({ icon, iconSrc }: ListItemIconProps) {
  if (icon !== "cover" || !iconSrc) return null

  return (
    <Image
      src={iconSrc}
      alt=""
      width={20}
      height={20}
      className="mt-0.5 size-7 object-contain rounded-full"
    />
  )
}