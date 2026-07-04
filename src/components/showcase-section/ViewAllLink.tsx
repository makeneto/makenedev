import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

interface ViewAllLinkProps {
  to: string
}

export const ViewAllLink: React.FC<ViewAllLinkProps> = ({ to }) => (
  <Link
    to={to}
    prefetch="intent"
    className="flex items-center gap-2 text-sm text-zinc-400 transition-all hover:text-black dark:hover:text-white hover:gap-1"
  >
    View all
    <ArrowRight size={16} />
  </Link>
)
