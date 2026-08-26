import PricingHeader from "./PricingHeader"
import PricingFeats from "./PricingFeats"
import PricingButton from "./PricingButton"
import { PricingPlan } from "@/data/pricing"

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
        link={plan.link}
        externalLink={plan.externalLink}
        highlighted={plan.highlighted}
        buttonText={plan.buttonText}
      />
    </div>
  )
}
