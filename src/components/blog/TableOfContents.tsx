"use client"

import useEngagement from "@/hooks/useEngagement"
import { Heading } from "@/interfaces/post"
import { Eye } from "lucide-react"
import { BlogArticle } from "@/services/wisp"

interface TableOfContentsProps {
  headings: Heading[]
  activeId: string | null
  onItemClick: (id: string) => void
  post: BlogArticle
}

export function TableOfContents({
  headings,
  activeId,
  onItemClick,
  post,
}: TableOfContentsProps) {
  const { slug } = post
  const { metrics } = useEngagement({ slug })

  if (headings.length === 0) return null
  return (
    <aside className="grid gap-[2.1rem] sticky top-10">
      <nav className="post-toc">
        <p>Index</p>
        <ul>
          {headings.map((heading) => (
            <li key={heading.id}>
              <button
                type="button"
                onClick={() => onItemClick(heading.id)}
                className={`post-toc__item ${
                  activeId === heading.id ? "is-active" : ""
                }`}
              >
                <span className="post-toc__marker" />
                {heading.text}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div>
        <p>Views</p>

        <span className="flex items-center gap-2">
          <Eye size={14} strokeWidth={1.8} />
          <p>{metrics?.views ?? "-"} readings</p>
        </span>
      </div>
    </aside>
  )
}
