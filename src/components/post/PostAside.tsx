import { ReactNode } from "react"

export default function PostAside({ children }: { children: ReactNode }) {
  return <aside className="post-aside relative">{children}</aside>
}
