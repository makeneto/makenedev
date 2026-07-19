import { ExternalLink } from "lucide-react"

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
    <a
      className="setup-card"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Visit external link"
    >
      <img src={image} alt={name} />

      <section className="setup-card__content">
        <div>
          <h3>{name}</h3>
          <ExternalLink />
        </div>
        <p>{description}</p>
      </section>
    </a>
  )
}
