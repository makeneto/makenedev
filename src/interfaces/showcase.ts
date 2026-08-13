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
}

type WorkPost = Awaited<ReturnType<typeof getWorkHomeData>>["posts"][number]
export interface ShowcaseContentProps {
  posts: WorkPost[]
  title: string
  viewAll?: string
  isHomePage: boolean
  isShowcase?: boolean
  count?: number
}
