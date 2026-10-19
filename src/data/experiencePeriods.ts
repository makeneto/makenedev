export const experiencePeriods: Record<string, string> = {
  "software-engineer-at-sckj": "Aug 2026 – Present",
  "freelance-full-stack": "Jul, 2024 – Apr, 2026",
}

export function getExperiencePeriod(slug: string) {
  return experiencePeriods[slug] ?? experiencePeriods[slug.toLowerCase()] ?? "—"
}
