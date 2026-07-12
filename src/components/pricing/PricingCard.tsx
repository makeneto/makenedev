import type { PricingPlan } from "../../interfaces/pricing"
import PricingHeader from "./PricingHeader"
import PricingFeats from "./PricingFeats"
import PricingButton from "./PricingButton"

interface PricingCardProps {
  plan: PricingPlan
}

export default function PricingCard({ plan }: PricingCardProps) {
  return (
    <div
      className={`pricing__card ${!plan.highlighted ? "pricing__card--standard" : ""}`}
    >
      <PricingHeader
        name={plan.name}
        icon={plan.icon}
        price={plan.price}
        description={plan.description}
      />

      <PricingFeats features={plan.features} />

      <PricingButton
        highlighted={plan.highlighted}
        buttonText={plan.buttonText}
      />
    </div>
  )
}
