import { AtSign, Briefcase, Phone, User } from "lucide-react"

import { ContactInput } from "./ContactInput"
import type { ContactFormData } from "@/interfaces/contactForm"

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
    <div className="grid sm:grid-cols-2 gap-5">
      <ContactInput
        label="Full name"
        icon={<User size={15} />}
        placeholder="Gabriel Afonso"
        value={form.fullName}
        invalid={errors.fullName}
        onChange={(e) => updateField("fullName", e.target.value)}
      />

      <ContactInput
        label="Email address"
        icon={<AtSign size={15} />}
        placeholder="gabriel@afonso.com"
        value={form.email}
        invalid={errors.email}
        onChange={(e) => updateField("email", e.target.value)}
      />
    </div>
  )
}
