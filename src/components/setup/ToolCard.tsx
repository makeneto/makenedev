import { ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface ToolCardProps {
  image: string
  name: string
  description: string
  link: string
}

export default function ToolCard({
  image,
  name,
  description,
  link,
}: ToolCardProps) {
  return (
    <Link
      className="setup-card"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Visit external link"
    >
      <Image src={image} alt={name} width={100} height={100} />

      <section className="setup-card__content">
        <div>
          <h3>{name}</h3>
          <ExternalLink />
        </div>
        <p>{description}</p>
      </section>
    </Link>
  )
}
