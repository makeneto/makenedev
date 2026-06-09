import { Award, LinkIcon } from "lucide-react"
import { Link } from "react-router-dom"

interface StackLinksProps {
  link: string
  certificate: null | string
}

export default function StackLinks({ link, certificate }: StackLinksProps) {
  return (
    <section className="flex items-center gap-0.5">
      <Link to={link} target="_blank" rel="noopener noreferrer" title="Website">
        <LinkIcon />
      </Link>

      {certificate &&
        (certificate === "?" ? (
          <aside title="Certificate not available">
            <Award className="w-auto h-4 text-yellow-400 opacity-25 cursor-not-allowed" />
          </aside>
        ) : (
          <Link
            to={certificate}
            target="_blank"
            rel="noopener noreferrer"
            title="Certificate"
          >
            <Award className="text-yellow-400 hover:text-yellow-300 transition-colors" />
          </Link>
        ))}
    </section>
  )
}
