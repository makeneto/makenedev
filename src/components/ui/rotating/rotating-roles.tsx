"use client"

import { DEFAULT_INTERVAL_MS } from "@/constants/rotatingRoles"
import { useRotatingRole } from "@/hooks/use-rotating-role"
import RoleText from "./rotating-text"

type RotatingRolesProps = {
  roles: string[]
  interval?: number
  className?: string
}

export default function RotatingRoles({
  roles,
  interval = DEFAULT_INTERVAL_MS,
  className
}: RotatingRolesProps) {
  const { index, role, phase } = useRotatingRole({ roles, interval })

  return (
    <p className={className}>
      <RoleText key={index} text={role} phase={phase} />
    </p>
  )
}
