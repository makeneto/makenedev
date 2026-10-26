import { CalendarDays } from "lucide-react"

import { BlogArticle } from "@/services/wisp"
import { formatLongDate } from "@/utils/format-date"
import { getExperiencePeriod } from "@/data/experience-periods"
import { ContactLinks } from "@/components/contact/contact-links"
import { RecommendButton } from "./recommend-button"

export default function ExperienceHeader({ post }: { post: BlogArticle }) {
  const { slug, publishedAt, createdAt } = post
  const date = publishedAt || createdAt
  const period = getExperiencePeriod(slug)

  return (
    <header className="grid gap-5 sm:gap-5">
      <span className="weak-text text-sm flex items-center gap-2 shrink-0">
        <CalendarDays size={14} />
        {period || (date ? formatLongDate(date) : "No data")}
      </span>

      <div className="post-intro mb-0">
        <h1>{post.title}</h1>
        <p className="mt-3 mb-1.5 text-[0.96rem] text-(--text-secondary)">
          {post.description}
        </p>
      </div>

      <div className="flex items-center justify-between">
        <ContactLinks />
        <RecommendButton slug={post.slug} />
      </div>
    </header>
  )
}
