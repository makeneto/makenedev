import type { ContactFormData } from "../interfaces/contactForm"
import type { ContactFormErrors } from "../constants/contactFormDefaults"

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i

export function isContactEmailValid(email: string) {
  return EMAIL_REGEX.test(email.trim())
}

export function getContactFormErrors(form: ContactFormData): ContactFormErrors {
  return {
    fullName: !form.fullName.trim(),
    email: !isContactEmailValid(form.email),
    services: form.services.length === 0,
    message: !form.message.trim(),
  }
}

export function normalizeContactField<K extends keyof ContactFormData>(
  value: ContactFormData[K],
): ContactFormData[K] {
  return value
}
