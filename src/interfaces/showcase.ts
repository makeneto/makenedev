import { getWorkHomeData } from "@/features/works/wispWorks"

export interface ShowcaseSectionProps {
  title: string
  viewAll?: string
  isHomePage?: boolean
  isShowcase?: boolean
}

export interface ShowcaseHeaderProps {
  title: string
  linkSection?: string
  textLink?: string
  isShowcase?: boolean
  count?: number
  categories?: string[]
  selectedCategory?: string
  onCategoryChange?: (value: string) => void
  viewMode?: "grid" | "list"
  onViewModeChange?: (value: "grid" | "list") => void
}

type WorkPost = Awaited<ReturnType<typeof getWorkHomeData>>["posts"][number]
export interface ShowcaseContentProps {
  posts: WorkPost[]
  title: string
  viewAll?: string
  isHomePage: boolean
  isShowcase?: boolean
}
