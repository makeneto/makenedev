import { LinkIcon, Award, BookOpen, Dumbbell } from "lucide-react"
import Link from "next/link"
import ReusableTooltip from "../ui/ReusableTooltip"
import { site } from "@/constants/site"
import { Button } from "../ui/button"

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
    <section className="flex items-center">
      {certificate &&
        (certificate === "?" ? (
          <aside>
            <Button variant="ghost" size="sm" disabled>
              <Award className="w-auto h-4 text-yellow-500 dark:text-yellow-400 opacity-35" />
            </Button>
          </aside>
        ) : (
          <Link href={certificate} target="_blank" rel="noopener noreferrer">
            <ReusableTooltip side="bottom" content="Makene's Certificate">
              <Button variant="ghost" size="sm">
                <Award className="text-yellow-600 dark:text-yellow-400 transition-colors" />
              </Button>
            </ReusableTooltip>
          </Link>
        ))}

      {learn && (
        <Link
          href={`${site.github}/${learn}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <ReusableTooltip side="bottom" content="Learn with Makene">
            <Button variant="ghost" size="sm">
              <BookOpen className="text-sky-600 dark:text-sky-500 transition-colors" />
            </Button>
          </ReusableTooltip>
        </Link>
      )}

      {exercises && (
        <Link
          href={exercises}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit website"
        >
          <ReusableTooltip side="bottom" content="Practice with Makene">
            <Button variant="ghost" size="sm">
              <Dumbbell className="text-violet-600 dark:text-violet-400" />
            </Button>
          </ReusableTooltip>
        </Link>
      )}

      {website && (
        <Link
          href={website}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit website"
        >
          <ReusableTooltip side="bottom" content="Website">
            <Button variant="ghost" size="sm">
              <LinkIcon />
            </Button>
          </ReusableTooltip>
        </Link>
      )}
    </section>
  )
}
