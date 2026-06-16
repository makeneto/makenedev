export interface ShowcaseItem {
  id: string | number
  title: string
  description: string
  imageUrl: string
  href: string
  date?: string
  images?: string[]
}

export interface ShowcaseSectionProps {
  title: string
  viewAllHref?: string
  items: ShowcaseItem[]
  isHomePage?: boolean
  sectionLabel?: string
}
