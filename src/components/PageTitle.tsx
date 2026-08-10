"use client"

import { useTitle } from "@/hooks/useTitle"

export default function PageTitle({ title }: { title: string }) {
  useTitle(title)

  return null
}
