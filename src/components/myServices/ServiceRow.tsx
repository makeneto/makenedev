import { Link } from "react-router-dom"
import { ArrowUpRight } from "lucide-react"

type ServiceRowProps = {
  index: number
  title: string
  description: string
}

export default function ServiceRow({
  index,
  title,
  description,
}: ServiceRowProps) {
  const numberedIndex = `0${index + 1}`

  return (
    <Link
      to="/contact"
      prefetch="intent"
      className="services__list--row"
      aria-label={`Learn more about ${title}`}
    >
      <div>
        <h2>
          {numberedIndex} — {title}
        </h2>
        <p>{description}</p>
      </div>
      <ArrowUpRight />
    </Link>
  )
}
