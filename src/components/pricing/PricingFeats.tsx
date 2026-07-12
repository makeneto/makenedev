export default function PricingFeats({features}: {features: string[]}) {
  return (
      <ul className="pricing__features">
        {features.map((feature, index) => (
          <li key={index} className="pricing__feature">
            <span className="pricing__feature-dot"></span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
  )
}