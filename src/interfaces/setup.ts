import data from "../data/setup.json"

export interface SetupItem {
  id: string
  image: string
  name: string
  description: string
  link: string
}

export interface SetupSection {
  id: string
  title: string
  tools: SetupItem[]
}

export const setupSections = data.sections as SetupSection[]
