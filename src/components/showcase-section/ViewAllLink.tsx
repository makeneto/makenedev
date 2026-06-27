import { Link } from "react-router-dom"

interface ViewAllLinkProps {
  to: string
}

export const ViewAllLink: React.FC<ViewAllLinkProps> = ({ to }) => (
  <Link
    to={to}
    prefetch="intent"
    className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white hover:underline transition-all"
  >
    View all
  </Link>
)
