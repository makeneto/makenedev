import { useState } from "react"
import { toast } from "sonner"

import { sendContactForm } from "../services/formspree"
import type { ContactFormData } from "../constants/contact"
import type { ContactFormErrors } from "../constants/contactFormDefaults"
import { INITIAL_ERRORS, INITIAL_STATE } from "../constants/contactFormDefaults"
import {
  getContactFormErrors,
  normalizeContactField,
} from "../utils/contactFormValidation"

export function useContactForm() {
  const [form, setForm] = useState<ContactFormData>(INITIAL_STATE)
  const [errors, setErrors] = useState<ContactFormErrors>(INITIAL_ERRORS)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const isValid =
    form.fullName.trim() &&
    form.email.trim() &&
    form.phone.trim() &&
    form.jobPosition.trim() &&
    form.services.length > 0 &&
    form.message.trim()

  function validateForm() {
    const nextErrors = getContactFormErrors(form)

    setSubmitted(true)
    setErrors(nextErrors)

    return !Object.values(nextErrors).some(Boolean)
  }

  function updateField<K extends keyof ContactFormData>(
    field: K,
    value: ContactFormData[K],
  ) {
    const normalizedValue = normalizeContactField(field, value)

    setForm((prev) => ({
      ...prev,
      [field]: normalizedValue,
    }))

    setErrors((prev) => ({
      ...prev,
      [field]: false,
    }))
  }

  async function handleSubmit() {
    if (!validateForm()) {
      return
    }

    try {
      setLoading(true)

      await sendContactForm(form)

      toast.success("Message sent successfully.")

      setForm(INITIAL_STATE)
      setErrors(INITIAL_ERRORS)
      setSubmitted(false)
    } catch (error) {
      console.error("Formspree error:", error)
      toast.error("Failed to send message.")
    } finally {
      setLoading(false)
    }
  }

  return {
    form,
    loading,
    isValid,
    errors,
    submitted,
    updateField,
    handleSubmit,
  }
}
