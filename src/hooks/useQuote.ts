import { useQuery } from "@tanstack/react-query"
import { getWeeklyQuote } from "../services/weeklyQuote"

export function useQuote() {
  return useQuery({
    queryKey: ["weekly-quote"],
    queryFn: getWeeklyQuote,
    staleTime: Infinity,
  })
}
