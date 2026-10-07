"use client"

import { Heading } from "@/interfaces/post"

interface TableOfContentsProps {
  headings: Heading[]
  activeId: string | null
  onItemClick: (id: string) => void
}

export function TableOfContents({
  headings,
  activeId,
  onItemClick,
}: TableOfContentsProps) {
  if (headings.length === 0) return null

  return (
    <nav className="sticky top-10 post-toc">
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
  )
}
