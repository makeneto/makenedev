export const experiencePeriods: Record<string, string> = {
  "software-engineer-at-sckj": "Aug 2026 – Out 2026"
}

export function getExperiencePeriod(slug: string) {
  return experiencePeriods[slug] ?? experiencePeriods[slug.toLowerCase()] ?? "—"
}
