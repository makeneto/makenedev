import data from "../data/stacks.json"

export type StackCategory =
  | "Language"
  | "Library"
  | "Framework"
  | "Software"
  | "Database"
  | "AI"
  | "Education"

export interface Stack {
  id: string
  name: string
  category: StackCategory
  link: string
}

export interface StackSection {
  id: string
  title: string
  stacks: Stack[]
}

export const stackSections = data.sections as StackSection[]
