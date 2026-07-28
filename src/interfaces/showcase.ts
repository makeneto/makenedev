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
  sectionLabel?: string
  isShowcase?: boolean
}
