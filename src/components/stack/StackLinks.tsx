import { LinkIcon, Award, BookOpen } from "lucide-react"

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
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        title="Website"
        aria-label="Visit website"
      >
        <LinkIcon />
      </a>

      {certificate &&
        (certificate === "?" ? (
          <aside title="Certificate not available">
            <Award className="w-auto h-4 text-yellow-500 dark:text-yellow-400 opacity-30 dark:opacity-25" />
          </aside>
        ) : (
          <a
            href={certificate}
            target="_blank"
            rel="noopener noreferrer"
            title="Certificate"
          >
            <Award className="text-yellow-600 dark:text-yellow-400 transition-colors" />
          </a>
        ))}

      {learn && (
        <a
          href={learn}
          target="_blank"
          rel="noopener noreferrer"
          title="Learn with me"
        >
          <BookOpen className="text-sky-600 dark:text-sky-500 transition-colors" />
        </a>
      )}
    </section>
  )
}
