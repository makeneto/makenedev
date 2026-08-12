import type { ContactFormData } from "../interfaces/contactForm"

export type ContactFormErrors = Record<keyof ContactFormData, boolean>

export const INITIAL_STATE: ContactFormData = {
  fullName: "",
  email: "",
  services: [],
  message: "",
}

export const INITIAL_ERRORS: ContactFormErrors = {
  fullName: false,
  email: false,
  services: false,
  message: false,
}
