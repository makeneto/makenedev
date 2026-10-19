import { NUMBER_WORDS } from "@/constants/yearsOfExperience"

const CAREER_START = new Date(2021, 1, 24) // 24-02-2021

export function getYearsOfExperience(now: Date = new Date()): number {
  let years = now.getFullYear() - CAREER_START.getFullYear()

  const hadAnniversary =
    now.getMonth() > CAREER_START.getMonth() ||
    (now.getMonth() === CAREER_START.getMonth() &&
      now.getDate() >= CAREER_START.getDate())

  if (!hadAnniversary) years -= 1
  return years
}

export function getYearsLabel(now: Date = new Date()): string {
  const years = getYearsOfExperience(now)
  return NUMBER_WORDS[years] ?? String(years)
}
