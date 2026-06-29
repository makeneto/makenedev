import type { ContactFormData } from "../interfaces/contactForm"

export type ContactFormErrors = Record<keyof ContactFormData, boolean>

export const INITIAL_STATE: ContactFormData = {
  fullName: "",
  email: "",
  phone: "",
  jobPosition: "",
  services: [],
  message: "",
}

export const INITIAL_ERRORS: ContactFormErrors = {
  fullName: false,
  email: false,
  phone: false,
  jobPosition: false,
  services: false,
  message: false,
}
