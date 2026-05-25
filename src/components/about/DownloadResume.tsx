import { FileDown } from "lucide-react"

import useDownloadResume from "../../hooks/useDownloadResume"

export default function DownloadResume() {
  const handleClick = useDownloadResume()

  return (
    <button type="button" onClick={handleClick} className="profile__resume">
      Download Resume
      <FileDown size={18} />
    </button>
  )
}
