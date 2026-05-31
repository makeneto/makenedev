import type { Quote } from "../interfaces/quote"

export async function getWeeklyQuote(): Promise<Quote> {
  const response = await fetch(
    "https://makenedev-primeapi.vercel.app/quote/week",
  )

  if (!response.ok) {
    throw new Error("Unable to fetch quote")
  }

  return response.json()
}
