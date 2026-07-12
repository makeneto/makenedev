import { pricingPlans } from "../../data/pricing"
import ShowcaseHeader from "../showcase-section/ShowcaseHeader"
import PricingCard from "./PricingCard"

export default function PricingSection() {
  return (
    <section className="pricing mt-50 sm:mt-70 xl:mt-90">
      <ShowcaseHeader title="Pricing"/> 
      <div className="pricing__grid">
        <PricingCard key={pricingPlans[0].id} plan={pricingPlans[0]} />

        <section>
          {pricingPlans.slice(1, 3).map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </section>
      </div>
    </section>
  )
}
