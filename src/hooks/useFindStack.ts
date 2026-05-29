import { useMemo } from "react"
import { stackSections, type Stack } from "../interfaces/stack"

export function useFindStack(name: string): Stack | undefined {
  return useMemo(
    () =>
      stackSections
        .flatMap((section) => section.stacks)
        .find((stack) => stack.name === name),
    [name],
  )
}
