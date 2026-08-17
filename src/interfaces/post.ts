import { BlogArticle } from "@/services/wisp"

export interface AdjacentItem {
  slug: string
  title: string
}

export interface AdjacentItems {
  previous: AdjacentItem | null
  next: AdjacentItem | null
}

export interface ControlsProps {
  variant: "work" | "blog"
  previous: AdjacentItem | null
  next: AdjacentItem | null
  basePath: string
}

export interface PostContentProps {
  post: BlogArticle
  previous: AdjacentItem | null
  next: AdjacentItem | null
}

export interface Blog {
  image: string
  title: string
  description: string
  date: string
  slug: string
  publishedAt: string
  createdAt: string
}

export interface Heading {
  id: string
  text: string
}
