// src/components/blog/TableOfContents.tsx
"use client"

import { Heading } from "@/interfaces/blog"

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
    <nav className="blog-toc">
      <p>Index</p>

      <ul>
        {headings.map((heading) => (
          <li key={heading.id}>
            <button
              type="button"
              onClick={() => onItemClick(heading.id)}
              className={`blog-toc__item ${
                activeId === heading.id ? "is-active" : ""
              }`}
            >
              <span className="blog-toc__marker" />
              {heading.text}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}
