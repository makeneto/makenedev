
import { RiSeedlingLine, RiBriefcase4Line, RiBrainLine } from "@remixicon/react"

export const getIcon = (iconType: string) => {
  const iconProps = { size: 32, className: "pricing__card-icon" }

  switch (iconType) {
    case "seed":
      return <RiSeedlingLine {...iconProps} />
    case "brief":
      return <RiBriefcase4Line {...iconProps} />
    case "brain":
      return <RiBrainLine {...iconProps} />
    default:
      return null
  }
}