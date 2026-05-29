import { useMemo } from "react"
import { stackSections, type StackSection } from "../interfaces/stack"

interface UseStacksReturn {
  sections: StackSection[]
  getSectionById: (id: string) => StackSection | undefined
}

export function useStacks(): UseStacksReturn {
  const sections = useMemo(() => stackSections, [])

  const getSectionById = useMemo(
    () => (id: string) => sections.find((s) => s.id === id),
    [sections],
  )

  return { sections, getSectionById }
}
