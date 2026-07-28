"use client"

import { useMotionValueEvent } from "motion/react"
import { useState } from "react"

import { useCounter } from "@/hooks/useCounter"

interface CounterProps {
  value: number
}

export function Counter({ value }: CounterProps) {
  const rounded = useCounter({ value })

  const [display, setDisplay] = useState(0)

  useMotionValueEvent(rounded, "change", (latest) => {
    setDisplay(latest)
  })

  return <span>{display}</span>
}
