import { services } from "../../data/services"
import ServiceCard from "./ServiceCard"

export default function ServicesList() {
  return (
    <ul className="services__list">
      {services.map((service, index) => (
        <ServiceCard key={index} {...service} />
      ))}
    </ul>
  )
}
