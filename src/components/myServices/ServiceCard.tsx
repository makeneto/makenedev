import { Link } from "react-router-dom"
import { servicesIconMap } from "../../lib/servicesIconMap"
import { RiArrowRightSLine } from "@remixicon/react"

type ServiceCardProps = {
  icon: string
  title: string
  description: string
}

export default function ServiceCard({
  icon,
  title,
  description,
}: ServiceCardProps) {
  const IconComponent = servicesIconMap[icon as keyof typeof servicesIconMap]

  return (
    <Link
      to="/contact"
      className="services__list--card"
      aria-label={`Learn more about ${title}`}
    >
      <div>
        {IconComponent ? <IconComponent /> : null}
        <h1>{title}</h1>
      </div>

      <p className="text-sm text-zinc-500 dark:text-zinc-400">{description}</p>

      <span>
        Talk to me
        <RiArrowRightSLine size={14} />
      </span>
    </Link>
  )
}
