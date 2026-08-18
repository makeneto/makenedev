import { ReactNode } from "react"

interface PostAsideProps {
  children: ReactNode
  className?: string
}

export default function PostAside({ children, className }: PostAsideProps) {
  return (
    <aside className={`post-aside relative ${className}`}>{children}</aside>
  )
}
