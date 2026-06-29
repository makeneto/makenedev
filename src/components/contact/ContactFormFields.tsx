import { AtSign, Briefcase, Phone, User } from "lucide-react"

import { ContactInput } from "./ContactInput"
import type { ContactFormData } from "../../interfaces/contactForm"

interface Props {
  form: ContactFormData
  errors: Record<keyof ContactFormData, boolean>
  updateField: <K extends keyof ContactFormData>(
    field: K,
    value: ContactFormData[K],
  ) => void
}

export function ContactFormFields({ form, errors, updateField }: Props) {
  return (
    <div className="grid grid-cols-2 gap-5">
      <ContactInput
        label="Full name"
        icon={<User size={15} />}
        placeholder="Enter full name..."
        value={form.fullName}
        invalid={errors.fullName}
        onChange={(e) => updateField("fullName", e.target.value)}
      />

      <ContactInput
        label="Email address"
        icon={<AtSign size={15} />}
        placeholder="Enter email address..."
        value={form.email}
        invalid={errors.email}
        onChange={(e) => updateField("email", e.target.value)}
      />

      <ContactInput
        label="Phone number"
        icon={<Phone size={15} />}
        placeholder="Enter phone number..."
        type="tel"
        inputMode="numeric"
        pattern="[0-9]*"
        value={form.phone}
        invalid={errors.phone}
        onChange={(e) => updateField("phone", e.target.value)}
      />

      <ContactInput
        label="Job position"
        icon={<Briefcase size={15} />}
        placeholder="Enter job position..."
        value={form.jobPosition}
        invalid={errors.jobPosition}
        onChange={(e) => updateField("jobPosition", e.target.value)}
      />
    </div>
  )
}
