import { CalendarDays } from "lucide-react"
import { formatDate } from "@/utils/formatDate"
import Image from "next/image"

interface ArticleMetaProps {
  publishedAt: string | Date | null
  createdAt: string | Date | null
}

export function ArticleMeta({ publishedAt, createdAt }: ArticleMetaProps) {
  const date = publishedAt || createdAt

  return (
    <>
      <div>
        <p>Date</p>
        <span className="flex items-center gap-2">
          <CalendarDays size={14} /> {date ? formatDate(date) : "No data"}
        </span>
      </div>

      <div>
        <p>Author</p>
        <span className="flex items-center gap-2">
          <Image
            src="https://github.com/makeneto.png"
            alt="Makene's profile"
            width={20}
            height={20}
            className="rounded-full"
          />{" "}
          Makene Neto
        </span>
      </div>
    </>
  )
}
