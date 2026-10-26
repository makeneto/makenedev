"use client"

import { EXIT_MS } from "@/constants/rotating-roles"
import { useEffect, useState } from "react"

export type RolePhase = "idle" | "out" | "in"

type UseRotatingRoleOptions = {
  roles: string[]
  interval: number
}

export function useRotatingRole({ roles, interval }: UseRotatingRoleOptions) {
  const [index, setIndex] = useState(0)
  const [phase, setPhase] = useState<RolePhase>("idle")

  const total = roles.length

  useEffect(() => {
    if (total < 2) return

    let swapTimeout: ReturnType<typeof setTimeout>

    const intervalId = setInterval(() => {
      setPhase("out")

      swapTimeout = setTimeout(() => {
        setIndex((current) => (current + 1) % total)
        setPhase("in")
      }, EXIT_MS)
    }, interval)

    return () => {
      clearInterval(intervalId)
      clearTimeout(swapTimeout)
    }
  }, [total, interval])

  return { index, role: roles[index] ?? roles[0] ?? "", phase }
}
