import { LinkIcon, Award, BookOpen } from "lucide-react"
import { Link } from "react-router-dom"

interface StackLinksProps {
  link: string
  certificate: null | string
  learn: null | string
}

export default function StackLinks({
  link,
  certificate,
  learn,
}: StackLinksProps) {
  return (
    <section className="flex items-center gap-0.5">
      <Link to={link} target="_blank" rel="noopener noreferrer" title="Website">
        <LinkIcon />
      </Link>

      {certificate &&
        (certificate === "?" ? (
          <aside title="Certificate not available">
            <Award className="w-auto h-4 text-yellow-500 dark:text-yellow-400 opacity-30 dark:opacity-25" />
          </aside>
        ) : (
          <Link
            to={certificate}
            target="_blank"
            rel="noopener noreferrer"
            title="Certificate"
          >
            <Award className="text-yellow-600 dark:text-yellow-400 transition-colors" />
          </Link>
        ))}

      {learn && (
        <Link
          to={learn}
          target="_blank"
          rel="noopener noreferrer"
          title={`Learn with me`}
        >
          <BookOpen className="text-blue-600 dark:text-blue-400 transition-colors" />
        </Link>
      )}
    </section>
  )
}
