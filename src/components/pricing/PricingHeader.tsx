import { useUserLocale } from "../../hooks/useUserLocale"
import { getIcon } from "../../lib/getIcon"
import { useFormatCurrency } from "../../utils/formatCurrency"

interface PricingHeaderProps {
  icon: string
  name: string
  price: number
  description: string
}

export default function PricingHeader({
  icon,
  name,
  price,
  description
}: PricingHeaderProps) {
  const { locale } = useUserLocale()
  const formatCurrency = useFormatCurrency()

  const isAngola = locale === "AO"
  return (
    <div className="pricing__card-top">
      <div className="pricing__icon-wrapper">{getIcon(icon)}</div>
      <h3 className="pricing__card-title">{name}</h3>

      <div className="pricing__price">
        {isAngola ? (
          <>
            <span className="pricing__amount">{formatCurrency(price)}</span>
            <span className="pricing__currency">AOA</span>
          </>
        ) : (
          <>
            <span className="pricing__currency">$</span>
            <span className="pricing__amount">{formatCurrency(price)}</span>
          </>
        )}
      </div>

      <p className="pricing__card-description">{description}</p>
    </div>
  )
}
