import { useUserLocale } from "../hooks/useUserLocale"

export function useFormatCurrency() {
  const { locale } = useUserLocale()

  return (amount: number) => {
    return new Intl.NumberFormat(
      locale === "AO" ? "pt-AO" : "en-US",
      {
        maximumFractionDigits: 0,
      }
    ).format(amount)
  }
}