"use client"

import { FileDown } from "lucide-react"

import useDownloadResume from "@/hooks/useDownloadResume"
import { Button } from "../ui/button"

export default function DownloadResume() {
  const handleClick = useDownloadResume()

  return (
    <Button variant="ghost" onClick={handleClick} className="profile__resume p-0">
      Download Resume
      <FileDown size={15} />
    </Button>
  )
}
