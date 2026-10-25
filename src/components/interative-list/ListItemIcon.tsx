import { InteractiveListItem } from "@/interfaces/interactive-list"
import Image from "next/image"

type ListItemIconProps = Pick<InteractiveListItem, "icon" | "iconSrc">

export function ListItemIcon({ icon, iconSrc }: ListItemIconProps) {
  const isBook = icon === "book"
  const isCover = icon === "cover"

  if (!iconSrc || (!isBook && !isCover)) return null

   if (isBook) {
    return (
      <div className="relative h-12 w-8 shrink-0">
        <Image
          src={iconSrc}
          alt=""
          width={32}
          height={48}
          className="h-full w-full rounded-none object-cover"
        />
      </div>
    )
  }

  return (
    <Image
      src={iconSrc}
      alt=""
      width={20}
      height={20}
      className="mt-0.5 size-6.5 rounded-full object-contain border"
    />
  )
}
