import { services } from "../../data/services"
import ServiceRow from "./ServiceRow"

export default function ServicesList() {
  return (
    <ul className="services__list">
      {services.map((service, index) => (
        <ServiceRow key={index} index={index} {...service} />
      ))}
    </ul>
  )
}
