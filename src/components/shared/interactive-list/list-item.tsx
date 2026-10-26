import { InteractiveListItem } from "@/interfaces/interactive-list"
import { ListItemActions } from "./list-item-actions"
import { ListItemIcon } from "./list-item-icon"
import { ListItemTitle } from "./list-item-title"

type ListItemProps = {
  item: InteractiveListItem
}

export function ListItem({ item }: ListItemProps) {
  const { title, description, meta, href, icon, iconSrc, actions } = item
  const isFile = icon === "file"
  const isCover = icon === "cover"

  return (
    <div className="flex gap-4">
      <ListItemIcon icon={icon} iconSrc={iconSrc} />

      <div className="flex-1 flex flex-col gap-1">
        <div className="flex sm:flex-wrap items-center gap-x-4 gap-y-1">
          <ListItemTitle
            title={title}
            href={href}
            description={isFile ? description : null}
            underlineOnHover={isCover}
          />

          {meta && (
            <span className="shrink-0 text-xs sm:text-sm weak-text">
              {meta}
            </span>
          )}

          <ListItemActions actions={actions} />
        </div>

        {!isFile && description && (
          <p className="weak-text line-clamp-1 text-sm">{description}</p>
        )}
      </div>
    </div>
  )
}
