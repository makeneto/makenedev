import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "../ui/button"

interface ViewAllLinkProps {
  to: string
  textLink?: string
  className?: string
}

export const ViewAllLink: React.FC<ViewAllLinkProps> = ({
  to,
  textLink = "View all",
  className,
}) => (
  <Link href={to} prefetch>
    <Button variant="link" className={`flex weak-text weak-hover ${className}`}>
      {textLink}
      <ArrowRight size={16} />
    </Button>
  </Link>
)
