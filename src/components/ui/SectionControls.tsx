import type { SectionControlsProps } from "../../interfaces/sectionControls"
import { NavigationControls } from "../showcase-section/NavigationControls"
import { ViewAllLink } from "../showcase-section/ViewAllLink"

const SectionControls: React.FC<SectionControlsProps> = ({
  viewAll,
  ...props
}) => {
  if (viewAll) return <ViewAllLink to={viewAll} />

  return <NavigationControls {...props} />
}

export default SectionControls
