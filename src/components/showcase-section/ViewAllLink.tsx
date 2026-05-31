import { ChevronRight } from "lucide-react"
import { Link } from "react-router-dom"

interface ViewAllLinkProps {
  to: string
}

export const ViewAllLink: React.FC<ViewAllLinkProps> = ({ to }) => (
  <div className="flex justify-end mt-10">
    <Link
      to={to}
      prefetch="intent"
      className="flex items-center gap-1.5 text-zinc-400 hover:text-white"
    >
      View all
      <ChevronRight size={18} />
    </Link>
  </div>
)
