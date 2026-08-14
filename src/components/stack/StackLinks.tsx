import { LinkIcon, Award, BookOpen, Dumbbell } from "lucide-react"
import Link from "next/link"
import ReusableTooltip from "../ui/ReusableTooltip"
import { site } from "@/constants/site"

interface StackLinksProps {
  certificate: null | string
  learn: null | string
  exercises: null | string
  website: null | string
}

export default function StackLinks({
  certificate,
  learn,
  exercises,
  website,
}: StackLinksProps) {
  return (
    <section className="flex items-center gap-0.5">
      {certificate &&
        (certificate === "?" ? (
          <ReusableTooltip side="bottom" content="Certificate not available">
            <aside>
              <Award className="w-auto h-4 text-yellow-500 dark:text-yellow-400 opacity-35" />
            </aside>
          </ReusableTooltip>
        ) : (
          <ReusableTooltip side="bottom" content="Makene's Certificate">
            <Link href={certificate} target="_blank" rel="noopener noreferrer">
              <Award className="text-yellow-600 dark:text-yellow-400 transition-colors" />
            </Link>
          </ReusableTooltip>
        ))}

      {learn && (
        <ReusableTooltip side="bottom" content="Learn with Makene">
          <Link
            href={`${site.github}/${learn}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <BookOpen className="text-sky-600 dark:text-sky-500 transition-colors" />
          </Link>
        </ReusableTooltip>
      )}

      {exercises && (
        <ReusableTooltip side="bottom" content="Practice with Makene">
          <Link
            href={exercises}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit website"
          >
            <Dumbbell className="text-violet-600 dark:text-violet-400" />
          </Link>
        </ReusableTooltip>
      )}

      {website && (
        <ReusableTooltip side="bottom" content="Website">
          <Link
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit website"
          >
            <LinkIcon />
          </Link>
        </ReusableTooltip>
      )}
    </section>
  )
}
