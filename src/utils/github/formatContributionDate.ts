export function formatContributionDate(date: string): string {
  return new Intl.DateTimeFormat("en-US", { dateStyle: "long" }).format(
    new Date(`${date}T12:00:00Z`),
  )
}
