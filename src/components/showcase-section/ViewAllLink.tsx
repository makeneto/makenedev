import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "../ui/button"

interface ViewAllLinkProps {
  to: string
  textLink?: string
}

export const ViewAllLink: React.FC<ViewAllLinkProps> = ({
  to,
  textLink = "View all",
}) => (
  <Link href={to} prefetch>
    <Button variant="link" size="sm" className="btn--link p-0">
      {textLink}
      <ArrowRight size={16} />
    </Button>
  </Link>
)
