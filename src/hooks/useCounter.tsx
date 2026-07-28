"use client"

import { animate, useMotionValue, useTransform } from "motion/react"
import { useEffect } from "react"

interface UseCounterProps {
  value: number
  duration?: number
}

export function useCounter({ value, duration = 1.5 }: UseCounterProps) {
  const count = useMotionValue(0)

  const rounded = useTransform(count, (latest) => Math.round(latest))

  useEffect(() => {
    const controls = animate(count, value, {
      duration,
      ease: "easeOut",
    })

    return () => controls.stop()
  }, [count, duration, value])

  return rounded
}
