export function weekCounter(date: Date = new Date()) {
  const startOfYear = new Date(date.getFullYear(), 0, 1)
  const dayOfYear =
    Math.floor((date.getTime() - startOfYear.getTime()) / 86_400_000) + 1
  const currentWeek = Math.ceil(dayOfYear / 7)
  const totalWeeks = Math.ceil(date.getFullYear() % 4 === 0 ? 366 / 7 : 365 / 7)

  return { currentWeek, totalWeeks }
}
