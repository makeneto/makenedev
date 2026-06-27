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
  viewAll?: string
  items: ShowcaseItem[]
  isHomePage?: boolean
  sectionLabel?: string
}
