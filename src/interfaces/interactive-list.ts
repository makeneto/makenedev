export type InteractiveListAction = {
  label: string
  href: string
}

export type InteractiveListItem = {
  id: string
  title: string
  description?: string | null
  meta?: string
  href?: string
  icon?: "cover" | "file" | "book"
  iconSrc?: string
  actions?: InteractiveListAction[]
}