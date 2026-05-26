import { Flame } from "lucide-react"

import { ServicesCheckboxes } from "./ServicesCheckboxes"
import { SERVICES } from "../../constants/services"

interface Props {
  services: string[]
  onChange: (value: string[]) => void
}

export function ContactFormServices({ services, onChange }: Props) {
  return (
    <div className="mt-7">
      <label className="contact-form__label mb-4">
        <Flame size={15} />
        Choose services
      </label>

      <ServicesCheckboxes
        services={SERVICES}
        selected={services}
        onChange={onChange}
      />
    </div>
  )
}
