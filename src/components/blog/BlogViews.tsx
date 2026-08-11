"use client"

import { Eye } from "lucide-react"
import useEngagement from "@/hooks/useEngagement"

export default function BlogViews({ slug }: { slug: string }) {
  const { metrics } = useEngagement({ slug })

  return (
    <span className="flex items-center gap-1.5">
      <Eye size={16} />
      {metrics?.views} Views
    </span>
  )
}
