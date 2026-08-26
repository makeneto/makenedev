import { getIcon } from "@/lib/getIcon"
import { useFormatCurrency } from "@/utils/formatCurrency"
import { RiArrowRightSLine } from "@remixicon/react"

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
  description,
}: PricingHeaderProps) {
  const formatCurrency = useFormatCurrency()

  return (
    <div className="pricing__card-top">
      <div className="pricing__icon-wrapper">{getIcon(icon)}</div>
      <h3 className="pricing__card-title">{name}</h3>

      <div className="pricing__price">
        <span className="pricing__amount">
          <RiArrowRightSLine />
          {formatCurrency(price)}
        </span>
        <span className="pricing__currency">kz</span>
      </div>

      <p className="pricing__card-description">{description}</p>
    </div>
  )
}
