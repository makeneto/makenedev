import { LinkIcon, Award, BookOpen, Dumbbell } from "lucide-react"
import Link from "next/link"

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
          <aside title="Certificate not available">
            <Award className="w-auto h-4 text-yellow-500 dark:text-yellow-400 opacity-35" />
          </aside>
        ) : (
          <Link
            href={certificate}
            target="_blank"
            rel="noopener noreferrer"
            title="Makene's Certificate"
          >
            <Award className="text-yellow-600 dark:text-yellow-400 transition-colors" />
          </Link>
        ))}

      {learn && (
        <Link
          href={learn}
          target="_blank"
          rel="noopener noreferrer"
          title="Learn with Makene"
        >
          <BookOpen className="text-sky-600 dark:text-sky-500 transition-colors" />
        </Link>
      )}

      {exercises && (
        <Link
          href={exercises}
          target="_blank"
          rel="noopener noreferrer"
          title="Practice with Makene"
          aria-label="Visit website"
        >
          <Dumbbell className="text-violet-600 dark:text-violet-400" />
        </Link>
      )}

      {website && (
        <Link
          href={website}
          target="_blank"
          rel="noopener noreferrer"
          title="Oficial Site"
          aria-label="Visit website"
        >
          <LinkIcon />
        </Link>
      )}
    </section>
  )
}
