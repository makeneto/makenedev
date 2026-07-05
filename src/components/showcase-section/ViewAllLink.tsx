import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

interface ViewAllLinkProps {
  to: string
  textLink?: string
}

export const ViewAllLink: React.FC<ViewAllLinkProps> = ({
  to,
  textLink = "View all",
}) => (
  <Link
    to={to}
    prefetch="intent"
    className="flex items-center gap-2 text-sm text-zinc-600 transition-all hover:text-black dark:hover:text-white hover:gap-1"
  >
    {textLink}
    <ArrowRight size={16} />
  </Link>
)
