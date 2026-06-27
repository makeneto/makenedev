import type { SectionControlsProps } from "../../interfaces/sectionControls"
import { NavigationControls } from "../showcase-section/NavigationControls"

const SectionControls: React.FC<SectionControlsProps> = ({ ...props }) => {
  return <NavigationControls {...props} />
}

export default SectionControls
