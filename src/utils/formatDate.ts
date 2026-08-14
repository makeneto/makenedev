export function formatShortDate(date: string): string {
  const [year, month, day] = date.split("-")
  return `${day}.${month}.${year}`
}

export function formatLongDate(date: string | Date) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(date))
}
