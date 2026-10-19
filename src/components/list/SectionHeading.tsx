import Link from "next/link"
import { ArrowRight } from "lucide-react"

type SectionHeadingProps = {
  title: string
  viewAll?: string
  count?: number
}

export default function SectionHeading({
  title,
  viewAll,
  count
}: SectionHeadingProps) {
  return (
    <header className="mb-8 flex items-center justify-between gap-4 border-b border-zinc-200 pb-4 dark:border-zinc-800">
      <h2
        className="m-0 whitespace-nowrap text-[1.6rem] lowercase italic leading-none tracking-[-0.01em] text-(--text-primary)"
        style={{ fontFamily: '"Instrument Serif", serif' }}
      >
        {title}.
      </h2>

      <div className="flex items-center gap-4">
        {count !== undefined && (
          <span className="rounded-full bg-zinc-100 px-2.5 py-1 text-xs dark:bg-zinc-900">
            {count} items
          </span>
        )}

        {viewAll && (
          <Link
            href={viewAll}
            className="flex items-center gap-1 text-sm hover:underline underline-offset-3"
            aria-label={`See more about ${title}`}
          >
            View all <ArrowRight size={16} aria-hidden="true" />
          </Link>
        )}
      </div>
    </header>
  )
}
