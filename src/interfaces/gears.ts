import type { getGears } from "@/features/gears/wispGears"

export type GearPost = Awaited<ReturnType<typeof getGears>>[number]

export interface SetupSection {
  id: string
  title: string
  tools: GearPost[]
}
