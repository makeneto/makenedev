import { getWorkHomeData } from "@/features/works/wispWorks"
import { ReactNode } from "react"

export interface ShowcaseSectionProps {
  children?: ReactNode
  title: string
  viewAll?: string
  isHomePage?: boolean
  isShowcase?: boolean
}

export interface ShowcaseHeaderProps {
  children?: ReactNode
  title: string
  linkSection?: string
  textLink?: string
  isShowcase?: boolean
  count?: number
}

type WorkPost = Awaited<ReturnType<typeof getWorkHomeData>>["posts"][number]
export interface ShowcaseContentProps {
  children?: ReactNode
  posts: WorkPost[]
  title: string
  viewAll?: string
  isHomePage: boolean
  isShowcase?: boolean
}
