export interface ShowcaseItem {
  id: number
  created_at: string
  slug: string
  title: string
  description: string
  href: string
  imageUrl: string
  stacks: string[]
}

export interface ShowcaseSectionProps {
  title: string
  viewAll?: string
  items: ShowcaseItem[]
  isHomePage?: boolean
  isShowcase?: boolean
  count?: number
}

export interface ShowcaseHeaderProps {
  title: string
  linkSection?: string
  textLink?: string
  isShowcase?: boolean
  count?: number
}
