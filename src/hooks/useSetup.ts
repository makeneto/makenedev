import { useMemo } from "react"
import { setupSections, type SetupSection } from "../interfaces/setup"

interface useSetupReturn {
  sections: SetupSection[]
  getSectionById: (id: string) => SetupSection | undefined
}

export function useSetup(): useSetupReturn {
  const sections = useMemo(() => setupSections, [])

  const getSectionById = useMemo(
    () => (id: string) => sections.find((s) => s.id === id),
    [sections],
  )

  return { sections, getSectionById }
}
