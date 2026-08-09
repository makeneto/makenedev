"use client"

import { formatDate } from "@/utils/formatDate"
import { RiArrowRightSLine } from "@remixicon/react"
import { CalendarDays } from "lucide-react"
import Link from "next/link"

interface WorkHeaderProps {
  title: string
  created_at: string
  description: string
}

export default function BlogHeader({
  title,
  created_at,
  description,
}: WorkHeaderProps) {
  return (
    <header className="headerPage--work">
      <div>
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-1 ">
            <Link href="/work">All Works</Link> <RiArrowRightSLine size={16} />{" "}
            <p>{title}</p>
          </span>

          <span className="flex items-center gap-2.5 ">
            <CalendarDays size={15.7} /> {formatDate(created_at)}
          </span>
        </div>
      </div>

      <p className="description--normal headerPage--work__description">
        {description}
      </p>
    </header>
  )
}
